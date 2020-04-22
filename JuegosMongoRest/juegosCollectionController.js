'use strict';
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbName = 'videojuegos';

exports.obtener_plataforma = (req, res) => {
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},  (err,
                                                                                  mdbclient) =>{
        if (err) {

            throw err;
        }
        const db = mdbclient.db(dbName);
        //Solamente obtenemos el nombre y la matricula

        db.collection("consola").find({}).project({_id: 0, nombre: 1, matricula: 1}).toArray((err, result) => {

            if (err) {

                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end(JSON.stringify(result));

        });
    });
};
