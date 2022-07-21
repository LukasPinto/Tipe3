import Axios from 'axios'

export default function estadoSolicitud(id_solicitud){
    
    return (Axios.post(`http://${process.env.REACT_APP_HOST}/estado/solicitud`, {
    id_solicitud:id_solicitud
 
}
    , {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    )
}
