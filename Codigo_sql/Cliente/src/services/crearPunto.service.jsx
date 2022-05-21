import Axios from 'axios'

export default function CrearPunto(files){
    
    return (Axios.post(`http://localhost:3001/upload/plantilla`, 
        files,
   
    
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        
        }
    },
    )
    )
}