import Axios from 'axios'

export default function PuntosUsuario(id_empl_municipal){
    
    return (Axios.get(`http://localhost:3001/solicitud/usuario/${id_empl_municipal}`, 
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}