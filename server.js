const express = require('express')

app = express()

app.listen(3005, ()=>{
    console.log("Server Is runing at Port: 3005")
})

app.get('/', (req, res) => {
    res.send("HELLO EXPRESSJS")
})