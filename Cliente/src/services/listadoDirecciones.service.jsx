import Axios from 'axios'
export default function direccionesService(){
    return  (Axios.get(`http://10.100.6.6:3110/direcciones`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    }))
 }
