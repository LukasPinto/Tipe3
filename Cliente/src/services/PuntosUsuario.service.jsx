import Axios from 'axios'

export default function PuntosUsuario(id_empl_municipal){
    
    return (Axios.get(`http://${process.env.REACT_APP_HOST}/solicitud/usuario/${id_empl_municipal}`, 
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}
