import Axios from 'axios'

export default function CrearPunto(data){
    
    return (Axios.post(`http://${process.env.REACT_APP_HOST}/crear/intento`, {

        id_solicitud:data.id_solicitud,
        titulo:data.titulo,
        descripcion:data.Descripcion,
        inicio:data.inicio
    }
     ,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}
