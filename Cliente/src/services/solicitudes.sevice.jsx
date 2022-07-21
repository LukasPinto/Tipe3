import Axios from 'axios'

export default function solicitudes(id_direccion){
    
    return (Axios.post(`http://${process.env.REACT_APP_HOST}/solicitud/direcciones`, {
    id_direccion:id_direccion
 
}
    , {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    )
}
