const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn')
const router = express.Router();
const updateTodoRoute = require('./routes/updateTodoRoute');
const createTodoRoute = require('./routes/createTodoRoute');
const readTodosRoute = require('./routes/readTodosRoute');
const removeTodoRoute = require('./routes/removeTodoRoute');

router.post('/login', require('./routes/loginRoute'));

router.get('/todos', isLoggedIn, readTodosRoute )
router.post('/todos', isLoggedIn, createTodoRoute)
router.put('/todos/:id', isLoggedIn, updateTodoRoute)
router.delete('/todos/:id', isLoggedIn, removeTodoRoute)

module.exports = router