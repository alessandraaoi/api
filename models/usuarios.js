// -------------- MODELO DE USUARIO
const mongoose = require("mongoose");

// En la constante 'userSchema', defino los campos que tendrán los usuarios
// Defino el tipo de dato de cada campo

const userSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
      // unique: true
    },
  },
  { collection: "users" }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };

// exporto el modelo de usuario 'User'
