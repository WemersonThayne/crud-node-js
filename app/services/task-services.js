var Task = require('../models/task');
class TaskService {

  constructor() {
  }

  teste(task) {
    console.log("Requisicao:" + task.descricao);
  }

  cadastrarTask(taskAPI) {
    var task = new Task();
    task.descricao = taskAPI.descricao;
    console.log("db:"+task);
    
    task.save();

  }

}

module.exports = TaskService;