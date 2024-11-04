import { Request, Response, NextFunction } from "express";
import { LoginAdmin, RegisterAdmin } from "../type/body";
import AuthValidation from "../validation/auth";
import bcrypt from "bcrypt";
import AdminCol from "../models/admin";
import { AdminColType } from "../type/adminCol";
import ResponseErr from "../helpers/errorRes";
import jwt from "jsonwebtoken";

const authControl = {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const body: RegisterAdmin = req.body;
      await AuthValidation.register(body);

      const salt: string = await bcrypt.genSalt(10);
      const hashPassword: string = await bcrypt.hash(body.password, salt);
      body.password = hashPassword;

      const insert = new AdminCol(body);
      await insert.save();

      res.status(200).json({
        msg: "Berhasil register",
      });
    } catch (error) {
      next(error);
    }
  },

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const body: LoginAdmin = req.body;
      await AuthValidation.login(body);

      const checkAdmin: AdminColType | null = await AdminCol.findOne({
        username: body.username,
      });

      if (!checkAdmin) {
        throw new ResponseErr(400, "Periksa username dan password anda");
      }

      const checkPassword: boolean = await bcrypt.compare(
        body.password,
        checkAdmin.password
      );
      if (!checkPassword) {
        throw new ResponseErr(400, "Periksa username dan password anda");
      }

      if (!process.env.SECRET_KEY) {
        throw new Error("Env error");
      }

      const token: string = jwt.sign(
        { _id: checkAdmin._id },
        process.env.SECRET_KEY,
        {
          expiresIn: 604800 * 1000,
        }
      );

      res.cookie("secret", token, {
        signed: true,
        httpOnly: true,
        maxAge: 604800 * 1000,
        sameSite: "none",
        secure: true,
        priority: "high",
      });

      res.status(200).json({ message: "Berhasil login" });
    } catch (error) {
      next(error);
    }
  },
};

export default authControl;
