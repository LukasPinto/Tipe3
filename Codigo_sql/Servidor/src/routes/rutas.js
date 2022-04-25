const express = require('express');
const conn = require('../database'); //archivo de coneccion a la bd
const router = express.Router();
const jwt = require('jsonwebtoken')

const { verify } = require('../middlewares/Auth');
const { application } = require('express');

router.post('/login', (req, respuesta) => {
    const { correo, clave } = req.body;
    conn.query(`select correo,clave,id_cargo,rut,id_empl_direccion from usuario_direccion where correo = ? and clave = ? UNION all select correo,clave,id_cargo,rut,id_empl_municipal FROM usuario_municipal where correo = ? and clave = ?`, [correo, clave, correo, clave], (err, res) => {
        console.log(res)
        console.log(err)
        
        if (!err && res !== undefined && Object.keys(res).length !== 0) {
            console.log(res)
            const userForToken = {
                correo: res[0].correo,
                rut: res[0].rut,
                id: res[0].id_empl_direccion || res[0].id_empl_municipal
            }
            console.log(res)
            const token = jwt.sign(userForToken, 'admin', { expiresIn: "5h" })
            respuesta.send({ correo: res[0].correo, id: res[0].id_empl_municipal || res[0].id_empl_direccion, token })
        } else {
            
            respuesta.json({ error: "El usuario no existe" })
        }
    })
})

router.get('/direcciones', (req, respuesta) => {
    conn.query(`select * FROM direccion_municipal`, (res, err) => {
        if (!err) {
            console.log(res)
            respuesta.send(res)
        }
        else {
            console.log(err)
            respuesta.send(err)
        }
    })
})

router.get('/user/direccion', (req, respuesta) => {
    const id_direccion = req.query.id_direccion;
    console.log(id_direccion)
    conn.query(`select * from usuario_direccion where id_direccion = ?`, [id_direccion], (res, err) => {
        if (!err) {
            console.log(res)
            respuesta.send(res)
        }
        else {
            console.log(err)
            respuesta.send(err)
        }

    })

})

router.get('/user/solicitud', (req, respuesta) => {
    const id_solicitud = req.query.id_solicitud;
    conn.query(`SELECT Solicitud.id_solicitud,usuario_direccion.nombre FROM solicitud
    JOIN empl_solicitud join usuario_direccion ON Solicitud.id_solicitud=empl_solicitud.id_solicitud and 
    empl_solicitud.id_empleado = usuario_direccion.id_empl_direccion where solicitud.id_solicitud = ?;`, [id_solicitud], (res, err) => {
        if (!err) {
            console.log(res)
            respuesta.send(res)
        }
        else {
            respuesta.send(err)
        }
    })
})


module.exports = router;