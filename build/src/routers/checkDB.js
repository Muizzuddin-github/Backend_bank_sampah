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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const checkDBRouter = express_1.default.Router();
checkDBRouter.get("/api/check-storage-db", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const check = yield ((_a = mongoose_1.default.connection.db) === null || _a === void 0 ? void 0 : _a.stats());
            const total = (check === null || check === void 0 ? void 0 : check.storageSize) / 1000;
            res.status(200).json({
                message: "data storage anda",
                total: `${total}KB`,
                max: "500mb",
            });
        }
        catch (error) {
            next(error);
        }
    });
});
exports.default = checkDBRouter;
