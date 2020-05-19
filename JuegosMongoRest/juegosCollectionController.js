'use strict';
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbName = 'videojuegos';
const mongoose = require('mongoose');

// define Schema
let consolaSchema = mongoose.Schema({
    _id: String,
    nombre: String,
    imagen: String,
    ficha_tecnica: String,
    lista_de_juesgo: Array
});

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

        consola.find({'nombre':new RegExp(query,'i')}).project({_id: 1, nombre: 1, imagen: 1, ficha_tecnica: 1}).toArray((err, result) => {

            if (err) {

                throw err;
            }

            if (result.length === 0){
                consola.find({'_id':new RegExp(query,'i')}).project({_id: 1, nombre: 1, imagen: 1, ficha_tecnica: 1}).toArray((err, result) => {
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
        /*const db = mdbclient.db(dbName);
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

        });*/

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

        const ObjectId  = require('mongodb').ObjectID;
        //ObjectId(palabraClave);

        db.collection("juego").find({"_id":new RegExp(palabraClave)}).project({_id: 0, nombre: 1, fecha: 1, developer: 1, lanzamiento:1, imagenes:1, links:1, imagen:1}).toArray((err, result) => {

            if (err) {
                throw err;
            }

            if (result.length === 0){
                db.collection("juego").find({"nombre":new RegExp(palabraClave,"i")}).project({_id: 0, nombre: 1, fecha: 1, developer: 1, lanzamiento:1, imagenes:1, links:1, imagen: 1}).toArray((err, result) => {

                    if (err) {

                        throw err;
                    }

                    console.log("Resultados Obtenidos: " + result.length);
                    mdbclient.close();
                    res.end(JSON.stringify(result));

                });
            }
            else{
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
        db.collection("blog").find().project({_id: 0, nombre: 1, fecha: 1, contenido: 1}).toArray((err, result) => {

            if (err) {

                throw err;
            }


            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end(JSON.stringify(result));

        });

    });
};


exports.obtener_todas_plataformas = (req, res) => {
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

        consola.find().project({_id: 1, nombre: 1, imagen: 1, ficha_tecnica: 1}).toArray((err, result) => {

            if (err) {

                throw err;
            }


            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end(JSON.stringify(result));


        });

    });
};


exports.obtener_juegos_plataforma = (req, res) => {
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},  (err,
                                                                                  mdbclient) =>{

        if (err) { throw err; }

        const db = mdbclient.db(dbName);

        //Solamente obtenemos el nombre y la matricula
        let id = req.params.palabraClave;
        console.log('id: ',id);
        let consola = db.collection("consola");
        let juegos = db.collection("juego");
        let games;

        consola.find({'_id': new RegExp(id,'i') }).project({_id: 0, lista_de_juesgo: 1}).toArray((err, result) => {

            Object.keys(result).forEach(idx => {
                games = result[idx].lista_de_juesgo;
            });

            juegos.find({'_id':{$in:games}}).toArray( (err, result) => {
                //console.log('result games: ', JSON.stringify(result));
                //resultsGames.push(result);
                mdbclient.close();
                res.end(JSON.stringify(result));
            });

        });

    });

};

exports.save_consola = (req, res) => {
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},  (err,
                                                                                  mdbclient) =>{

        if (err) { throw err; }

        const db = mdbclient.db(dbName);

        //Solamente obtenemos el nombre y la matricula
        let id = req.params.palabraClave;
        console.log('id: ',id);
        let consola = db.collection("consola");

        consola.save({
            _id:req.body.id,
            nombre: req.body.nombre,
            imagen: req.body.url,
            ficha_tecnica: req.body.ficha_tecnica,
            lista_de_juesgo:[]
        });

        res.send({'status':'completed'})

    });

};


exports.save_juego = (req, res) => {
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},  (err,
                                                                                  mdbclient) =>{

        if (err) { throw err; }

        const db = mdbclient.db(dbName);

        let consola = db.collection("consola");
        let juego = db.collection("juego");

        const images_arr = [req.body.imagen_1, req.body.imagen_2, req.body.imagen_3];
        const links_arr = [req.body.blog_1, req.body.blog_2, req.body.blog_3];

        const id = Math.floor(Math.random() * (100000000 - 10)) + 10;

        juego.save({
            _id: id,
            nombre: req.body.nombre,
            imagen: req.body.imagen,
            developer: req.body.ficha_tecnica,
            lanzamiento: new Date(req.body.lanzamiento),
            imagenes: images_arr,
            links: links_arr
        });

        consola.update(
            { _id: req.body.consola },
            { $push: { lista_de_juesgo: id } }
        );

        res.send({'status':'completed'})

    });

};


exports.save_post = (req, res) => {
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},  (err,
                                                                                  mdbclient) =>{

        if (err) { throw err; }

        console.log('save post');

        const db = mdbclient.db(dbName);

        let blog = db.collection("blog");

        blog.save({
            nombre: req.body.nombre,
            fecha: new Date(),
            contenido: req.body.entrada,
        });

        res.send({'status':'completed'})

    });

};
