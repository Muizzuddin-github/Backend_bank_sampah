import express from "express";
import authRouter from "./routers/auth";
import errorHandling from "./middlewares/errorHandling";

const app: express.Application = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("server mlaku");
});

app.use(authRouter);

app.use(errorHandling);

export default app;
