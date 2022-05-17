import Axios from 'axios'

export default function modificarUsuario(id_cargo_admin, id_direccion, id_cargo, nombre, rut, correo, clave, id_empl_direccion) {

    return (Axios.post(`http://localhost:3001/direccion/usuario/editar`, {
        
        id_cargo_admin: id_cargo_admin,
        id_direccion: id_direccion,
        id_cargo: id_cargo,
        nombre: nombre,
        rut: rut,
        correo: correo,
        clave: clave,
        id_empl_direccion:id_empl_direccion
    }
        , {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
    )
}