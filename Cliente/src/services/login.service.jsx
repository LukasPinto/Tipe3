import Axios from "axios"
export default function loginService({correo,clave}){
   return Axios.post(`http://10.100.6.6:3110/login`,{ correo , clave})
}
