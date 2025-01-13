// ELIMINAR ANUNCIO (DELETE)

const {Anuncio} = require('../models/anuncios')


const deleteAnuncio = async (req, res, next) => {
    try {
        const {idAnuncio} = req.params

        await Anuncio.findByIdAndDelete(idAnuncio)

        // devuelve Array actualizado con el dato eliminado
        const buscar = await Anuncio.find()

        res.status(200).json(buscar)

        console.log(idAnuncio, 'anuncio eliminado ok');
        

    } catch (error) {
        console.log(error);
        
        next();
        
    }
}

module.exports = {
    deleteAnuncio
}

// app.delete ('/gestor/id/:_id', (req, res, next) => {
//     try {
//         const {_id} = req.params
//         const busqueda = users.filter(user => user._id != _id)

//         users = busqueda

//         res.status(200).json(users)
//     } catch (error) {
//         console.log(error);
        
//         next();
        
//     }
// })