// BUSCAR TODOS LOS ANUNCIOS (GET)

const { Anuncio } = require("../models/anuncios");

const getAnuncios = async (req, res, next) => {
  try {
    const buscar = await Anuncio.find();
    res.status(200).json(buscar);
  } catch (error) {
    console.log(error);
    next();
  }
};

module.exports = {
  getAnuncios,
};
