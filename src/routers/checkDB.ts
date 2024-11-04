import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

const checkDBRouter: express.Router = express.Router();

checkDBRouter.get(
  "/api/check-storage-db",
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      const check = await mongoose.connection.db?.stats();
      const total: number = check?.storageSize / 1000;

      res.status(200).json({
        message: "data storage anda",
        total: `${total}KB`,
        max: "500mb",
      });
    } catch (error) {
      next(error);
    }
  }
);

export default checkDBRouter;
