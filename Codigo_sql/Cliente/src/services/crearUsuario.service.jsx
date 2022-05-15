import Axios from 'axios'

export default function crearUsuario(id_direccion,id_cargo,nombre,rut,correo,clave){
    
    return (Axios.post(`http://localhost:3001/crearUsuario`, {
    id_direccion: id_direccion,
    id_cargo: id_cargo,
    nombre: nombre,
    rut: rut,
    correo: correo,
    clave: clave
}
    , {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    )
}