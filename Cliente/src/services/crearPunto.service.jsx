import Axios from 'axios'

export default function CrearPunto(data){
    
    return (Axios.put(`http://${process.env.REACT_APP_HOST}/crear/punto`, {

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
