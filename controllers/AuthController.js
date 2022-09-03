//файл конфигурации 
const config = require('../config.json');
const jwt = require('jsonwebtoken')
const DB = require("./DbController.js");

exports.login = (req, res)=>{
    if('name' in req.body && 'password' in req.body && req.body.name !='' && req.body.password !=''){
        //проверить что логи и пароь валидны и выдать в ответ токен с id юзера
        let sql = `SELECT * FROM user WHERE name='${req.body.name}'`;
        DB.connection.query(sql,(err, results)=>{
            if(!err){
                if(results.length>0){
                    let dbUser = results[0];
                    if(dbUser.name == req.body.name && dbUser.password == req.body.password){
                        let token = config.tokenKey;
                        res.json({"token":jwt.sign({"user_id":dbUser.id},token)})
                    }else{
                        res.status(401).send(`Ошибка в имени или пароле`);
                    }
                }else{
                    res.status(401).send(`Пользователь не найден`);
                }
            }else{
                res.status(401).send(`Не удалось получить данные из базы. ${err} ${sql}`);
            }
        });
    }else{
        res.status(401).json('Error name or password');
    }
}

//Проверяем JWT токен 
exports.auth = (req, res, next)=>{
    if('authorization' in req.headers && req.headers.authorization !=''){
        let token = config.tokenKey;
        let jwtToken = req.headers.authorization.split('Bearer_').pop();
        let base64_id = jwtToken.split('.')[1];
        let user_id = JSON.parse(Buffer.from(base64_id, 'base64').toString('ascii')).user_id;
        jwt.verify(
            jwtToken,
            token,
            (err, payload) => {
                if(payload){
                    req.body.user_id = user_id;
                    next();
                }else{
                    res.status(401).json({"text":"Ошибка токена",'error':err});
                }
            }
        );
    }else{
        res.status(401).json('Not set token in heders');
    }
};