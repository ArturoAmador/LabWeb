'use strict';
let fs = require("fs");

module.exports.obtener_juegos = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        console.log(err);
        console.log(data);
        res.end(data);
    });
};

module.exports.agregar_juego = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        for (let key in req.body) {
            if (req.body.hasOwnProperty(key)) {
                data[key] = req.body[key];
            }
        }
        console.log(err);

        console.log(data);
        let nuevo = JSON.stringify(data);
        fs.writeFile(__dirname + "/" + "juegos.json", nuevo, 'utf8', function (err, data) {

            console.log(err);
            res.end(err);

        });
        res.end(JSON.stringify(data));
    });
};

module.exports.obtener_juego = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        let juegos = JSON.parse(data);

        let juego = juegos[req.params.gameId];
        console.log(juego);
        res.end(JSON.stringify(juego));

    });
};

module.exports.delete = function(req, res){
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {

        if (err){
            console.log(err)
        }else {
            let juegos = JSON.parse(data);

            let game_id = req.params.gameId;
            delete juegos[game_id];
            console.log(juegos);

            let nuevo = JSON.stringify(juegos);
            fs.writeFile(__dirname + "/" + "juegos.json", nuevo, 'utf8', function (err, data) {
                console.log(err);
                res.end(err);
            });
            res.end(JSON.stringify(juegos));

        }


    });
};

module.exports.search = (req, res) => {
    var coicidences = [];
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        let jsonData = JSON.parse(data);
        let query = String(req.params.query).toLowerCase();

        Object.keys(jsonData).forEach(idx => {
            let currentGame = String(jsonData[idx].nombre).toLowerCase();

            if (currentGame.includes(query))
                coicidences.push(jsonData[idx]);

        });
        res.send(coicidences);
    });
};



