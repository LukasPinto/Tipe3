import Axios from 'axios'

export default function ListadoPlantilla(id_punto){
    
    return (Axios.get(`http://localhost:3001/plantilla/${id_punto}`, 
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}