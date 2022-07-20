import Axios from 'axios'
export default function direccionesService(){
    return  (Axios.get(`http://localhost:3110/direcciones`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    }))
 }
