import express from "express";
import authRouter from "./routers/auth";
import errorHandling from "./middlewares/errorHandling";
import dotnev from "dotenv";
import cookieParser from "cookie-parser";
import checkDBRouter from "./routers/checkDB";
dotnev.config();

const app: express.Application = express();

app.use(cookieParser("secret"));
app.use(express.json());

app.get("/", function (req, res) {
  res.send("server mlaku");
});

app.use(authRouter);
app.use(checkDBRouter);
app.use(errorHandling);

export default app;
