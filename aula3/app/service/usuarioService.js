const usuarioDAO = require('../dao/usuarioDAO');

exports.getAll = function () {
    return usuarioDAO.getAll();
};

exports.get = function (id) {
    return usuarioDAO.get(id);
}

exports.save = function (usuario) {
    return usuarioDAO.save(usuario);
}