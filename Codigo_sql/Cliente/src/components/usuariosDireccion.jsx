import React from 'react';
import { Form, Button, Table, Badge } from 'react-bootstrap';
import "./css/usuariosDireccion.css"

const UsuarioDireccion = (props) => {
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
            <Table className= "fondoTabla" striped bordered hover size="s">
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
    <tr>
      <td>Usuario de direccion</td>
      <td>juanito.perez@cartagena.cl</td>
      <td>Juanito Perez</td>
      <td><btn className="boton-centro button" type="button">Editar</btn>{' '}</td>
      <td><btn className="boton-centro button" type="button">Eliminar</btn>{' '}</td>
    </tr>
    <tr>
      <td>Subalterno de direccion</td>
      <td>onur.aksal@cartagena.cl</td>
      <td>Onur Aksal</td>
      <td><btn className="boton-centro button" type="button">Editar</btn>{' '}</td>
      <td><btn className="boton-centro button" type="button">Eliminar</btn>{' '}</td>
    </tr>
    <tr>
      <td>Administrador</td>
      <td>larry.the.bird@cartagena.c</td>
      <td>Larry the Bird</td>
      <td><btn className="boton-centro button" type="button">Editar</btn>{' '}</td>
      <td><btn className="boton-centro button" type="button">Eliminar</btn>{' '}</td>
    </tr>
  </tbody>
</Table>



       
<btn className="botoncito1 button" type="button">Crear usuario</btn>{' '}
</div> 
</div>           
        </>
        
    );
};







export default UsuarioDireccion;