import express from "express";
import adminControl from "../controllers/admin";
import onlyLogin from "../middlewares/onlyLogin";

const adminRouter: express.Router = express.Router();

adminRouter.post(
  "/api/admin/nasabah/register",
  onlyLogin,
  adminControl.register
);

export default adminRouter;
