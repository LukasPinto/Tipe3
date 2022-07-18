import Axios from 'axios'

export default function DatosPunto(id_punto){
    
    return (Axios.get(`http://localhost:3001/punto/${id_punto}`, 
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}