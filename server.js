/**
* Arquivo de rotas da aplicação
* 
*/

//Configurar o setupda app:

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//Configuração para user o dados em formato json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Porta da aplicação
var port = process.env.port || 8000;
//exemplo de uma rota
var router = express.Router();
router.get('/',function(req,res){
    res.json({message:"Bem vindo ao to do list!"})
});
//padrão da roda prefixadas em /api
app.use('/api',router);
app.listen(port);
console.log("Aplicação iniciada na porta :"+port);

