const bodyParser=require ('body-parser');
const express = require ('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { JsonWebTokenError } = require('jsonwebtoken');
require('dotenv').config()
//configuracion
app.set('port',process.env.PORT || process.env.PORT);
app.set('views',path.join(__dirname,'views'));
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization')

    if(req.method=== 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next()
})
app.use(cors());
//app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true})); // analiza el texto como datos codificados de URL y expone el objeto resultante (FORMULARIOS)



//rutas
app.use(require('./routes/rutas.js'));

//servidor
app.listen(app.get('port'), (error)=> {
    if(error){
        console.log("error al iniciar");
    }else{
        console.log('servidor en Puerto',app.get('port'))
    }
   
});
