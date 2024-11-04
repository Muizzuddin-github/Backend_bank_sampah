import mongoose from "mongoose";
import SetoranKeluarCol from "./setoran_keluar";

const nasabahSchema = new mongoose.Schema({
  nama: {
    type: String,
    unique: true,
    required: true,
  },
  total_tabungan: {
    type: String,
    required: true,
  },
  total_setoran: {
    type: Number,
    default: 0,
  },
  setoran_keluar: [SetoranKeluarCol],
});

const NasabahCol = mongoose.model("nasabah", nasabahSchema, "nasabah");

export default NasabahCol;
