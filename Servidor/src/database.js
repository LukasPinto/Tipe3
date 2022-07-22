require('dotenv').config();
const mysql=require('mysql2');


const connection = mysql.createConnection( {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true
})

connection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('La base de datos se conecto')
    }
});

const config = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'tipe',
};
const pool = mysql.createPool(config);
module.exports=connection;