const DB = require("./DbController.js");
const moment = require('moment');

//hendler обработки запроса send
//Проверяем что все поля на месте и в зависимости от того что в message отдаем историю сообщений из БД или сохраняем сообщение в БД
exports.send = (req,res, next)=>{
    let user_id = req.body.user_id;
    if('name' in req.body && 'message' in req.body && req.body.name !="" && req.body.message !=""){
        if(req.body.message.indexOf('history')==0){
            //возвращаем историю сообщений
            let history_limit = req.body.message.split(' ')[1];
            let sql = `SELECT * FROM massage WHERE user_id = ${user_id} AND id > (SELECT MAX(id) FROM massage) - ${history_limit}`;
            DB.connection.query(sql,(err, results)=>{
                if(!err){
                    res.send(results);
                }else{
                    res.status(401).send(`Не удалось получить данные из базы. ${err} ${sql}`);
                }
            });
        }else{
            let sql = `INSERT INTO massage(user_id,text,date) values('${user_id}','${req.body.message}','${moment().format('YYYY-MM-DD HH:mm:ss')}')`;
            DB.connection.query(sql,(err, results)=>{
                if(!err){
                    res.send('Сообщение сохранено');
                }else{
                    res.status(400).send(`Не удалось получить данные из базы. ${err} ${sql}`);
                }
            });
        }
    }else{
        res.status(400).send("Ошибка в передаваемых данных");
    }
}
