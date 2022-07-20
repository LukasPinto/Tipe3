import Axios from 'axios'

export default function SubirPlantilla(files,id_punto){
    
    return (Axios.post(`http://10.100.6.6:3110/upload/plantilla/${id_punto}`, 
        files,
        
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}
