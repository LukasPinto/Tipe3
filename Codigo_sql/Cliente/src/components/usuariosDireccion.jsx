import React from 'react';
import { Form, Button, Table, Badge } from 'react-bootstrap';
import "./css/usuariosDireccion.css"

const UsuarioDireccion = (props) => {
    return (
        <><div className='fondoArriba'>
        
        <h3 className='titulo1' >DIRECCION DE TRANSITO</h3>
        </div>
         

           
            <div className='contenedor'>
           
            <div className="row justify-content-center">
                <Button className="boton1" >
                        Ordenar
                </Button>
               </div>
        
              
               
               <div className="algo">
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
      <td><Button variant="primary">Editar</Button>{' '}</td>
      <td><Button variant="primary">Eliminar</Button>{' '}</td>
    </tr>
    <tr>
      <td>Subalterno de direccion</td>
      <td>onur.aksal@cartagena.cl</td>
      <td>Onur Aksal</td>
      <td><Button variant="primary">Editar</Button>{' '}</td>
      <td><Button variant="primary">Eliminar</Button>{' '}</td>
    </tr>
    <tr>
      <td>Administrador</td>
      <td>larry.the.bird@cartagena.c</td>
      <td>Larry the Bird</td>
      <td><Button variant="primary">Editar</Button>{' '}</td>
      <td><Button variant="primary">Eliminar</Button>{' '}</td>
    </tr>
  </tbody>
</Table>
</div>

</div>    
       
            <Button variant="primary">Crear usuario</Button>{' '}
           
        </>
        
    );
};







export default UsuarioDireccion;