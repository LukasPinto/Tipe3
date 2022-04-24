const express = require('express');
const conn = require('../database'); //archivo de coneccion a la bd
const router = express.Router();
const jwt = require('jsonwebtoken')

const {verify} = require('../middlewares/Auth');
const { application } = require('express');

router.post('/login',(req,respuesta)=>{
    const {correo, clave} = req.body;
    conn.query(`select correo,clave,id_cargo from usuario_direccion where correo = ? and clave = ? UNION ALL SELECT correo,clave,id_cargo FROM usuario_municipal where correo = ? and clave = ?`,[correo,clave,correo,clave],(res,err)=>{
        if (!err){
            console.log(res)
            respuesta.send(res)
        }
        else{
            console.log(err)
            respuesta.send(err)
        }
    })
})

router.get('/direcciones',(req,respuesta)=>{
    conn.query(`select * FROM direccion_municipal`,(res,err)=>{
        if (!err){
            console.log(res)
            respuesta.send(res)
        }
        else{
            console.log(err)
            respuesta.send(err)
        }
    })
})

router.get('/user/direccion',(req,respuesta)=>{
    const id_direccion = req.query.id_direccion;
    console.log(id_direccion)
    conn.query(`select * from usuario_direccion where id_direccion = ?`,[id_direccion],(res,err)=>{
        if(!err){
            console.log(res)
            respuesta.send(res)
        }
        else{
            console.log(err)
            respuesta.send(err)
        }

    })

})

router.get('/user/solicitud',(req,respuesta)=>{
    const id_solicitud = req.query.id_solicitud;
    conn.query(`SELECT Solicitud.id_solicitud,usuario_direccion.nombre FROM solicitud
    JOIN empl_solicitud join usuario_direccion ON Solicitud.id_solicitud=empl_solicitud.id_solicitud and 
    empl_solicitud.id_empleado = usuario_direccion.id_empl_direccion where solicitud.id_solicitud = ?;`,[id_solicitud],(res,err)=>{
        if (!err){
            console.log(res)
            respuesta.send(res)
        }
        else{
            respuesta.send(err)
        }
    })
})


module.exports= router;