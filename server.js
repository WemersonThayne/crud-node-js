/**
* Arquivo de rotas da aplicação
* 
*/

//Configurar o setupda app:

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var task = require('./app/models/task');

var mongoose = require('mongoose');
var routers= require('./app/routers/routers');
mongoose.connect('mongodb://localhost:27017/tasks');
//mongoose.createConnection('mongodb://localhost:27017/tasks'); // 27017


//Configuração para user o dados em formato json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Porta da aplicação
var port = process.env.port || 8000;

//padrão da roda prefixadas em /api
app.use('/api',routers);
app.listen(port)

console.log("Aplicação iniciada na porta :"+port);

