'use strict';
module.exports = function (app) {
    let juegosController = require('./juegosCollectionController');
    app.route('/plataforma/:parametro')
        .get(juegosController.obtener_plataforma)

};
