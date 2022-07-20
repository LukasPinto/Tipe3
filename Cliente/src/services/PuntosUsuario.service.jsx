import Axios from 'axios'

export default function PuntosUsuario(id_empl_municipal){
    
    return (Axios.get(`http://10.100.6.6:3110/solicitud/usuario/${id_empl_municipal}`, 
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}
