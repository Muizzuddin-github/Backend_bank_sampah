"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorRes_1 = __importDefault(require("../helpers/errorRes"));
const joi_1 = __importDefault(require("joi"));
const errorHandling = (err, req, res, next) => {
    if (!err) {
        next();
        return;
    }
    if (err instanceof errorRes_1.default) {
        return res.status(err.getStatus).json({ errors: [err.message] });
    }
    else if (err instanceof joi_1.default.ValidationError) {
        return res.status(400).json({ errors: err.message.split(".") });
    }
    return res.status(500).json({ errors: [err.message] });
};
exports.default = errorHandling;
