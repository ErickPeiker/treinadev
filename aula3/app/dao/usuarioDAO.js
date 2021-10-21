const { usuarioDB } = require('../model');

exports.getAll = function () {
    return usuarioDB.findAll();
}

exports.get = function (id) {
    return usuarioDB.findByPk(id);
}

exports.save = function (usuario) {
    return usuarioDB.create(usuario);
}