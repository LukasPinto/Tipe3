import Axios from 'axios'

export default function solicitudes(id_direccion){
    
    return (Axios.post(`http://localhost:3001/solicitud/direcciones`, {
    id_direccion:id_direccion
 
}
    , {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    )
}