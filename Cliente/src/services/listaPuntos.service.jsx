import Axios from 'axios'

export default function listaPuntos(id_solicitud){
    
    return (Axios.post(`http://localhost:3001/puntos/solicitud`, {
    id_solicitud:id_solicitud
 
}
    , {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    )
}