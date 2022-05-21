require('dotenv').config();
const mysql=require('mysql');

const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true
})

conn.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('La base de datos se conecto')
    }
});

module.exports=conn;
