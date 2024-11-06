import { Request, Response, NextFunction } from "express";
import { RegisterNasabah } from "../type/body";
import NasabahValidation from "../validation/nasabah";
import NasabahCol from "../models/nasabah";
import { NasabahColType } from "../type/nasabahCol";
import ResponseErr from "../helpers/errorRes";

const adminControl = {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const body: RegisterNasabah = req.body;
      await NasabahValidation.register(body);

      const checkNasabah: NasabahColType | null = await NasabahCol.findOne({
        nama: body.nama,
      });

      if (checkNasabah) {
        throw new ResponseErr(400, "Nama nasabah sudah ada");
      }

      const insert = new NasabahCol(body);
      await insert.save();

      res.status(200).json({ message: "berhasil mendaftarkan nasabah" });
    } catch (error) {
      next(error);
    }
  },

  async getAllNasabah(req: Request, res: Response, next: NextFunction) {
    try {
      const nasabah: NasabahColType[] = await NasabahCol.aggregate([
        {
          $sort: {
            nama: 1,
          },
        },
        {
          $project: {
            setoran_keluar: 0,
          },
        },
      ]);

      res.status(200).json({ message: "Semua data nasabah", data: nasabah });
    } catch (error) {
      next(error);
    }
  },
};

export default adminControl;
