import Joi from "joi";
import { LoginAdmin, RegisterAdmin } from "../type/body";

class Schema {
  protected static get registerSchema() {
    return Joi.object({
      username: Joi.string().trim().min(3).required(),
      password: Joi.string().trim().min(5).required(),
    });
  }
  protected static get LoginSchema() {
    return Joi.object({
      username: Joi.string().trim().required(),
      password: Joi.string().trim().required(),
    });
  }
}

class AuthValidation extends Schema {
  static register(body: RegisterAdmin) {
    return this.registerSchema.validateAsync(body, {
      abortEarly: false,
    });
  }
  static login(body: LoginAdmin) {
    return this.LoginSchema.validateAsync(body, {
      abortEarly: false,
    });
  }
}

export default AuthValidation;
