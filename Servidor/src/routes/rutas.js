const express = require('express');
const conn = require('../database'); //archivo de coneccion a la bd
const router = express.Router();
const jwt = require('jsonwebtoken')

const {verify} = require('../middlewares/Auth');
const { application } = require('express');

router.get('/',(req,res) => {
    res.render('index',{title: 'First Website'});
});
router.get('/servicios',(req,res)=>{
    res.render('servicios');
});
router.get ('/registroMascota',(req,res)=>{
    res.render('registroMascota');
});
router.get ('/mascota',(req,res)=>{
        conn.query('select * from mascota',(err, respuesta)=>{
        if(!err){
            res.render('mascota',{mascotas: respuesta});
        }
        else{
            console.log(err);
        }
    });    
});

router.post('/add/cliente',(req,res)=>{
    const {rut,pnombre,papellido,email,clave}  = req.body;
    //console.log(req.body);
    conn.query('insert into cliente set ?',{
        rut: rut,
        primernombre: pnombre,
        primerapellido: papellido,
        correo: email,
        clave: clave
    },(err,result)=>{
        if(!err){
            res.render('registroMascota');
        }
        else{
            console.log(err);
        }
    });
});
/* router.get('/mascotas',verify,(req,res)=>{
    conn.query('select * from mascota ',(err,result)=>{

        if(!err){
            res.send(result);
        }
        else{
            console.log(err);
        }
    });
}); */
router.post('/add/mascota',verify,(req,res)=>{
    const {nombre_mascota,especie,raza,rut_cliente,edad,peso}  = req.body;
    console.log(req.body);
    conn.query('insert into mascota set ?',{
        nombre_mascota: nombre_mascota,
        especie: especie,
        raza: raza,
        rut_cliente: rut_cliente,
        edad: edad,
        peso: peso
    },(err,result)=>{
        if(!err){
            console.log(result);
            res.json({message: "mascota ingresada"})            
        }
        else{
            res.json({error:"Ocurrio un error al ingresar la mascota"});
            console.log(err);
        }
    });
});
router.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    conn.query('DELETE FROM mascota WHERE id_mascota = ?', [id]);
    res.redirect('/mascota');
  });

router.post('/inicioSesion',(req,respuesta)=>{
    const {correo,clave}=req.body;
    console.log(correo,clave)
 conn.query("select * from cliente where correo = ? and clave = ? ",[correo,clave],(err,res)=>{
        
        //console.log(Object.keys(res).length ,!err,res)
        if(!err && res!==undefined && Object.keys(res).length!==0){
                console.log(res)
                const userForToken = {
                    correo: res[0].correo ,
                    rut: res[0].rut,
                }
                const token = jwt.sign(userForToken,'admin',{expiresIn:"2d"})
                respuesta.send({correo:res[0].correo,rut:res[0].rut,token})
        }else{
            respuesta.json({error:"El usuario no existe"})
           } 
    })      
})
router.get("/mascota/:rut",verify,(req,respuesta)=>{
    const {rut} =   req.params
    conn.query(`select mascota.nombre_mascota,mascota.especie,mascota.raza,mascota.rut_cliente,mascota.edad,mascota.edad,mascota.peso,mascota.id_mascota, historial_medico.id_historial from mascota left join historial_medico on historial_medico.id_mascota=mascota.id_mascota where mascota.rut_cliente= ?`,[rut],(err, res)=>{
        if(!err){
            //console.log(res)
            respuesta.send(res)
        }   
        else{ 
            respuesta.send(err)
            //console.log(err)

        }
    })
})
router.get("/Auth",verify,(req,res)=>{
    res.json(req.user)
})

router.post("/mascota/agendar",verify,(req,respuesta)=>{
    console.log(req.body)
    const datos = {
        fecha: req.body.fecha,
        diagnostico: "",
        veterinario: "",
        id_consulta: null,
        id_historial: req.body.id_historial,
        horario: req.body.horario
    }

    conn.query('INSERT INTO `ficha_consulta` set ?',{
        fecha:datos.fecha, 
        diagnostico:'',
         veterinario:'', 
         id_consulta:null, 
         id_historial:datos.id_historial, 
         horario:datos.horario
        },
    (err,res)=>{
        if(!err){
            console.log(res)
            respuesta.send(res)
        }
        else{
            console.log(err)
            respuesta.send({message:"error"})
        }
    })
   
})

router.post("/mascota/historial",verify,(req,respuesta)=>{
   conn.query('INSERT INTO `historial_medico` (  `id_historial`, `id_mascota`) VALUES (?,?)',[null,req.body.id_mascota],(err,res)=>{
    if(!err){
        console.log(res)
        respuesta.send(res)
    }
    else{
        console.log(err)
        respuesta.send({message:"error"})
    }

   })
})



/* conn.query('INSERT INTO `ficha_consulta` set ?',{
    fecha:'2021-09-30', 
    diagnostico:'',
     veterinario:'', 
     id_consulta:null, 
     id_historial:'10', 
     horario:'16:36:42'
    }
) */
/* conn.query("select * from cliente where correo = ? and clave = ? ",["fernando.loncon@gmail.com","8021e"],(err,res)=>{
    if(!err)
    {
        console.log(res)
    }
   else{
       console.log(err)
   }
}) */
//Consultas pendiente de implementación

//todos los datos de una mascota
/* select * from (ficha_consulta as fc inner join historial_medico as hm on hm.id_historial=fc.id_historial inner join  mascota as mascota on hm.id_mascota=mascota.id_mascota) where mascota.id_mascota=1 */



/*conn.query("select nombre_mascota from mascota ",(err,res,campos)=>{
    console.log(res);
})*/
/*conn.query("insert into mascota (id_mascota,nombre_mascota,especie,raza,rut_cliente,edad,peso) values('4010ab','carlos','perro','san bernardo','17800300','3','30'); ",(err,res,campos)=>{
    console.log(res);
})*/

/*conn.query("select id_mascota, nombre_mascota, primernombre, primerapellido, rut, correo, clave from mascota join cliente on rut=rut_cliente where rut_cliente= 17800300",(err,res,campos)=>{
    console.log(res);
})*/

/*conn.query("select * from mascota inner join cliente on rut=rut_cliente where especie='perro'",(err,res,campos)=>{
    console.log(res);
})*/
//conn.query("insert into tratamiento_mascota (tratamientos,id_mascota) values('vacuna antirrabica','4005ab')",(err,res,campos)=>{
  //  console.log(res);
//})
/*conn.query("insert into enfermedad_mascota (enfermedades,id_mascota) values('hepatitis caninca','4004ab')",(err,res,campos)=>{
    console.log(res);
})*/
//conn.query("delete from tratamiento_mascota where id_mascota='4005ab' and tratamientos='vacuna antirrabica' ",(err,res,campos)=>{
  //  console.log(res);
//})
/*conn.query("select id_mascota, ficha_consulta.id_historial, observaciones, id_consulta from ficha_consulta join historial_medico on historial_medico.id_historial=ficha_consulta.id_historial where id_mascota='6'",(err,res,campos)=>{
    console.log(res);
})*/
/* conn.query("select * from ficha_consulta join historial_medico on historial_medico.id_historial=ficha_consulta.id_historial where id_mascota='6'",(err,res,campos)=>{
    console.log(res);
}) */
/*conn.query("insert into historial_medico (id_historial,observaciones) values ('5010gg',NULL)",(err,res,campos)=>{
    console.log(res);
})*/

/*conn.query("delete from historial_medico where id_historial='5010gg'",(err,res,campos)=>{
    console.log(res);
})*/
/*conn.query("update mascota set edad='5' where nombre_mascota='firulais'",(err,res,campos)=>{
    console.log(res);
})*/
/*conn.query("update ficha_consulta set diagnostico='otitis', veterinario='L.Riquelme' where id_mascota='4002ab' and id_consulta='0011kl'",(err,res,campos)=>{
    console.log(res);
})*/
/*conn.query("alter table cliente add telefono VARCHAR(15) NULL",(err,res,campos)=>{
    console.log(res);
})*/
/*conn.query("alter table cliente drop column telefono",(err,res,campos)=>{
    console.log(res);
})*/
/*conn.query("drop table tratamiento_mascota",(err,res,campos)=>{
    console.log(res);
})*/

//Agrupar y mostrar la cantidad de clientes por especie

/*conn.query("select count(rut) as clientes, especie from mascota join cliente on rut_cliente = rut group by especie;",(err,res,campos)=>{
    console.log(res);
    })

//mostrar la cantidad de historiales que existen por edad de animales y agruparlos por especie.  
conn.query("select count(id_historial) as historial, edad,especie from mascota join historial_medico on mascota.id_mascota = historial_medico.id_mascota group by edad;",(err,res,campos)=>{
        console.log(res);
    
    })

//contar y mostrar la cantidad de observaciones agrupar por nombre de vterinario

conn.query("select count(observaciones) as cantidad_observaciones,veterinario from ficha_consulta join historial_medico on ficha_consulta.id_historial = historial_medico.id_historial group by veterinario;",(err,res,campos)=>{
        console.log(res);})

//contar la cantidad de razas de animales que hay por cliente

conn.query("select count(rut) as cantidad_clientes, raza from mascota join cliente on  rut_cliente = rut group by raza;",(err,res,campos)=>{
        console.log(res);
    
    })

//mostrar la cantidad de mascotas que tienen enfermedades agruparlos por enfermedad que padecen

conn.query("select count(id_historial) as cantidadmascota, enfermedad from enfermedad_mascota join historial_medico on enfermedad_mascota.id_enfermedad = historial_medico.id_enfermedad group by enfermedad",(err,res,campos)=>{
        console.log(res);
    
    })*/

//funciones 
/*

//mostrar el cliente con la mascota de mayor edad

conn.query("select MAX(edad) as Mascota_mayor_edad,primernombre as dueño,especie from cliente join mascota on rut = rut_cliente;",(err,res,campos)=>{console.log(res);})


//mostrar el cliente con la mascota de menor peso

conn.query("select MIN(peso) as mascota_menor_peso,primernombre as dueño,especie from cliente join mascota on rut = rut_cliente;",(err,res,campos)=>{console.log(res);})
    

//obtener promedio de peso por especie de mascotas


conn.query("select AVG(peso) as promedio,especie from mascota group by especie",(err,res,campos)=>{console.log(res);})
*/

//subconsultas

/*

//obtener el nombre del cliente con una mascota que supere el peso promedio de todas las mascotas

conn.query("select primernombre,primerapellido,peso as peso_mascota from cliente join mascota on rut = rut_cliente where peso > (select AVG(peso) as promedio from mascota)",(err,res,campos)=>{console.log(res);})

//obtener el nombre del cliente con una mascota que no supere el peso promedio de todas las mascotas
conn.query("select primernombre,primerapellido,peso as peso_mascota from cliente join mascota on rut = rut_cliente where peso < (select AVG(peso) as promedio from mascota)",(err,res,campos)=>{console.log(res);})

//obtener el nombre del cliente con una mascota que supera la edad promedio de todas las mascotas
conn.query("select primernombre,primerapellido,correo,rut,edad as edad_mascota from cliente join mascota on rut = rut_cliente where edad > (select AVG(edad) as edad from mascota)",(err,res,campos)=>{console.log(res);})
//obtener el nombre del cliente con una mascota que no supera la edad promedio de todas las mascotas
conn.query("select primernombre,primerapellido,edad,correo as edad_mascota from cliente join mascota on rut = rut_cliente where edad < (select AVG(edad) as edad from mascota)",(err,res,campos)=>{console.log(res);})
*/

//operdadores

/*
conn.query("select rut,correo from cliente join mascota on rut = rut_cliente where NOT peso >= 30 AND especie = 'perro' ",(err,res,campos)=>{console.log(res);})
conn.query("select correo from cliente join mascota on rut = rut_cliente where peso <= 5 AND especie = 'gato' ",(err,res,campos)=>{console.log(res);})

conn.query("select id_historial from ficha_consulta join historial_medico on ficha_consulta.id_historial = historial_medico.id_historial  where veterinario = 'A.Barria' or veterinario = 'M.Cubillos'",(err,res,campos)=>{console.log(res);})


conn.query("select * from INFORMATION_SCHEMA.TABLES where TABLE_NAME = 'cliente'",(err,res,campos)=>{console.log(res);})
conn.query("select TABLE_CATALOG from INFORMATION_SCHEMA.TABLES where TABLE_NAME = 'mascota'",(err,res,campos)=>{console.log(res);})
conn.query("select TABLE_NAME from INFORMATION_SCHEMA.TABLES where TABLE_NAME = 'historial_medico'",(err,res,campos)=>{console.log(res);})
*/
module.exports= router;