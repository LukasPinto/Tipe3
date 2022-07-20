import Axios from 'axios'

export default function usuariosPorDireccion(id_direccion){
    
    return (Axios.post(`http://localhost:3110/direccion/usuarios`, {
    id_direccion:id_direccion
 
}
    , {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    )
}
