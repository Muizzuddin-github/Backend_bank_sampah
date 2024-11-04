import mongoose from "mongoose";

export interface AdminColType {
  _id: mongoose.ObjectId;
  username: string;
  password: string;
  harga_satuan: number;
}
