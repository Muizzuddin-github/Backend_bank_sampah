"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const setoran_masuk_1 = __importDefault(require("../controllers/setoran_masuk"));
const setoranMasukRouter = express_1.default.Router();
setoranMasukRouter.post("/api/setoran-masuk", setoran_masuk_1.default.add);
exports.default = setoranMasukRouter;
