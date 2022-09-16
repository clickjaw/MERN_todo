const express = require('express');
const app = express();
const PORT = 8000;

app.get('/todos', (req, res)=>{

    res.send("You can do it.")
});


app.listen(PORT, ()=>console.log(`Running on Port: ${PORT}`));
