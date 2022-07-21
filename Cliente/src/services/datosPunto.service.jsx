import Axios from 'axios'

export default function DatosPunto(id_punto){
    
    return (Axios.get(`http://${process.env.REACT_APP_HOST}/punto/${id_punto}`, 
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}
