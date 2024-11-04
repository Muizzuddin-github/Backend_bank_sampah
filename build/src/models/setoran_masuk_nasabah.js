"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schemaSetoranMasuk = new mongoose_1.default.Schema({
    jenis_sampah: {
        type: String,
        required: true,
    },
    jumlah_setoran: {
        type: Number,
        required: true,
    },
    harga_satuan: {
        type: Number,
        required: true,
    },
    tanggal_setoran: {
        type: Date,
        required: true,
    },
});
const SetoranMasukCol = mongoose_1.default.model("setoran_masuk", schemaSetoranMasuk, "setoran_masuk");
exports.default = SetoranMasukCol;
