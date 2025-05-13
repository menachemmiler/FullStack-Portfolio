import { Router } from "express";
import {
  createNewProject,
  deleteProject,
  getAllProjects,
  seedTocreateProjects,
  updateProject,
} from "../routes/projects";
import verifyUser from "../middlewares/verifyUser";
import { upload } from "../middlewares/multer";

const router = Router();

router.get("/", getAllProjects); //בשביל הסביבת פיתוח

router.post("/", verifyUser, upload.single("image"), createNewProject);

router.put("", verifyUser, updateProject);

router.delete("/:id", verifyUser, deleteProject);

router.post("/seed", seedTocreateProjects); // בשביל סביבת פיתוח

export default router;
