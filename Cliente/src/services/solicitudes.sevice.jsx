import Axios from 'axios'

export default function solicitudes(id_direccion){
    
    return (Axios.post(`http://10.100.6.6:3110/solicitud/direcciones`, {
    id_direccion:id_direccion
 
}
    , {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    )
}
