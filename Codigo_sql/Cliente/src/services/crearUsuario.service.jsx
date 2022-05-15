import Axios from 'axios'

export default function crearUsuario(id_direccion,id_cargo,nombre,rut,correo,clave,id_cargo_admin){
    
    return (Axios.post(`http://localhost:3001/crearUsuario`, {
    admin:{
        id_cargo:id_cargo_admin
    },
    user:{
    id_direccion: id_direccion,
    id_cargo: id_cargo,
    nombre: nombre,
    rut: rut,
    correo: correo,
    clave: clave
}
}
    , {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    )
}