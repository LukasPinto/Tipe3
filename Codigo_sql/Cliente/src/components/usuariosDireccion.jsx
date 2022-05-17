import React, { useState, useEffect,useContext} from 'react';
import { Form, Button, Table, Badge } from 'react-bootstrap';
import "./css/usuariosDireccion.css"
import usuariosPorDireccion from '../services/usuariosDireccion.service';
import { useLocalStorage } from './custom/useLocalStorage';
import EliminiarUsuarioDireccion from '../services/eliminarUsuario.service';
import { UserContext } from '../context/userContext';
import {  Link,useHistory } from 'react-router-dom';
const UsuarioDireccion = (props) => {

  const [usuarios, setUsuarios] = useState([])
  const [local, setLocal] = useLocalStorage('direccion', '')
  const [actualizar, setActualizar] = useState(true)
  const [traerDatos, setTraerDatos] = useState(true)
  const [usuario,setUsuario] = useLocalStorage('usuario_direccion','')
  const { userState, setUserState } = useContext(UserContext)
  const history = useHistory()
  useEffect(() => {

    usuariosPorDireccion(local)
      .then((Response) => {
        setUsuarios(Response.data)
        setActualizar(!actualizar)
        console.log(Response)
      }).
      catch(() => {
        alert("error")
      })
  }, [traerDatos,usuario])  


  const eliminarUsuario = async(e) =>{
      setUsuario(e.target.value)
      EliminiarUsuarioDireccion(userState.cargo,e.target.value).then(response=>{
        console.log(response)
      })
      .catch(err=>{
        console.log(err)
      })
  }
  const editarUsuario = async(e) =>{
    setUsuario(e.target.value)
  history.push("/modificarusuario")
}


  return (
    <>
      <div className='contenedor3'>
        <h1 className='tituloTabla'  >Direccion de transito</h1>
        <h5 className='tituloTabla' >Usuarios de esta direccion</h5>
      </div>
      <div className=''>
        <div className="algo">
          <btn className="botoncito1 button" type="button" >{' '}
            Ordenar
          </btn>
          <Table className="fondoTabla" striped bordered hover size="s">
            <thead>
              <tr>
                <th>Tipo de usuario</th>
                <th>Correo</th>
                <th>Nombre</th>
                <th>Editar usuario</th>
                <th>Eliminar usuario</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((value, key) => {
                return <>
                  <tr>
                    <td>{value.descripcion}</td>
                    <td>{value.correo}</td>
                    <td>{value.nombre}</td>
                    <td><button className="boton-centro button" type="button" value={value.id_empl_direccion} onClick={editarUsuario}>Editar</button>{' '}</td>

                    <td><button className="botoncito1 button" variant="primary" name="id_empl_solicitud" value={value.id_empl_direccion} onClick={eliminarUsuario} >Eliminar</button>{' '}</td>
                  </tr>
                </>
              })}
              {/*falta colocar la url de direccionamiento solamente */}
            </tbody>
          </Table>



          <Link to={{pathname:'/crearusuario'}}><button className="botoncito1 button" type="button" >Crear usuario</button>{' '}</Link>
        </div>
      </div>
      <div className='fondoTabla'></div>
    </>

  );
};







export default UsuarioDireccion;