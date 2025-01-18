// PUBLICAR NUEVO ANUNCIO (POST)

const { Anuncio } = require("../models/anuncios");

const postAnuncio = async (req, res, next) => {
  console.log("otro");
  try {
    const { title, description, userid } = req.body;

    const nuevo = new Anuncio({ title, description, userid });

    await nuevo.save();

    // devuelve Array actualizado con el nuevo dato
    const buscarTodos = await Anuncio.find();

    res.json(buscarTodos);

    console.log("ANUNCIO CREADO CORRECTAMENTE");
  } catch (error) {
    console.log(error);
    next();
  }
};

module.exports = {
  postAnuncio,
};
