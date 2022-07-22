const express = require('express');
const conn = require('../database'); //archivo de coneccion a la bd
const router = express.Router();
const jwt = require('jsonwebtoken')
require('dotenv').config();
const { verify } = require('../middlewares/Auth');
const { application } = require('express');
const multer = require('multer');
const path = require('path');
const fs = require("fs");

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,'./archivos')
    },
    filename:(req,file,cb)=>{
        const ext = file.originalname.split('.').pop();
        const fileName = Date.now();
        cb(null,`${file.originalname.split('.')[0]}-${fileName}.${ext}`)
    }
})
const upload = multer({storage});

router.post('/login', (req, respuesta) => {
    const { correo, clave } = req.body;
    console.log(correo,clave)
    const aux = conn.query(`select correo,clave,id_cargo,rut,id_empl_direccion from usuario_direccion where correo = ? and clave = ? UNION all select correo,clave,id_cargo,rut,id_empl_municipal FROM usuario_municipal where correo = ? and clave = ?`, [correo, clave, correo, clave], (err, res) => {
        console.log(res,err)
        if (!err && res !== undefined && Object.keys(res).length !== 0) {

            const userForToken = {
                correo: res[0].correo,
                rut: res[0].rut,
                id: res[0].id_empl_direccion || res[0].id_empl_municipal,
                cargo: res[0].id_cargo
            }
            const token = jwt.sign(userForToken, process.env.SIGN, { expiresIn: "10h" })
            respuesta.send({ correo: res[0].correo,rut:res[0].rut,id: res[0].id_empl_municipal || res[0].id_empl_direccion, cargo:res[0].id_cargo,token })
        } else {
            
            respuesta.json({ error: "El usuario no existe" })
        }
    })
})

router.get('/direcciones', verify,(req, respuesta) => {
    conn.query(`select * FROM direccion_municipal`, (res, err) => {
        if (!err) {
            respuesta.send(res)
        }
        else {
            respuesta.send(err)
        }
    })
})

router.get('/user/direccion',verify, (req, respuesta) => {
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

router.get('/user/solicitud',verify, (req, respuesta) => {
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

router.get("/Auth",verify,(req,res)=>{
    const respuesta = {
        correo: req.user.correo,
        rut: req.user.rut,
        id: req.user.id,
        cargo: req.user.cargo
    }
    //console.log(req.user)
    //console.log(respuesta)
    res.json(respuesta)
})

router.post("/crearUsuario",verify,(req,respuesta) => {
    const datos = req.body.user;
    console.log(req.body.user,req.body.admin)
    if (req.body.admin.id_cargo == 1){
        conn.query(`INSERT INTO usuario_direccion (id_direccion,id_cargo,nombre,rut,correo,clave) VALUES (?,?,?,?,?,?)`,[datos.id_direccion,datos.id_cargo,datos.nombre,datos.rut,datos.correo,datos.clave], (err,res) =>{
            if(!err){
                respuesta.send(res)
            }
            else{
                respuesta.json("error")
            }
    
        })   
    }
    else {
        respuesta.json("error")
    }
    
})

router.post("/puntodireccion",verify,(req,respuesta)=>{
    const direccion = req.body.id_direccion;
 
    conn.query(`Select * FROM solicitud join puntos  on solicitud.id_solicitud = puntos.id_solicitud WHERE id_direccion = ? AND solicitud.estado = "pendiente" 
ORDER BY fecha_inicio`,[direccion],(err,res)=>{ 
        if(!err){
            respuesta.send(res)
        }
        else{
            respuesta.send("error")
        }

    })


})


router.post("/solicitud/direcciones",verify,(req,respuesta)=>{
    const direccion = req.body.id_direccion;
    conn.query(`SELECT * FROM solicitud join direccion_municipal on solicitud.id_direccion = direccion_municipal.id_direccion where solicitud.id_direccion = ?`,[direccion],(err,res)=>{
        if(!err){
            respuesta.send(res)
            console.log(res)
        }
        else{
            respuesta.send("error")
        }
    })


})


router.post("/estado/solicitud",verify,(req,respuesta)=>{
    console.log(req.body)
    const solicitud = req.body.id_solicitud;
    conn.query(`SELECT * from solicitud where id_solicitud = ?`,[solicitud],(err,res)=>{
        console.log(err,res)
        if(!err){
            respuesta.send(res)
        }
        else{
            respuesta.send("error")
        }
    })

})

router.post("/puntos/solicitud",verify,(req,respuesta)=>{
    console.log(req.body.id_solicitud)
    const solicitud = req.body.id_solicitud;
    conn.query(`select solicitud.id_solicitud,id_direccion,id_empl_municipal,fecha_inicio,puntos.estado ,id_punto,titulo,inicio,termino from solicitud join puntos on solicitud.id_solicitud = puntos.id_solicitud where puntos.id_solicitud = ?`,[solicitud],(err,res)=>{
        console.log(err)
        if(!err){
           
            respuesta.send(res)
        }
        else{
            respuesta.send("error")
        }

    })

})


router.post("/direccion/usuarios",verify,(req,respuesta)=>{
    const id_direccion = req.body.id_direccion;
    conn.query(`SELECT descripcion,correo,nombre,id_empl_direccion,cargo.id_cargo FROM usuario_direccion join cargo on cargo.id_cargo = usuario_direccion.id_cargo where id_direccion = ?`,[id_direccion],(err,res)=>{
        if(!err){
            respuesta.send(res)
        }
        else{
            respuesta.send("error")
        }

    })

})

router.post("/direccion/usuario/borrar",verify,(req,respuesta)=>{
    const {id_cargo,id_empl_direccion} = req.body;
    console.log(req.body)
    if (id_cargo == 1){
        conn.query(`DELETE FROM usuario_direccion WHERE usuario_direccion.id_empl_direccion = ?`,[id_empl_direccion], (err,res) =>{
            if(!err){
                respuesta.send(res)
            }
            else{
                respuesta.json("error")
            }
    
        })   
    }
    else {
        respuesta.json("error")
    }

})

router.post("/direccion/usuario/editar",verify,(req,respuesta)=>{
    const {id_cargo_admin,id_direccion,
    id_cargo,
    nombre,
    rut,
    correo,
    clave,
    id_empl_direccion} = req.body;
    console.log(req.body)
    if (id_cargo_admin == 1){
        conn.query(`UPDATE usuario_direccion SET id_direccion = ?, id_cargo = ?, nombre = ?, rut = ?, correo = ?, clave = ? WHERE usuario_direccion.id_empl_direccion = ? `,[id_direccion,id_cargo,nombre,rut,correo,clave,id_empl_direccion], (err,res) =>{
            if(!err){
                console.log(res)
                respuesta.send(res)
            }
            else{
                console.log("error")
                respuesta.json("error")
            }
    
        })   
    }
    else {
        respuesta.json("error")
    }

})



router.post("/direccion/usuario",verify,(req,respuesta)=>{
    const {id_cargo,id_empl_direccion} = req.body;
  
    if (id_cargo == 1){
        conn.query(`SELECT * FROM usuario_direccion where id_empl_direccion = ? `,[id_empl_direccion], (err,res) =>{
            if(!err){
                respuesta.send(res)  
            }
            else{
                respuesta.json("error")
            }
        })   
    }
    else {
        respuesta.json("error")
    }

})


/*peticion para crear una plantilla*/
router.post('/upload/plantilla/:id_punto',upload.array('files'),verify,(req,respuesta)=>{
   console.log(req.files)
    const id_punto = req.params.id_punto
    let ruta = path.join(__dirname,'../archivos');
    let consulta = 'INSERT INTO plantilla_punto (id_punto_solicitud,dir_archivo) values '
    let cont = 0
    
    for (file of req.files){
        cont++;
        if(req.files.length == cont ){
            consulta = consulta+`(${id_punto},"${file.filename.toString()}")`
        }
        else{
            consulta = consulta+`(${id_punto},"${file.filename.toString()}")`+","
        }
        
        
    }

    conn.query(`SET FOREIGN_KEY_CHECKS = 0;${consulta}`,(err,res) =>{
        
        if(!err){
            respuesta.send(res)
            //respuesta.download(`${path.join(__dirname,'../../archivos/Problema 1 - Parte 2-1653097581961.pdf')}`)  
        }
        else{
            console.log(err)
            respuesta.json(err)
        }
    }) 
})
//primero se llama el crear intento, que en verdad es crear punto
router.post('/upload/archivo/:id_intento',upload.array('files'),verify,(req,respuesta)=>{
    console.log(req)
    const id_intento= req.params.id_intento
    let ruta = path.join(__dirname,'../archivos');
    let consulta = 'INSERT INTO archivo_intento (id_intento_solicitud,dir_archivo_intento) values '
    let cont = 0
    
    for (file of req.files){
        cont++;
        console.log(file)
        if(req.files.length == cont ){
            consulta = consulta+`(${id_intento},"${file.filename.toString()}")`
        }
        else{
            consulta = consulta+`(${id_intento},"${file.filename.toString()}")`+","
        }
        
        
    }

    conn.query(`SET FOREIGN_KEY_CHECKS = 0;${consulta}`,(err,res) =>{
        
        if(!err){
            respuesta.send(res)
        }
        else{
            console.log(err)
            respuesta.json("error")
        }
    }) 


})


router.put('/usuario/nuevo/intento',verify,(req,respuesta)=>{
    const [id_punto,descripcion]=[req.body.id_punto,req.body.descripcion]
    console.log(req.body)
    conn.query(`SET FOREIGN_KEY_CHECKS = 0;insert into intento ( id_punto, fecha_intento,respuesta) values (${id_punto},CURRENT_TIMESTAMP,'');select LAST_INSERT_ID()`,(err,res)=>{
        if(!err){
            aux ={LAST_INSERT_ID:res[2][0]['LAST_INSERT_ID()']}
            respuesta.send(aux)

        }
        else{
            respuesta.send(err)
        }
    })
})

router.put('/crear/punto',verify,(req,respuesta)=>{
    const [id_solicitud,titulo,descripcion]=[req.body.id_solicitud,req.body.titulo ,req.body.descripcion ]
    console.log(req.body)
    conn.query(`SET FOREIGN_KEY_CHECKS = 0;insert into puntos ( id_solicitud,titulo,descripcion,inicio) values (?,?,?,CURRENT_TIMESTAMP);select LAST_INSERT_ID()`,[id_solicitud,titulo,descripcion],(err,res)=>{
        if(!err){
            aux ={LAST_INSERT_ID:res[2][0]['LAST_INSERT_ID()']}
            console.log(aux)
            respuesta.send(aux)

        }
        else{
            respuesta.send(err)
        }
    })
})

router.get('/solicitud/usuario/:id_empl_municipal',verify,(req,respuesta)=>{
    const id_direccion = req.params.id_empl_municipal
 
    conn.query("SELECT solicitud.id_solicitud,id_direccion,id_empl_municipal, fecha_inicio, puntos.estado,fecha_termino,puntos.id_punto,titulo,descripcion,inicio,termino,id_empleado from solicitud join puntos on solicitud.id_solicitud = puntos.id_solicitud join empl_solicitud on empl_solicitud.id_punto=puntos.id_punto where solicitud.estado = 'pendiente' and empl_solicitud.id_empleado = ?",[id_direccion],(err,res)=>{
        if(!err){
            respuesta.send(res)
        }
        else{
            respuesta.send("error")
        }

    })

})

router.get('/intentos/usuario/:id_punto',verify,(req,respuesta)=>{
    const id_punto = req.params.id_punto
 
    conn.query("select * from intento WHERE id_punto = ? ",[id_punto],(err,res)=>{
        if(!err){
            respuesta.send(res)
        }
        else{
            respuesta.send("error")
        }

    })

})


router.get('/punto/:id_punto',verify,(req,respuesta)=>{
    const id_punto = req.params.id_punto
    
    conn.query('select  * from puntos where id_punto = ?',[id_punto],(err,res)=>{
        if(!err){
            respuesta.send(res)
        }
        else{
            respuestas.send(err)
        }
    })
})

router.get('/descargar/plantilla',verify,(req,respuesta)=>{
    
    const [id_archivo_plantilla] = [req.body.id_archivo_plantilla]
    respuesta.download(`${path.join(__dirname,`../../archivos/${id_archivo_plantilla}`,)}`)

})
router.get('/plantilla/:id_punto',verify,(req,respuesta)=>{
    const id_punto = req.params.id_punto
    conn.query('select * from plantilla_punto where plantilla_punto.id_punto_solicitud = ?',id_punto, (err,res)=>{
        if(!err){
            respuesta.send(res)
        }
        else{
            respuesta.send(err)
        }
    })


})


module.exports = router;