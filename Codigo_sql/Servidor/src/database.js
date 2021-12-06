const mysql=require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'veterinaria2',
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
