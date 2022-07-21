import Axios from 'axios'

export default function usuariosPorDireccion(id_direccion){
    
    return (Axios.post(`http://${process.env.REACT_APP_HOST}/direccion/usuarios`, {
    id_direccion:id_direccion
 
}
    , {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    )
}
