import Project from "../models/project";
import { IProject } from "../types/projects";


export const createNewProjectService = async (project: IProject) => {
  try {
    const { title, image, liveLink, fullDescription, description } = project;
    if (!title || !image || !liveLink || !fullDescription || !description) {
      throw new Error("Missing project data, [title, image, liveLink, fullDescription, description] is require");
    }
    const newProject = new Project(project);
    return await newProject.save();
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
}
