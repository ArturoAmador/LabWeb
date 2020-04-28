'use strict';
module.exports = function (app) {
    let juegosController = require('./juegosCollectionController');

    app.route('/plataforma/:parametro').get(juegosController.obtener_plataforma);

    app.route('/juegos/:palabraClave').get(juegosController.obtener_juegos_aggregate);

    app.route('/buscar_juegos/:palabraClave').get(juegosController.obtener_juegos_pro);

    app.route('/buscar_juegos_limited/:palabraClave').get(juegosController.obtener_juegos_limited);

    app.route('/blog').get(juegosController.obtener_blog);

};
