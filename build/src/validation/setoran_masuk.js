"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class Schema {
    static get setoranMasukSchema() {
        return joi_1.default.object({
            tanggal_setoran: joi_1.default.string().trim().required(),
            jenis_sampah: joi_1.default.string().trim().required(),
            jumlah_setoran: joi_1.default.number().required(),
        });
    }
}
class SetoranMasukValidation extends Schema {
    static add(body) {
        return this.setoranMasukSchema.validateAsync(body, {
            abortEarly: false,
        });
    }
}
exports.default = SetoranMasukValidation;
