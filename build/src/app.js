"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routers/auth"));
const errorHandling_1 = __importDefault(require("./middlewares/errorHandling"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const checkDB_1 = __importDefault(require("./routers/checkDB"));
const admin_1 = __importDefault(require("./routers/admin"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)("secret"));
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send("server mlaku");
});
app.use(auth_1.default);
app.use(admin_1.default);
app.use(checkDB_1.default);
app.use(errorHandling_1.default);
exports.default = app;
