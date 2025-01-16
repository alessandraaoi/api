console.clear()
console.log('Iniciando login-express');

const express = require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose')
const {router} = require ('./router')
// importo la conexión a mi base de datos en MONGODB
const db = require('./database/db')
const { User } = require('./models/usuarios');
const app = express () 

app.use(cors())
app.use (express.json())
app.use(express.urlencoded({extended:false}))





// Add headers before the routes are defined
// app.use( (req, res, next) => {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

app.use(router)

// Middlewares para gestionar errores
app.use(( req , res , next  )=>{
    let error = new Error()
        error.message = 'No encuentro el Endpoint'
        error.status  = 404
        next(error)
})

app.use(( error , req , res , next  )=>{
        let { status , message } = error
              status = status || 500
        
        res.status(status).json(`Error en la API: ${message}`)
})

app.listen(3000, () => {
    console.log(`Iniciando el server`)
    db()
}) 

module.exports = app;