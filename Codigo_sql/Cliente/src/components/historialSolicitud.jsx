import React from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import "./css/historialSolicitud.css"
const HistorialSolicitud = (props) => {
    return (
        <>
        <div>
        <p class="cajita1">Historial de solicitud</p>
        </div>
        <div>
        <Button className='botoncito2'>ORDENAR</Button>{' '}
        </div>
         <div className ="bg-secondary"  > 
         <Table striped bordered hover size="sm">
  <thead>
    <tr>
      
      <th>Fecha inicio</th>
      <th>Fecha termino</th>
      <th>Expediente</th>
      <th>Estado</th>
      <th>Detalle de solicitud</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>23-04-2021</td>
      <td>25-04-2021</td>
      <td>Cuenta publica de transito - 23-04-2021 - Direccion de Transito</td>
      <td>INCOMPLETO</td>
      <td><Button variant="primary">VER</Button>{' '}</td>
    </tr>
    <tr>
      
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><Button variant="primary">VER</Button>{' '}</td>
    </tr>
    <tr>
      
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><Button variant="primary">VER</Button>{' '}</td>
    </tr>
  </tbody>
</Table>
            </div>
            <div>
            <Button className='botoncito2'>Crear expediente</Button>{' '}
            <Button className='botoncito2'>Descargar todos los documentos</Button>{' '}
            </div>
        </>
        
    );
};







export default HistorialSolicitud;