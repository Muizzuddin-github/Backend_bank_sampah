"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SetoranKeluarCol = new mongoose_1.default.Schema({
    tabungan_keluar: {
        type: String,
        required: true,
    },
    total_setoran: {
        type: Number,
        default: 0,
    },
    tanggal_setoran_keluar: {
        type: String,
        required: true,
    },
});
exports.default = SetoranKeluarCol;
