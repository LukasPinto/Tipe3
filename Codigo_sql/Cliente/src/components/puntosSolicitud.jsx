import React from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import "./css/historialSolicitud.css"
const PuntosSolicitud = (props) => {
    return (
        <>
        <div>
        <p class="cajita1">Puntos de la solicitud</p>
        </div>
        <div>
        <Button className='botoncito2'>ORDENAR</Button>{' '}
        </div>
         <div className ="bg-secondary"  > 
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
    <tr>
      
      <td>1</td>
      <td>Resumen de juicios</td>
      <td><Button variant="primary">ASIGNAR</Button>{' '}</td>
      <td><Button variant="primary">ELIMINAR</Button>{' '}</td>
      <td><Button variant="primary">EDITAR</Button>{' '}</td>
      <td><Button variant="primary">VER</Button>{' '}</td>
      <td>23-04-2021</td>
      <td></td>
      <td>RECHAZADO</td>
    </tr>
    <tr>
      
      <td>2</td>
      <td>Resumen de finanzas</td>
      <td><Button variant="primary">ASIGNAR</Button>{' '}</td>
      <td><Button variant="primary">ELIMINAR</Button>{' '}</td>
      <td><Button variant="primary">EDITAR</Button>{' '}</td>
      <td><Button variant="primary">VER</Button>{' '}</td>
      <td>23-07-2021</td>
      <td></td>
      <td>PENDIENTE</td>
    </tr>
    <tr>
      
      <td>3</td>
      <td>Metricas</td>
      <td><Button variant="primary">ASIGNAR</Button>{' '}</td>
      <td><Button variant="primary">ELIMINAR</Button>{' '}</td>
      <td><Button variant="primary">EDITAR</Button>{' '}</td>
      <td><Button variant="primary">VER</Button>{' '}</td>
      <td>30-01-2022</td>
      <td>04-02-2022</td>
      <td>ACEPTADO</td>
    </tr>
  </tbody>
</Table>
            </div>
            <div>
            <Button className='botoncito2'>Crear nuevo punto</Button>{' '}
            </div>
        </>
        
    );
};







export default PuntosSolicitud;