const express = require('express');
const cors = require('cors');

const app = express();
const PORT  = 3000;
const MONGO = process.env.URL_MONGO_ATLAS || 'mongodb+srv://alexxandraoix3:ale@cluster0.bkvenvv.mongodb.net/Proyecto'

app.use( cors() )

app.get('/', (req, res) => {
    res.json('Haciendo get en /');
})

app.listen(3000, () => {
    console.log(`API escuchando en http://localhost:3000`);
})