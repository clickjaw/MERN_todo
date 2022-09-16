const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose')
PORT = 8000;

const router = require('./router');

dotenv.config();

const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'));

app.use (router);

app.get('/', (req, res)=>{
    res.send("You can do it.");
});



mongoose.connect(process.env.MONGO_URI).then(()=>{
app.listen(PORT, ()=> console.log(`Running on PORT: ${PORT}`))});
