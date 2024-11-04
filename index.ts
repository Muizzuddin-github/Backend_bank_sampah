import mongoose from "mongoose";
import app from "./src/app";

async function main() {
  try {
    if (!process.env.DB) {
      throw new Error("Connection database error");
    }

    await mongoose.connect(process.env.DB);

    app.listen(3000, function () {
      console.log("Server is running");
    });
  } catch (error) {
    console.log(error);
  }
}

main();
