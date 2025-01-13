// MODELO, SCHEMA DE ANUNCIO

const mongoose = require('mongoose')

const anuncioSchema = new mongoose.Schema ({

    title: {
        type: String
    },
    description: {
        type: String
    },
    userid: {
        type: String
    }
}, {collection: 'anuncios'})

const Anuncio = mongoose.model('Anuncio', anuncioSchema)

// exporto 
module.exports = {
    Anuncio
}



