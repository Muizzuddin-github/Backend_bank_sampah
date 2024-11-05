"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nasabah_1 = __importDefault(require("../validation/nasabah"));
const nasabah_2 = __importDefault(require("../models/nasabah"));
const errorRes_1 = __importDefault(require("../helpers/errorRes"));
const adminControl = {
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                yield nasabah_1.default.register(body);
                const checkNasabah = yield nasabah_2.default.findOne({
                    nama: body.nama,
                });
                if (checkNasabah) {
                    throw new errorRes_1.default(400, "Nama nasabah sudah ada");
                }
                const insert = new nasabah_2.default(body);
                yield insert.save();
                res.status(200).json({ message: "berhasil mendaftarkan nasabah" });
            }
            catch (error) {
                next(error);
            }
        });
    },
};
exports.default = adminControl;
