import Axios from 'axios'

export default function SubirPlantilla(files,id_punto){
    
    return (Axios.post(`http://${process.env.REACT_APP_HOST}/upload/plantilla/${id_punto}`, 
        files,
        
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}
