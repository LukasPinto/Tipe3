import Axios from 'axios'
export default function direccionesService(rut){
    return  (Axios.get(`http://localhost:3001/direcciones`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    }))
 }