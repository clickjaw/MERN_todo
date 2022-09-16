const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    completed:{
        type: Boolean
    }
});

const ToDoModel = mongoose.model('Todo', ToDoSchema)

module.exports = ToDoModel;