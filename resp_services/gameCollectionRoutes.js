//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';
/*
* module.exports existe por default en cada archivo JS de Node.
* module es una variable que representa un módulo, y exports es un objeto que
* expone dicho módulo.
*/
module.exports = (app) => {
    let gameCollection = require('./gameCollectionController');
    app.route('/games')
        .get(gameCollection.obtener_juegos)
        .post(gameCollection.agregar_juego);

    app.route('/games/:gameId')
        .get(gameCollection.obtener_juego)
        .delete(gameCollection.delete);


    app.route('/search/:query').get(gameCollection.search)
};
