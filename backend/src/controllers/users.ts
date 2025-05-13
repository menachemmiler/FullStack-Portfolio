import { Router } from "express";
import { getAllUsers, login, profile, register, seed } from "../routes/users";
import verifyUser from "../middlewares/verifyUser";

const router = Router();

router.get("/", getAllUsers); //בשביל הסביבת פיתוח

router.post("/seed", seed);// בשביל הסביבת פיתוח

router.post("/login", login);

router.post("/register", register);

router.get("/profile", verifyUser, profile);

export default router;
