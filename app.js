const express = require('express'),
  app = express()

const port = 5000
const mainRouter = require("./routes/mainRouter.js");

app.use(express.json())
//основной роутер
app.use('/', mainRouter)

// обработка ошибки 404
app.use(function (req, res) {
    res.status(404).send("Error 404");
  });
const start = async ()=>{
    try{
        app.listen(port, () =>
            console.log(`Server listens port - ${port}`)
        )
    }catch(e){
        console.log(e);
    }
}

start();

module.exports = app