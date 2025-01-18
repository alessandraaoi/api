// BUSCAR ANUNCIOS POR USER ID (GET)

const { Anuncio } = require("../models/anuncios");

const getAnuncioById = async (req, res, next) => {
  try {
    const { userid } = req.params;

    let buscar = await Anuncio.find({ userid: userid });
    res.status(200).json(buscar);
  } catch (error) {
    console.log(error);
    next();
  }
};

// BUSCAR ANUNCIOS POR ANUNCIO ID (GET)

const getAnuncioByAnuncioId = async (req, res, next) => {
  try {
    const { idAnuncio } = req.params;

    let buscar = await Anuncio.findOne({ _id: idAnuncio });

    res.status(200).json(buscar);
  } catch (error) {
    console.log(error);
    next();
  }
};

module.exports = {
  getAnuncioById,
  getAnuncioByAnuncioId,
};
