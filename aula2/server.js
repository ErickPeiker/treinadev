const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
const { usuario } = require('./app/model');

app.get('/', async (req, res) => {
    res.send('Olá mundo!');
})

app.post('/usuario', async (req, res) => {
    const usuarioCriado = await usuario.create(req.body);
    res.send(usuarioCriado);
})

app.get('/usuario', async (req, res) => {
    const usuarios = await usuario.findAll();
    res.send(usuarios);
})

app.get('/usuario/:usuario', async (req, res) => {
    const usuarioRetornado = await usuario.findAll({
        where: {
            id: req.params.usuario
        }
    });
    res.send(usuarioRetornado);
})

app.listen(port, () => {
    console.log(`Crud rodando em http://localhost:${port}`);
})