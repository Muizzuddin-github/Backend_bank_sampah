import mongoose from "mongoose";

const schemaSetoranMasuk = new mongoose.Schema({
  jenis_sampah: {
    type: String,
    required: true,
  },
  jumlah_setoran: {
    type: Number,
    required: true,
  },
  harga_satuan: {
    type: Number,
    required: true,
  },
  tanggal_setoran: {
    type: Date,
    required: true,
  },
});

const SetoranMasukCol = mongoose.model(
  "setoran_masuk",
  schemaSetoranMasuk,
  "setoran_masuk"
);

export default SetoranMasukCol;
