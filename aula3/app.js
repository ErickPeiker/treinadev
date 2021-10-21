'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/', require('./app/route/usuarioRoute'));

const server = app.listen(port, () => {
    console.log("*********************************");
    console.log("* App listening on port " + port);
    console.log("*********************************");
});