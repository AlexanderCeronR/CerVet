const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '!Qwerty55',
    database: 'cervet_db.citas'
})

connection.connect((err)=>{
    if(err) throw err
    console.log('Conexion Exitosa')
})

module.exports = {connection};
