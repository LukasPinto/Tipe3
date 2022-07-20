
import Axios from 'axios'

export default function DescargarPlantilla(id_archivo_plantilla){

    return (Axios.get(`http://10.100.6.6:3110/descargar/plantilla`, {
        responseType: 'blob',
        id_archivo_plantilla:id_archivo_plantilla
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                
            }
        })
    )

}   
