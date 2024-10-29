import app from "./src/app";

function main() {
  try {
    app.listen(3000, function () {
      console.log("Server is running");
    });
  } catch (error) {
    console.log(error);
  }
}

main();
