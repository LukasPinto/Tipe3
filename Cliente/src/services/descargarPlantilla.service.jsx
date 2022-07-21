
import Axios from 'axios'

export default function DescargarPlantilla(id_archivo_plantilla){

    return (Axios.get(`http://${process.env.REACT_APP_HOST}/descargar/plantilla`, {
        responseType: 'blob',
        id_archivo_plantilla:id_archivo_plantilla
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                
            }
        })
    )

}   
