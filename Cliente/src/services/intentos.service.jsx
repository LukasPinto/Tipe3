import Axios from 'axios'

export default function Intentos(id_punto){
    
    return (Axios.get(`http://10.100.6.6:3110/intentos/usuario/${id_punto}`, 
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}
