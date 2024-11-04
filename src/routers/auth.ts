import express from "express";
import authControl from "../controllers/auth";

const authRouter: express.Router = express.Router();

authRouter.post("/api/register", authControl.register);
authRouter.post("/api/login", authControl.login);

export default authRouter;
