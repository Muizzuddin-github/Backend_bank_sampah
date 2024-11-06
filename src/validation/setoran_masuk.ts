import Joi from "joi";
import { SetoranMasukType } from "../type/body";

class Schema {
  protected static get setoranMasukSchema() {
    return Joi.object({
      tanggal_setoran: Joi.string().trim().required(),
      jenis_sampah: Joi.string().trim().required(),
      jumlah_setoran: Joi.number().required(),
    });
  }
}

class SetoranMasukValidation extends Schema {
  static add(body: SetoranMasukType) {
    return this.setoranMasukSchema.validateAsync(body, {
      abortEarly: false,
    });
  }
}

export default SetoranMasukValidation;
