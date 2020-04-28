'use strict';
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbName = 'videojuegos';

//A y B
exports.obtener_plataforma = (req, res) => {
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},  (err,
                                                                                  mdbclient) =>{
        if (err) {

            throw err;
        }
        const db = mdbclient.db(dbName);

        //Solamente obtenemos el nombre y la matricula
        let query = req.params.parametro;
        console.log(query);
        let consola = db.collection("consola");

        consola.find({'nombre':new RegExp(query,'i')}).project({_id: 0, nombre: 1, imagen: 1, ficha_tecnica: 1}).toArray((err, result) => {

            if (err) {

                throw err;
            }

            if (result.length === 0){
                consola.find({'_id':new RegExp(query,'i')}).project({_id: 0, nombre: 1, imagen: 1, ficha_tecnica: 1}).toArray((err, result) => {
                    if (err) { throw err; }

                    console.log("Resultados Obtenidos: " + result.length);
                    mdbclient.close();
                    res.end(JSON.stringify(result));

                })
            }
            else {
                console.log("Resultados Obtenidos: " + result.length);
                mdbclient.close();
                res.end(JSON.stringify(result));
            }

        });

    });
};

// C
exports.obtener_juegos_aggregate = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err,
                                                                                           mdbclient) {
        if (err){

            throw err;
        }
        const db = mdbclient.db(dbName);
        var col = db.collection('juegos');
        var palabraClave = req.params.palabraClave;
        col.aggregate([
            { $unwind: '$juegos'},
            { $match: {'juegos.nombre': new RegExp(palabraClave,'i') }},
            { $project: { _id: 0, nombre: '$juegos.nombre' ,imagen: '$juegos.imagen'} }
        ]).toArray(function(err, result){
            if (err){

                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end( JSON.stringify(result));

        });
    });
};

// D
exports.obtener_juegos_limited = (req, res) => {
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},  (err,
                                                                                  mdbclient) =>{
        if (err) {

            throw err;
        }

        const db = mdbclient.db(dbName);
        let palabraClave = req.params.palabraClave;
        db.collection("juego").find({"_id":palabraClave}).project({_id: 0, nombre: 1, imagen: 1}).toArray((err, result) => {

            if (err) {
                throw err;
            }

            if (result.length === 0){
                db.collection("juego").find({"nombre":new RegExp(palabraClave,"i")}).project({_id: 0, nombre: 1, imagen: 1}).toArray((err, result) => {

                    if (err) {

                        throw err;
                    }

                    console.log("Resultados Obtenidos: " + result.length);
                    mdbclient.close();
                    res.end(JSON.stringify(result));

                });
            }else{
                console.log("Resultados Obtenidos: " + result.length);
                mdbclient.close();
                res.end(JSON.stringify(result));
            }

        });

    });
};

// E
exports.obtener_juegos_pro = (req, res) => {
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},  (err,
                                                                                  mdbclient) =>{
        if (err) {

            throw err;
        }

        const db = mdbclient.db(dbName);
        let palabraClave = req.params.palabraClave;
        db.collection("juego").find({"_id":palabraClave}).project({_id: 0, nombre: 1, fecha: 1, developer: 1, lanzamiento:1, imagenes:1, links:1}).toArray((err, result) => {

            if (err) {
                throw err;
            }

            if (result.length === 0){
                db.collection("juego").find({"nombre":new RegExp(palabraClave,"i")}).project({_id: 0, nombre: 1, fecha: 1, developer: 1, lanzamiento:1, imagenes:1, links:1}).toArray((err, result) => {

                    if (err) {

                        throw err;
                    }

                    console.log("Resultados Obtenidos: " + result.length);
                    mdbclient.close();
                    res.end(JSON.stringify(result));

                });
            }else{
                console.log("Resultados Obtenidos: " + result.length);
                mdbclient.close();
                res.end(JSON.stringify(result));
            }

        });

    });
};

// F
exports.obtener_blog = (req, res) => {
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},  (err,
                                                                                  mdbclient) =>{
        if (err) {

            throw err;
        }

        let query = req.params.parametro;
        const db = mdbclient.db(dbName);
        db.collection("publicaciones").find({"_id":query}).project({_id: 0, nombre: 1, fecha: 1, contenido: 1}).toArray((err, result) => {

            if (err) {

                throw err;
            }


            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end(JSON.stringify(result));

        });

    });
};
