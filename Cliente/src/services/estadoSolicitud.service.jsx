import Axios from 'axios'

export default function estadoSolicitud(id_solicitud){
    
    return (Axios.post(`http://10.100.6.6:3110/estado/solicitud`, {
    id_solicitud:id_solicitud
 
}
    , {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    )
}
