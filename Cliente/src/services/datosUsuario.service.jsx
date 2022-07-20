
import Axios from 'axios'

export default function DatosUsuario(id_cargo,id_empl_direccion){

    return (Axios.post(`http://localhost:3110/direccion/usuario`, {
            id_cargo:id_cargo,
            id_empl_direccion:id_empl_direccion
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
    )

}   
