import Axios from 'axios'

export default function usuariosPorDireccion(id_direccion){
    
    return (Axios.post(`http://10.100.6.6:3110/direccion/usuarios`, {
    id_direccion:id_direccion
 
}
    , {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    )
}
