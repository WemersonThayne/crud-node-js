var mongoose = require('mongoose');
var Schema = new mongoose.Schema;

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

 var taskSchema = new Schema({
     descricao: String,
     dataCriacao: {type : Date, default : new Date() }, 
     status: JSON,
     dataConclusao:Date,
     ativo: { type : Boolean, default : true}
 });

 module.exports = mongoose.model('task',taskSchema);
