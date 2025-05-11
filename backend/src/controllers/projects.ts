import { Router } from "express";
import {
  createNewProject,
  deleteProject,
  getAllProjects,
  seedTocreateProjects,
  updateProject,
} from "../routes/projects";
import verifyUser from "../middlewares/verifyUser";

const router = Router();

router.get("/", getAllProjects); //בשביל הסביבת פיתוח

router.post("/", verifyUser, createNewProject);

router.put("", verifyUser, updateProject);

router.delete("/:id", verifyUser, deleteProject);

router.post("/seed", seedTocreateProjects); // בשביל סביבת פיתוח

export default router;
