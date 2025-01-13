// ACTUALIZAR UN ANUNCIO (PUT)

const {Anuncio} = require('../models/anuncios')


const putAnuncio = async (req, res, next) => {
    try {

        const {_id, ...datos} = req.body

        // ERROR: NO RECIBE EL ID
        // ID: UNDEFINED ???
        await Anuncio.findByIdAndUpdate(_id, datos)
        console.log('_id', _id);
        
        console.log('datos OK:', datos);
        
        const buscar = await Anuncio.find()
        res.json(buscar)

    } catch (error) {
        console.log(error)
        next()
    }
}

module.exports = { putAnuncio }