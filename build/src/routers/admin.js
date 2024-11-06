"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_1 = __importDefault(require("../controllers/admin"));
const onlyLogin_1 = __importDefault(require("../middlewares/onlyLogin"));
const adminRouter = express_1.default.Router();
adminRouter.post("/api/admin/nasabah/register", onlyLogin_1.default, admin_1.default.register);
adminRouter.get("/api/admin/nasabah", onlyLogin_1.default, admin_1.default.getAllNasabah);
exports.default = adminRouter;
