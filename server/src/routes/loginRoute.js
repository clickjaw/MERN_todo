const jwt = require('jsonwebtoken')

module.exports = (req, res)=>{

    if (req.body.password === process.env.PASSWORD){
        const token = jwt.sign({
            userID: 1,
        }, process.env.SECRET)
        res.json({
            token,
        })
    }else{
        res.status(401).json({
            status: "fail",
            message: "password incorrect"
        })
    }
    res.send ('Hello World')
    };
    