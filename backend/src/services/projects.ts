import Project from "../models/project";
import { IProject, IProjectDTO, ProjectDocument } from "../types/projects";
import { createNewImage, deleteImage } from "./images";

export const createNewProjectService = async (project: IProjectDTO) => {
  try {
    const { title, image, liveLink, fullDescription, description } = project;
    if (!title || !image || !liveLink || !fullDescription || !description) {
      throw new Error(
        "Missing project data, [title, image, liveLink, fullDescription, description] is require"
      );
    }
    const uploadResponse = await createNewImage({
      file: image,
    });
    if (!uploadResponse?.url) {
      throw new Error("Image upload failed — no URL returned");
    }
    const newProject = new Project({ ...project, image: uploadResponse.url });
    const savedProject = await newProject.save();
    return savedProject;
  } catch (err: any) {
    console.log(err);
    throw new Error("Can't create new project: " + err.message);
  }
};

export const getAllProjectsService = async () => {
  try {
    const allProjects = await Project.find();
    return allProjects;
  } catch (err: any) {
    console.log(err);
    throw new Error(`${err.message}`);
  }
};

//seed
export const seedCreateProjectsService = async (projects: IProject[]) => {
  try {
    return await Project.insertMany(projects);
  } catch (err: any) {
    console.log(err);
    throw new Error(`${err.message}`);
  }
};

export const updateProjectService = async (project: ProjectDocument) => {
  try {
    const { title, image, liveLink, fullDescription, description, _id } =
      project;
    if (
      !title ||
      !image ||
      !liveLink ||
      !fullDescription ||
      !description ||
      !_id
    ) {
      throw new Error(
        "Missing project data, [title, image, liveLink, fullDescription, description, _id] is require"
      );
    }
    const updatedProject = await Project.findByIdAndUpdate(_id, project);
    return updatedProject;
  } catch (err: any) {
    throw new Error("Can't update the project: " + err.message);
  }
};

export const deleteProjectService = async (projectId: string) => {
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      throw new Error("Cant find the project with this id: " + projectId);
    }
    const deleteImageResponse = await deleteImage(project.image);
    if (!deleteImageResponse) {
      throw new Error("Image deletion failed");
    }
    const deletedProject = await Project.deleteOne({ _id: project._id });
    return deletedProject;
  } catch (err: any) {
    throw new Error("Can't delete the project: " + err.message);
  }
};
