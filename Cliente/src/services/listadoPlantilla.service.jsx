import Axios from 'axios'

export default function ListadoPlantilla(id_punto){
    
    return (Axios.get(`http://10.100.6.6:3110/plantilla/${id_punto}`, 
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}
