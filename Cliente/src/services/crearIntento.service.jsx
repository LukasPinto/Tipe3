import Axios from 'axios'

export default function CrearIntento(data){
    console.log(data)
    return (Axios.put(`http://${process.env.REACT_APP_HOST}/usuario/nuevo/intento`, {

        id_punto:data.id_punto,
    }
     ,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            
        }
    },
    )
    )
}
