import express from "express";
import authRouter from "./routers/auth";
import errorHandling from "./middlewares/errorHandling";
import dotnev from "dotenv";
import cookieParser from "cookie-parser";
import checkDBRouter from "./routers/checkDB";
import adminRouter from "./routers/admin";
import setoranMasukRouter from "./routers/setoran_masuk";
import cors from "cors";
dotnev.config();

const app: express.Application = express();

app.use(cors());
app.use(cookieParser("secret"));
app.use(express.json());

app.get("/", function (req, res) {
  res.send("server mlaku");
});

app.use(authRouter);
app.use(adminRouter);
app.use(setoranMasukRouter);
app.use(checkDBRouter);
app.use(errorHandling);

export default app;
