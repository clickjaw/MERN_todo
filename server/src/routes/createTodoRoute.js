const ToDoModel = require('../models/todoModel')

module.exports = async (req, res) =>{

    const {text}= req.body;
    console.log(text)
    const todo = new ToDoModel({
        text,
        completed: false
    })
    const newToDo = await todo.save();
    res.json(newToDo);
};