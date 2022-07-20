
import Axios from 'axios'

export default function crearHistorialService(id_mascota){

    return (Axios.post(`http://10.100.6.6:3110/mascota/historial`, {
            id_mascota:id_mascota
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
    )

}
