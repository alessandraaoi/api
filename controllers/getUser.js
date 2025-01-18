// CONTROLLER: BUSCAR USUARIO POR ID (GET)

const { User } = require("../models/usuarios");

const getUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    console.log("user id =", userId);
    if (userId.length === 24) {
      // 24 porque las ids creadas por MONGODB tienen 24 caracteres
      await User.findById({ _id: userId }).then((user) => {
        if (!user) {
          return res.json({ mensaje: "Usuario no encontrado" });
        } else {
          const { _id, password, __v, ...resto } = user._doc;
          console.log(resto);
          res.json(resto);
        }
      });
    } else {
      res.json({ mensaje: "Password incorrecta" });
    }
  } catch (error) {
    console.log(error);
    next();
  }
};

const todosUsers = async (req, res, next) => {
  try {
    const buscar = await User.find();
    res.status(200).json(buscar);
  } catch (error) {
    console.log(error);
    next();
  }
};

module.exports = { getUser, todosUsers };
