import Axios from 'axios'

export default function listadoPuntos(id_direccion){
    
    return (Axios.post(`http://localhost:3110/puntodireccion`, {
    id_direccion:id_direccion
 
}
    , {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    )
}
