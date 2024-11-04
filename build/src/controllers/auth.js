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
const auth_1 = __importDefault(require("../validation/auth"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const admin_1 = __importDefault(require("../models/admin"));
const errorRes_1 = __importDefault(require("../helpers/errorRes"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authControl = {
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                yield auth_1.default.register(body);
                const salt = yield bcrypt_1.default.genSalt(10);
                const hashPassword = yield bcrypt_1.default.hash(body.password, salt);
                body.password = hashPassword;
                const insert = new admin_1.default(body);
                yield insert.save();
                res.status(200).json({
                    msg: "Berhasil register",
                });
            }
            catch (error) {
                next(error);
            }
        });
    },
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                yield auth_1.default.login(body);
                const checkAdmin = yield admin_1.default.findOne({
                    username: body.username,
                });
                if (!checkAdmin) {
                    throw new errorRes_1.default(400, "Periksa username dan password anda");
                }
                const checkPassword = yield bcrypt_1.default.compare(body.password, checkAdmin.password);
                if (!checkPassword) {
                    throw new errorRes_1.default(400, "Periksa username dan password anda");
                }
                if (!process.env.SECRET_KEY) {
                    throw new Error("Env error");
                }
                const token = jsonwebtoken_1.default.sign({ _id: checkAdmin._id }, process.env.SECRET_KEY, {
                    expiresIn: 604800 * 1000,
                });
                res.cookie("secret", token, {
                    signed: true,
                    httpOnly: true,
                    maxAge: 604800 * 1000,
                    sameSite: "none",
                    secure: true,
                    priority: "high",
                });
                res.status(200).json({ message: "Berhasil login" });
            }
            catch (error) {
                next(error);
            }
        });
    },
};
exports.default = authControl;
