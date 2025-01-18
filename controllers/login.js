// CONTROLLER: LOGIN (POST)

const { User } = require("../models/usuarios");

const login = async (req, res, next) => {
  try {
    const { correo, password } = req.body;

    await User.findOne({ correo: correo, password: password }).then((user) => {
      if (!user) {
        return res.json({
          mensaje: "Usuario no encontrado",
          user: { _id: "NOTFOUND", nombre: "NOTFOUND" },
        });
      }

      console.log(password === user.password);
      if (password === user.password) {
        const { _id, nombre } = user;
        return res.json({
          mensaje: "Login OK",
          user: { _id, nombre },
        });
      } else {
        return res.json({
          mensaje: "Password incorrecta",
          user: { _id: "NOTFOUND", nombre: "NOTFOUND" },
        });
      }
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

module.exports = { login };
