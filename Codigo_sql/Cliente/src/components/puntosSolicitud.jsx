import React, { useContext } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import "./css/historialSolicitud.css"
import { Redirect, useLocation } from 'react-router-dom';
import listadoPuntos from '../services/puntosDireccion.service';
import { useState, useEffect } from 'react';

import { useLocalStorage } from './custom/useLocalStorage';

const PuntosSolicitud = (props) => {
  const [local, setLocal] = useLocalStorage('direccion', '')
  const [puntos, setPuntos] = useState([])
  const [actualizar, setActualizar] = useState(true)
  const [traerDatos, setTraerDatos] = useState(true)

  useEffect(() => {

    listadoPuntos(local)
      .then((Response) => {
        setPuntos(Response.data)
        setActualizar(!actualizar)
      }).
      catch(() => {
        alert("error")
      })
  }, [traerDatos])

  return (
    <>
      {console.log(local)}
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
                      <td>{key+1}</td>
                      <td>{value.titulo}</td>
                      <td><Button variant="primary">ASIGNAR</Button>{' '}</td>
                      <td><Button variant="primary">ELIMINAR</Button>{' '}</td>
                      <td><Button variant="primary">EDITAR</Button>{' '}</td>
                      <td><Button variant="primary">VER</Button>{' '}</td>
                      <td>{value.inicio.substring(0,10)}</td>
                      <td>{value.termino.substring(0,10)}</td>
                      <td>{value.estado}</td>
                      </tr>
                    </>
                  })}
              </tbody>
            </Table>
          </div>
          <div>
            <Button className='botoncito2'>Crear nuevo punto</Button>{' '}
          </div>
        </>



      }


    </>

  );
};







export default PuntosSolicitud;