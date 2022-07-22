import Axios from 'axios'

export default function SubirArchivoIntento(files,id_intento,){
    
    return (Axios.post(`http://${process.env.REACT_APP_HOST}/upload/archivo/${id_intento}`, 
        files,
        
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}
