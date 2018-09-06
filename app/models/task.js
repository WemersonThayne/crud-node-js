var mongoose = require('mongoose');

/**
 * Task 
 * 
 * -> id
 * ->descrição
 * -> dataCriacao:
 * -> status
 * -> dataConclusao
 * 
 */

 var TaskSchema = new mongoose.Schema({
     descricao: String,
     dataCriacao: {type : Date, default : Date.now  }, 
     status: JSON,
     dataConclusao:Date,
     ativo: { type : Boolean, default : true}
 });

 module.exports = mongoose.models.tasks ||  mongoose.model('Task',TaskSchema) ;
