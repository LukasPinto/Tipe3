
import Axios from 'axios'

export default function EliminiarUsuarioDireccion(id_cargo,id_empl_direccion){

    return (Axios.post(`http://localhost:3001/direccion/usuario/borrar`, {
            id_cargo:id_cargo,
            id_empl_direccion:id_empl_direccion
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
    )

}