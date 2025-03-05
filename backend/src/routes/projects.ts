import { Request, Response } from "express";

import { createNewProjectService, getAllProjectsService } from "../services/projects";


export const createNewProject = async (req: Request, res: Response) => {
  try {
    const newProject = await createNewProjectService(req.body);
    res.status(201).json(newProject);
  } catch (err: any) {
    console.log(err);
    res.status(400).json(err.message);
  }
}


export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await getAllProjectsService();
    res.status(200).json(projects);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
