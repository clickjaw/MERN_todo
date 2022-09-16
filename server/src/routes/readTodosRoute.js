const ToDoModel = require('../models/todoModel')

module.exports = async(req, res)=>{
    const todos = await ToDoModel.find();

    res.json(todos);
}



