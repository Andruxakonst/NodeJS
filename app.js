const express = require('express'),
  app = express()

const host = '127.0.0.1'
const port = 7000
const mainRouter = require("./routes/mainRouter.js");

app.use(express.json())
app.use('/', mainRouter)

// обработка ошибки 404
app.use(function (req, res) {
    res.status(404).send("Error 404");
  });
const start = async ()=>{
    try{
        app.listen(port, host, () =>
            console.log(`Server listens http://${host}:${port}`)
        )
    }catch(e){
        console.log(e);
    }
}

start();

module.exports = app