import express from "express";
import setoranMasukControl from "../controllers/setoran_masuk";

const setoranMasukRouter: express.Router = express.Router();

setoranMasukRouter.post("/api/setoran-masuk", setoranMasukControl.add);

export default setoranMasukRouter;
