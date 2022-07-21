import Axios from 'axios'

export default function ListadoPlantilla(id_punto){
    
    return (Axios.get(`http://${process.env.REACT_APP_HOST}/plantilla/${id_punto}`, 
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}
