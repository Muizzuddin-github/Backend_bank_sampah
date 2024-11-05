import mongoose from "mongoose";

const SetoranKeluarCol = new mongoose.Schema({
  tabungan_keluar: {
    type: Number,
    required: true,
  },
  tanggal_setoran_keluar: {
    type: String,
    required: true,
  },
});

export default SetoranKeluarCol;
