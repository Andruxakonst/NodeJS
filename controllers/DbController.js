//Констроллер соединения с БД
const mysql = require("mysql2");
exports.connection = mysql.createConnection({
    host: "db",
    user: "root",
    database: "juniordev",
    password: "password"
});