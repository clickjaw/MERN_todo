const ToDoModel = require('../models/todoModel')

module.exports = async(req, res)=>{
    const {id} = req.params;
    const todo = await ToDoModel.findById(id);
    await todo.remove();
    res.status(204).json(`${todo}: deleted`);

}