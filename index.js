console.clear();
console.log("Iniciando login-express");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { router } = require("./router");
// importo la conexión a mi base de datos
const db = require("./database/db");
const { User } = require("./models/usuarios");
const app = express();

db();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

// Middlewares para gestionar errores
app.use((req, res, next) => {
  let error = new Error();
  error.message = "No encuentro el Endpoint";
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  let { status, message } = error;
  status = status || 500;

  res.status(status).json(`Error en la API: ${message}`);
});

app.listen(3000, () => {
  console.log(`Iniciando el server`);
});

module.exports = app;
