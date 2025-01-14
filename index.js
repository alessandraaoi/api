console.clear()
console.log('Iniciando login-express');

const express = require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose')
const {router} = require ('./router')
// importo la conexión a mi base de datos en MONGODB
const db = require('./database/db')

const app = express () 

app.use(cors())
app.use (express.json())
app.use(express.urlencoded({extended:false}))
// app.use((req, res, next) =>  {
//     res.setHeader("Access-Control-Allow-Private-Network", "true")
//     next();
// })

app.get('/', (req, res) => {
    res.json('Haciendo get en /');
})

app.use(router)

const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

app.use(cors(corsOption));

app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Origin",
      "React app URL"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

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