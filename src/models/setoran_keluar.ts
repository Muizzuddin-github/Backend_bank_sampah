import mongoose from "mongoose";

const SetoranKeluarCol = new mongoose.Schema({
  tabungan_keluar: {
    type: String,
    required: true,
  },
  total_setoran: {
    type: Number,
    default: 0,
  },
  tanggal_setoran_keluar: {
    type: String,
    required: true,
  },
});

export default SetoranKeluarCol;
