import Joi from "joi";
import { RegisterNasabah } from "../type/body";

class Schema {
  protected static get registerSchema() {
    return Joi.object({
      nama: Joi.string().trim().min(3).required(),
    });
  }
}

class NasabahValidation extends Schema {
  static register(body: RegisterNasabah) {
    return this.registerSchema.validateAsync(body, {
      abortEarly: false,
    });
  }
}

export default NasabahValidation;
