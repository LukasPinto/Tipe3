import React from 'react';
import "./css/bandejaIntentos.css"
import { Form, Button, Table, Accordion, Card } from 'react-bootstrap';
import "./css/historialSolicitud.css"
import "./css/puntosSolicitud.css"
import {  Link ,useNavigate} from 'react-router-dom';
import listadoPuntos from '../services/puntosDireccion.service';
import { useState, useEffect, useContext } from 'react';
import PuntosUsuario from '../services/PuntosUsuario.service';
import { useLocalStorage } from './custom/useLocalStorage';
import listaPuntos from '../services/listaPuntos.service';
import { UserContext } from '../context/userContext';
import Intentos from '../services/intentos.service';
const BandejaIntentos = (props) => {
  const [punto, setPunto] = useLocalStorage('punto', '')
  const [intento_id, setIntentoId] = useLocalStorage('intento', '')
  const [puntos, setPuntos] = useState([])
  const [intentos, setIntentos] = useState([])
  const [actualizar, setActualizar] = useState(true)
  const [traerDatos, setTraerDatos] = useState(true)
  const { userState, setUserState } = useContext(UserContext)
  const history = useNavigate()
  useEffect(async () => {

    await PuntosUsuario(userState.id).then((Response) => {
      setPuntos(Response.data)


      setActualizar(!actualizar)

    }).catch(() => {
      alert("error")
    })


  }, [])

  useEffect(async () => {
    const aux = []
    for (let punto in puntos) {

      await Intentos(puntos[punto].id_punto)
        .then((Response) => {
      
          aux.push(Response.data)

        }).catch(() => {
          alert("error")
        })

    }
    await setIntentos(aux)
  
  }, [actualizar])


const handleClickPunto = (e) =>{
  setPunto(e.target.value)
  history('/nuevointento')
}

  return (
    <>
      <div>
        <p class="cajita1">Puntos de la solicitud</p>
      </div>
      <div>
        <Button className='botoncito2'>ORDENAR</Button>{' '}
      </div>
      <div className="bg-secondary"  >
        <Table striped bordered hover size="sm">
          <thead>
            <tr>

              <th>Puntos</th>
              <th>Descripcion del punto</th>
              <th>Historial</th>
              <th>Fecha inicio</th>
              <th>Fecha termino</th>
              <th>Estado</th>

            </tr>
          </thead>
          <tbody>

            {puntos.map((value, key) => {
              return (<>
                <tr>
                  <td>{key + 1}</td>
                  <td>{value.titulo}</td>


                  <td ><Accordion variant="primary" alwaysOpen >
                    <Accordion.Item eventKey="0" variant="primary" >
                      <Accordion.Header variant="primary" >Ver</Accordion.Header>
                      <Accordion.Body variant="primary">

                        <Table className="fondoTabla" striped bordered hover size="s">
                          <thead>
                            <tr>
                              <th>Numero Intento</th> 
                              <th>Estado</th>
                              <th>Respuesta</th>
                              <th>Ver detalle</th>
                            </tr>
                          </thead>
                          <tbody>
                            {intentos.map((val, k) => {
                              return (
                                val.map((valor, llave) => {

                                  return (

                                    <>
                                      {valor.id_punto === value.id_punto && (<tr>
                                        <td>{llave+1}</td>
                                        <td>{valor.estado}</td>
                                        <td>{valor.descripcion} </td>
                                        <td><Button className="boton-centro button" type="button" >Ver</Button>{' '}</td>
                                      </tr>)}

                                    </>)
                                })

                              )
                            })}

                            
                            <tr><Button className='botoncito2' type="button"  value={value.id_punto} onClick={handleClickPunto}>Crear nuevo intento</Button></tr>

                          </tbody>
                        </Table>

                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion></td>
                  <td>{value.inicio.substring(0, 10)}</td>
                  <td>{(value.termino !== null) && (value.termino.substring(0, 10))}</td>
                  <td>{value.estado}</td>
                </tr>
              </>)
            })}
          </tbody>
        </Table>




      </div>
     


      <div>
        <Link to={{ pathname: "/subidaarchivo" }}><Button className='botoncito2'>Crear nuevo punto</Button>{' '}</Link>
      </div>







    </>

  );
};

export default BandejaIntentos;