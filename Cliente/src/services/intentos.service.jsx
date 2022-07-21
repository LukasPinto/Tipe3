import Axios from 'axios'

export default function Intentos(id_punto){
    
    return (Axios.get(`http://${process.env.REACT_APP_HOST}/intentos/usuario/${id_punto}`, 
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}
