import Axios from "axios"
export default function loginService({correo,clave}){
   return Axios.post(`http://${process.env.REACT_APP_HOST}/login`,{ correo , clave})
}
