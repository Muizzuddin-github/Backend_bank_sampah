"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routers/auth"));
const errorHandling_1 = __importDefault(require("./middlewares/errorHandling"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send("server mlaku");
});
app.use(auth_1.default);
app.use(errorHandling_1.default);
exports.default = app;
