import Axios from 'axios'
export default function direccionesService(){
    return  (Axios.get(`http://${process.env.REACT_APP_HOST}/direcciones`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    }))
 }
