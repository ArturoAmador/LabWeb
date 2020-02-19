// https://expressjs.com/en/guide/using-middleware.html
var express = require('express'),
    app = express(),
    port = process.env.PORT || 8585,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

var routes = require('./gameCollectionRoutes');

routes(app);

app.listen(port);

console.log('Servidor escuchando en puerto: ' + port);
