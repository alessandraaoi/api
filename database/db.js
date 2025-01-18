const mongoose = require("mongoose");

const db = async () => {
  // guardo URL de Mongo Compass localhost:27017
  await mongoose
    .connect(
      process.env.URL_MONGO_ATLAS || "mongodb://localhost:27017/proyecto"
    )
    .catch((error) => {
      console.log("Error Mongo" + error);
    });
};

const connection = mongoose.connection;

connection.once("open", () => console.log("Conexión con MongoDB OK"));
connection.on("error", (err) => console.log("Error de conexión: " + err));

module.exports = db;
