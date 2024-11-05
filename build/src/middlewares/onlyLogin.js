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
const errorRes_1 = __importDefault(require("../helpers/errorRes"));
const jwtVerify_1 = __importDefault(require("../helpers/jwtVerify"));
const mongoose_1 = __importDefault(require("mongoose"));
const admin_1 = __importDefault(require("../models/admin"));
const onlyLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.signedCookies) === null || _a === void 0 ? void 0 : _a.secret;
        if (!token) {
            throw new errorRes_1.default(401, "Silahkan login terlebih dahulu");
        }
        if (!process.env.SECRET_KEY) {
            throw new Error("Env error");
        }
        const decoded = yield (0, jwtVerify_1.default)(process.env.SECRET_KEY, token);
        if (!mongoose_1.default.isValidObjectId(decoded._id)) {
            res.cookie("secret", "", {
                signed: true,
                httpOnly: true,
                maxAge: 1,
                sameSite: "none",
                secure: true,
                priority: "high",
            });
            throw new errorRes_1.default(401, "Silahkan login terlebih dahulu");
        }
        const checkAdmin = yield admin_1.default.findById(decoded._id);
        if (!checkAdmin) {
            res.cookie("secret", "", {
                signed: true,
                httpOnly: true,
                maxAge: 1,
                sameSite: "none",
                secure: true,
                priority: "high",
            });
            throw new errorRes_1.default(401, "Silahkan login terlebih dahulu");
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.default = onlyLogin;
