import React from 'react';
import "./css/bandejaIntentos.css"
import { Form, Button, Table, Accordion, Card } from 'react-bootstrap';
import "./css/historialSolicitud.css"
import "./css/puntosSolicitud.css"
import { Navigate, useLocation, Link } from 'react-router-dom';
import listadoPuntos from '../services/puntosDireccion.service';
import { useState, useEffect, useContext } from 'react';
import PuntosUsuario from '../services/PuntosUsuario.service';
import { useLocalStorage } from './custom/useLocalStorage';
import listaPuntos from '../services/listaPuntos.service';
import { UserContext } from '../context/userContext';
import Intentos from '../services/intentos.service';
const BandejaIntentos = (props) => {
  const [local, setLocal] = useLocalStorage('direccion', '')
  const [solicitud, setSolicitud] = useLocalStorage('solicitud', '')
  const [puntos, setPuntos] = useState([])
  const [intentos, setIntentos] = useState([])
  const [actualizar, setActualizar] = useState(true)
  const [traerDatos, setTraerDatos] = useState(true)
  const { userState, setUserState } = useContext(UserContext)
  const contenido = []
  useEffect(() => {

    PuntosUsuario(userState.id).then((Response) => {
      setPuntos(Response.data)


      setActualizar(!actualizar)

    }).catch(() => {
      alert("error")
    })

    console.log(puntos)
  }, [])

  useEffect(() => {
    let aux = []
    for (let punto in puntos) {
      console.log(punto)
      Intentos(puntos[punto].id_punto)
        .then((Response) => {
          console.log(Response.data)
          aux.push(Response.data)

        }).catch(() => {
          alert("error")
        })

    }
    setIntentos(aux)
    console.log(intentos)
    // for (let i of intentos) {
    //   for (let j of i) { 
    //     console.log(j)
    //     contenido.push(<tr>
    //     <td>asdsad{j.id_intento}</td>
    //     <td>asdsad</td>
    //     <td>asdasd</td>
    //     </tr>)

    //   }
    // }



  }, [])




  return (
    <>

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
                return <>
                  <tr>
                    <td>{key + 1}</td>
                    <td>{value.titulo}</td>


                    <td ><Accordion variant="primary" alwaysClose >
                      <Accordion.Item eventKey="0" variant="primary" >
                        <Accordion.Header variant="primary" >Ver</Accordion.Header>
                        <Accordion.Body variant="primary">

                          <Table className="fondoTabla" striped bordered hover size="s">
                            <thead>
                              <tr>
                                <th>Numero Intento</th>
                                <th>Encargado</th>
                                <th>Estado</th>
                                <th>Detalle</th>

                              </tr>
                            </thead>
                            <tbody>
                              
                              {intentos.map((value, key) => {
                                console.log(value)
                               
                                
                                
                              })}

                              <tr><Button className="boton-centro button" type="button" >Ver</Button>{' '}</tr>

                            </tbody>
                          </Table>

                        </Accordion.Body>
                      </Accordion.Item>

                    </Accordion></td>
                    <td>{value.inicio.substring(0, 10)}</td>
                    <td>{(value.termino !== null) && (value.termino.substring(0, 10))}</td>
                    <td>{value.estado}</td>
                  </tr>
                </>
              })}
            </tbody>
          </Table>
        </div>


        <div>
          <Link to={{ pathname: "/subidaarchivo" }}><Button className='botoncito2'>Crear nuevo punto</Button>{' '}</Link>
        </div>
      </>






    </>

  );
};

export default BandejaIntentos;