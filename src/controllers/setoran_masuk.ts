import { Request, Response, NextFunction } from "express";
import { SetoranMasukType } from "../type/body";
import SetoranMasukValidation from "../validation/setoran_masuk";
import SetoranMasukCol from "../models/setoran_masuk_nasabah";
import { AdminColType } from "../type/adminCol";
import AdminCol from "../models/admin";
import ResponseErr from "../helpers/errorRes";

const setoranMasukControl = {
  async add(req: Request, res: Response, next: NextFunction) {
    try {
      const body: SetoranMasukType = req.body;
      await SetoranMasukValidation.add(body);

      const admin: AdminColType | null = await AdminCol.findOne();
      if (!admin) {
        throw new ResponseErr(500, "Admin required");
      }
      body.harga_satuan = admin?.harga_satuan;

      const insert = new SetoranMasukCol(body);
      await insert.save();

      res.status(201).json({ message: "Berhasil menambah setoran masuk" });
    } catch (error) {
      next(error);
    }
  },
};

export default setoranMasukControl;
