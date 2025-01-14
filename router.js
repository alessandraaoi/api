const express = require('express')
const { login } = require('./controllers/login')
const { getUser } = require('./controllers/getUser')
const { getAnuncios } = require('./controllers/getAnuncios')
const { postAnuncio } = require('./controllers/postAnuncio')
const { getAnuncioById, getAnuncioByAnuncioId } = require('./controllers/getAnuncioById')
const { putAnuncio } = require('./controllers/editAnuncio')
const { deleteAnuncio } = require('./controllers/deleteAnuncio')
const router = express.Router()
const cors = require ('cors')


router.route('/login', cors())
.post(login)
// dentro de .post añado la función definida en controllers/login.js

router.route('/user/:userId', cors())
.get(getUser)

router.route('/anuncios', cors())
.get(getAnuncios)
.post(postAnuncio)
 
router.route('/anuncios/:userid', cors())
.get(getAnuncioById)

router.route('/edit/:idAnuncio', cors())
.get(getAnuncioByAnuncioId)
.put(putAnuncio)

router.route('/delete/:idAnuncio', cors())
.delete(deleteAnuncio)

module.exports = {
    router
}