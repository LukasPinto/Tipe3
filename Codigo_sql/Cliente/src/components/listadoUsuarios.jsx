import React from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import "./css/listadoUsuarios.css"
const ListadoUsuarios = (props) => {
    return (
        <>
        <div>
        <p class="cajita1">Historial de solicitud</p>
        </div>
        <div>
        <p>Lista de usuarios de esta direccion</p>
        </div>
        <div className='contenedor'>
         <Table striped bordered hover size="sm">
  <thead>
    <tr>
      
      <th>Nombre de usuario</th>
      <th>Correo de usuario</th>
      <th>Asignar a punto</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Juanito Perez</td>
      <td>juanito.perez@cartagena.cl</td>
      <td><btn className="boton-centro button" type="button">Asignar</btn>{' '}</td>
    </tr>
    <tr>
      
      <td>Onur Aksal</td>
      <td>onur.aksal@cartagena.cl</td>
      <td><btn className="boton-centro button" type="button">Asignar</btn>{' '}</td>
    </tr>
  </tbody>
</Table>
</div>
<div>
        <p>Asignado al punto</p>
        </div>
<div className='contenedor'>
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      
      <th>Nombre de usuario</th>
      <th>Correo de usuario</th>
      <th>Eliminar del punto</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Elian Salinas</td>
      <td>elian.salinas@cartagena.cl</td>
      <td><btn className="boton-centro button" type="button">Eliminar</btn>{' '}</td>
    </tr>
  </tbody>
</Table>
            </div>
            <div>
            <btn className="botoncito1 button" type="button">Guardar cambios</btn>{' '}
            </div>
        </>
        
    );
};







export default ListadoUsuarios;