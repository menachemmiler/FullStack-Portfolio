import Project from "../models/project";
import { IProject, IProjectDTO, ProjectDocument } from "../types/projects";
import { createNewImage } from "./images";

export const createNewProjectService = async (project: IProjectDTO) => {
  try {
    const { title, image, liveLink, fullDescription, description } = project;
    if (!title || !image || !liveLink || !fullDescription || !description) {
      throw new Error(
        "Missing project data, [title, image, liveLink, fullDescription, description] is require"
      );
    }
    const uploadResponse = await createNewImage({
      title,
      description,
      file: image,
    });
    const uploadedImage = uploadResponse.image;
    if (!uploadedImage?.url) {
      throw new Error("Image upload failed — no URL returned");
    }
    const newProject = new Project({ ...project, image: uploadedImage.url });
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
    console.log(err);
    throw new Error("Can't update the project: " + err.message);
  }
};

export const deleteProjectService = async (project: ProjectDocument) => {
  try {
    if (!project._id) {
      throw new Error("Missing project data,  _id is require");
    }
    const deletedProject = await Project.deleteOne({ _id: project._id });
    return deletedProject;
  } catch (err: any) {
    console.log(err);
    throw new Error("Can't update the project: " + err.message);
  }
};
