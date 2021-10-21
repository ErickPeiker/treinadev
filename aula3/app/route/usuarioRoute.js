const express = require('express');
const router = express.Router();
const usuarioService = require('../service/usuarioService');

router.get('/usuario', async function (req, res) {
    const usuarios = await usuarioService.getAll();
    res.json(usuarios);
});

router.get('/usuario/:id', async function (req, res) {
    const usuario = await usuarioService.get(req.params.id);
    res.json(usuario);
});

router.post('/usuario', async function (req, res) {
    const usuarioInserido = await usuarioService.save(req.body);
    res.json(usuarioInserido);
});

module.exports = router;