import { Router } from "express";
import verifyUser from "../middlewares/verifyUser";
import { createNewProject, getAllProjects } from "../routes/projects";

const router = Router();


router.get("/", getAllProjects);//בשביל הסביבת פיתוח

router.post("/", verifyUser, createNewProject);


export default router;
