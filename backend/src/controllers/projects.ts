import { Request, Response } from "express";

import {
  createNewProjectService,
  deleteProjectService,
  getAllProjectsService,
  seedCreateProjectsService,
  updateProjectService,
} from "../services/projects";
import { IProject, IProjectDTO } from "../types/projects";

export const createNewProject = async (req: Request, res: Response) => {
  try {
    const newProject = await createNewProjectService({
      ...req.body,
      image: req.file,
    });
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

const listProjects = [
  {
    title: "Led Plus",
    description:
      "E-commerce and showcase website for professional lighting fixtures and electrical equipment.",
    fullDescription:
      "Assisted in finalizing website development, UI/UX adjustments, and successfully executed full Google indexing and Search Console integration. The platform is live and actively serving customers.",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk4U-12sfjTKN4ODOvgVFKw2aYAJWKuIW5jH-OFAUn4UkEDOeDCeJ6n0h5LgAAVaPgtM4afUL-3oD5A0tDcSsGKgx2hpFi09ezmpJYwVPA4fgUS7nODeviA1K_k9yypXPRBBmjv=w115-h115-n-k-no",
    backendLink: " https://ledplus.co.il/wp-admin",
    liveLink: "https://ledplus.co.il",
  },
  {
    title: "Global Cyber Attacks Analytics Dashboard",
    description:
      "A data visualization platform for monitoring, reporting, and analyzing global cyber attack trends, geographic hotspots, and threat metrics.",
    fullDescription:
      "Interactive analytics dashboard built to visualize cyber security incidents. Features data aggregation by date, region, and attack vectors using interactive charts and geographic maps, alongside a management system for updating new incident logs.",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk4U-12sfjTKN4ODOvgVFKw2aYAJWKuIW5jH-OFAUn4UkEDOeDCeJ6n0h5LgAAVaPgtM4afUL-3oD5A0tDcSsGKgx2hpFi09ezmpJYwVPA4fgUS7nODeviA1K_k9yypXPRBBmjv=w115-h115-n-k-no",
    backendLink: "https://attacks-client.onrender.com",
    githubAll: "sdv",
    liveLink: "https://attacks-client.onrender.com",
  },
];

export const seedTocreateProjects = async (_req: Request, res: Response) => {
  try {
    const newProjects = await seedCreateProjectsService(
      listProjects as IProject[],
    );
    res.status(201).json(newProjects);
  } catch (err: any) {
    console.log(err);
    res.status(400).json(err.message);
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const updatedProject = await updateProjectService(req.body);
    res.status(201).json(updatedProject);
  } catch (err: any) {
    console.log(err);
    res.status(400).json(err.message);
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const deletedProject = await deleteProjectService(req.params.id);
    res.status(200).json(deletedProject);
  } catch (err: any) {
    console.log(err);
    res.status(400).json(err.message);
  }
};
