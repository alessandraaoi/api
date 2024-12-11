const express = require('express');
const cors = require('cors');

const app = express();
const PORT  = 3000;
const MONGO = process.env.URL_MONGO_ATLAS || 'mongodb://localhost:27017/nombre-bbdd'

app.use( cors() )

app.get('/', (req, res) => {
    res.json('Haciendo get en /');
})

app.listen(PORT, () => {
    console.log(`API escuchando en http://localhost:${PORT}`);
})