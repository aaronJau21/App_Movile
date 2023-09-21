import { Router } from "express";
import { register } from "../controller/Auth.controller";

const router = Router();

router.post("/register", register);

export default router;
