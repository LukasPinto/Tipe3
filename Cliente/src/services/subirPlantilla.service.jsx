import Axios from 'axios'

export default function SubirPlantilla(files,id_punto){
    
    return (Axios.post(`http://localhost:3001/upload/plantilla/${id_punto}`, 
        files,
        
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}