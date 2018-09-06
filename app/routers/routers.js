
var express = require('express');
var router = express.Router();
var Service = require("../services/task-services")
router.use(function (req, res, next) {
    console.log("Iniciando a aplicação.........");
    next();
});

router.get('/', function (req, res) {
    res.json({ message: "Bem vindo ao to do list!" });
    console.log("Rota defualt da aplicação....");
});

// ---------------------- rotas do app --------------

router.route('/taks')
.post(function (req, res) {
  console.log("Cadastro de uma task.......");
  var s = new Service();
  console.log(req.body);
  var task = req.body;
  //colocar um retorna na função
  s.cadastrarTask(task)
//   .save(function(error){
//     if(error)
//         res.send("Error ao cadastra task"+error);
//     });
    res.json({message: "Task cadastrado com sucesso!"});
    
});


module.exports = router;
