import { Router } from "express";
import verifyUser from "../middlewares/verifyUser";
import { createNewProject, getAllProjects, seedTocreateProjects } from "../routes/projects";

const router = Router();



router.get("/", getAllProjects);//בשביל הסביבת פיתוח

router.post("/", verifyUser, createNewProject);

router.post("/seed", seedTocreateProjects);


export default router;
