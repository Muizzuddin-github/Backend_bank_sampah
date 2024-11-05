"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const setoran_keluar_1 = __importDefault(require("./setoran_keluar"));
const nasabahSchema = new mongoose_1.default.Schema({
    nama: {
        type: String,
        unique: true,
        required: true,
    },
    total_tabungan: {
        type: Number,
        default: 0,
    },
    total_setoran: {
        type: Number,
        default: 0,
    },
    setoran_keluar: [setoran_keluar_1.default],
});
const NasabahCol = mongoose_1.default.model("nasabah", nasabahSchema, "nasabah");
exports.default = NasabahCol;
