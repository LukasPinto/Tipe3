import Axios from "axios"
export default function loginService({correo,clave}){
   return Axios.post(`http://localhost:3110/login`,{ correo , clave})
}
