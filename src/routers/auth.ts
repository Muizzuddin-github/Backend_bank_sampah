import express from "express";
import authControl from "../controllers/auth";

const authRouter: express.Router = express.Router();

authRouter.post("/api/register", authControl.register);

export default authRouter;
