import Axios from 'axios'

export default function Intentos(id_punto){
    
    return (Axios.get(`http://localhost:3001/intentos/usuario/${id_punto}`, 
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}