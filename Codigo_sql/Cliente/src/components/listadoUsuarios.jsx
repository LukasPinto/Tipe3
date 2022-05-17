import React from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import "./css/listadoUsuarios.css"
const ListadoUsuarios = (props) => {
    return (
        <>
      <div className='contenedor3'>
        <h1 className='tituloTabla'  >Punto</h1>
        <h5 className='tituloTabla' >Usuarios para asignar</h5>
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
        <h5 className='tituloTabla'>Asignado al punto</h5>
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