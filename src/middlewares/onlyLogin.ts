import { NextFunction, Response, Request } from "express";
import ResponseErr from "../helpers/errorRes";
import jwtVerify from "../helpers/jwtVerify";
import mongoose from "mongoose";
import AdminCol from "../models/admin";
import { AdminColType } from "../type/adminCol";

const onlyLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token: string | undefined = req.signedCookies?.secret;
    if (!token) {
      throw new ResponseErr(401, "Silahkan login terlebih dahulu");
    }

    if (!process.env.SECRET_KEY) {
      throw new Error("Env error");
    }

    const decoded = await jwtVerify(process.env.SECRET_KEY, token);

    if (!mongoose.isValidObjectId(decoded._id)) {
      res.cookie("secret", "", {
        signed: true,
        httpOnly: true,
        maxAge: 1,
        sameSite: "none",
        secure: true,
        priority: "high",
      });

      throw new ResponseErr(401, "Silahkan login terlebih dahulu");
    }

    const checkAdmin: AdminColType | null = await AdminCol.findById(
      decoded._id
    );
    if (!checkAdmin) {
      res.cookie("secret", "", {
        signed: true,
        httpOnly: true,
        maxAge: 1,
        sameSite: "none",
        secure: true,
        priority: "high",
      });
      throw new ResponseErr(401, "Silahkan login terlebih dahulu");
    }

    next();
  } catch (error) {
    next(error);
  }
};

export default onlyLogin;
