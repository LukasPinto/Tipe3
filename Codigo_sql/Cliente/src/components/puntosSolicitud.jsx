import React, { useContext, Component } from 'react';
import { Form, Button, Table, Accordion, Card } from 'react-bootstrap';
import "./css/historialSolicitud.css"
import "./css/puntosSolicitud.css"
import { Redirect, useLocation,Link } from 'react-router-dom';
import listadoPuntos from '../services/puntosDireccion.service';
import { useState, useEffect } from 'react';

import { useLocalStorage } from './custom/useLocalStorage';
import listaPuntos from '../services/listaPuntos.service';


const PuntosSolicitud = (props) => {
  const [local, setLocal] = useLocalStorage('direccion', '')
  const [solicitud,setSolicitud] =useLocalStorage('solicitud','')
  const [puntos, setPuntos] = useState([])
  const [actualizar, setActualizar] = useState(true)
  const [traerDatos, setTraerDatos] = useState(true)

  useEffect(() => {

    listaPuntos(solicitud)
      .then((Response) => {
        console.log('resp listado: '+Response.data)
        setPuntos(Response.data)
        setActualizar(!actualizar)
      }).
      catch(() => {
        alert("error")
      })
  }, [traerDatos])

  return (
    <>

      {(local === '') ? (<Redirect to='/vistageneral'></Redirect>) :
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
                  <th>Asignar encargado</th>
                  <th>Eliminar punto</th>
                  <th>Editar punto</th>
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
                      <td><Button variant="primary">ASIGNAR</Button>{' '}</td>
                      <td><Button variant="primary">ELIMINAR</Button>{' '}</td>
                      <td><Button variant="primary">EDITAR</Button>{' '}</td>


                      <td><Accordion defaultActiveKey="0" variant="primary">
                        <Accordion.Item eventKey="0" variant="primary">
                          <Accordion.Header variant="primary">Ver</Accordion.Header>
                          <Accordion.Body variant="primary">
                            
                              <Table className= "fondoTabla" striped bordered hover size="s">
                                <thead>
                                  <tr>

                                    <th>Numero Intento</th>
                                    <th>Encargado</th>
                                    <th>Estado</th>
                                    <th>Detalle</th>

                                  </tr>
                                </thead>
                                <tbody>
                                  <td>Intento x</td>
                                  <td>Rechazado</td>
                                  <td>n/a</td>


                                  <td><Button className="boton-centro button" type="button">Ver</Button>{' '}</td>

                                </tbody>
                              </Table>
                            
                          </Accordion.Body>
                        </Accordion.Item>

                      </Accordion> </td>


                      <td>{value.inicio.substring(0, 10)}</td>
                      <td>{value.termino.substring(0, 10)}</td>
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



      }


    </>

  );
};

export default PuntosSolicitud;