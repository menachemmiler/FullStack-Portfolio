import { Request, Response } from "express";

import {
  createNewProjectService,
  getAllProjectsService,
  seedCreateProjectsService,
} from "../services/projects";
import { IProject, ProjectData } from "../types/projects";

export const createNewProject = async (req: Request, res: Response) => {
  try {
    const newProject = await createNewProjectService(req.body);
    res.status(201).json(newProject);
  } catch (err: any) {
    console.log(err);
    res.status(400).json(err.message);
  }
};

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await getAllProjectsService();
    res.status(200).json(projects);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const listProjects: ProjectData[] = [
  {
    title: "project 1",
    description: "short description",
    fullDescription: "long description",
    image: "image",
    liveLink: "link",
  },
  {
    title: "project 2",
    description: "short description",
    fullDescription: "long description",
    image: "image",
    liveLink: "link",
  },
];

export const seedTocreateProjects = async (_req: Request, res: Response) => {
  try {
    const newProjects = await seedCreateProjectsService(
      listProjects as IProject[]
    );
    res.status(201).json(newProjects);
  } catch (err: any) {
    console.log(err);
    res.status(400).json(err.message);
  }
};
