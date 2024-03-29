import React, { useContext, Component } from 'react';
import { Form, Button, Table, Accordion, Card, Container } from 'react-bootstrap';
import "./css/historialSolicitud.css"
import "./css/puntosSolicitud.css"
import { Navigate, useLocation,Link } from 'react-router-dom';
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

      {(local === '') ? (<Navigate to='/vistageneral'/>) :
        <>
         <Container maxWidth="sm" className="fondoBlanco4">
            <h3 >Puntos de la solicitud</h3>
          
          <div>
            <Button variant="success">Ordenar</Button>{' '}
          </div>
        
            <Table striped bordered hover size="sm">
              <thead>
                <tr>

                  <th>Puntos</th>
                  <th>Titulo</th>
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
                      <td><Button variant="success">ASIGNAR</Button>{' '}</td>
                      <td><Button variant="success">ELIMINAR</Button>{' '}</td>
                      <td><Button variant="success">EDITAR</Button>{' '}</td>


                      <td><Accordion defaultActiveKey="0" variant="light">
                        <Accordion.Item eventKey="0" variant="dark">
                          <Accordion.Header variant="dark">Ver</Accordion.Header>
                          <Accordion.Body variant="dark">
                            
                              <Table striped bordered hover size="s" variant="success">
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


                                  <td>
                                    <Button className="boton-centro button" variant='success' type="button">Ver</Button>{' '}</td>

                                </tbody>
                              </Table>
                            
                          </Accordion.Body>
                        </Accordion.Item>

                      </Accordion></td>
                      <td>{value.inicio.substring(0, 10)}</td>
                      <td>{(value.termino !==null) &&(value.termino.substring(0, 10))}</td>
                      <td>{value.estado}</td>
                    </tr>
                  </>
                })}
              </tbody>
            </Table>
      


          <div>
            <Link to={{ pathname: "/subidaarchivo" }}>
              <Button variant="success">Crear nuevo punto</Button>{' '}</Link>
          </div>
          </Container>
        </>



      }


    </>

  );
};

export default PuntosSolicitud;