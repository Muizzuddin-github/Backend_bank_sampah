import { Request, Response, NextFunction } from "express";

const authControl = {
  register(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json({
        msg: "ini rregister",
      });
    } catch (error) {
      next(error);
    }
  },
};

export default authControl;
