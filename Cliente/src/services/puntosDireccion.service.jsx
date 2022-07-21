import Axios from 'axios'

export default function listadoPuntos(id_direccion){
    
    return (Axios.post(`http://${process.env.REACT_APP_HOST}/puntodireccion`, {
    id_direccion:id_direccion
 
}
    , {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    )
}
