"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class Schema {
    static get registerSchema() {
        return joi_1.default.object({
            nama: joi_1.default.string().trim().min(3).required(),
        });
    }
}
class NasabahValidation extends Schema {
    static register(body) {
        return this.registerSchema.validateAsync(body, {
            abortEarly: false,
        });
    }
}
exports.default = NasabahValidation;
