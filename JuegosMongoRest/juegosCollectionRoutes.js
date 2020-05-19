'use strict';
module.exports = function (app) {
    let juegosController = require('./juegosCollectionController');

    app.route('/save_consola').post(juegosController.save_consola);

    app.route('/save_juego').post(juegosController.save_juego);

    app.route('/plataformas').get(juegosController.obtener_todas_plataformas);

    app.route('/plataforma/:parametro').get(juegosController.obtener_plataforma);

    app.route('/juegos/:palabraClave').get(juegosController.obtener_juegos_aggregate);

    app.route('/buscar_juegos/:palabraClave').get(juegosController.obtener_juegos_pro);

    app.route('/buscar_juegos_limited/:palabraClave').get(juegosController.obtener_juegos_limited);

    app.route('/blog').get(juegosController.obtener_blog);

    app.route('/plataforma_juegos/:palabraClave').get(juegosController.obtener_juegos_plataforma);


};
