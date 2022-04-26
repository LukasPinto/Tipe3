import React from 'react';
import { Form, Button, Table, Badge } from 'react-bootstrap';

const BandejaDireccion = (props) => {
    return (
        <>
         <div className ="bg-light"  > 
         <Form >
            <div className ="bg-light link" >
            <Badge bg="secondary">Direccion de transito</Badge>
            
            <Form.Group className="mb-3 col-md-1 mt-auto">
                <Badge bg="secondary">Usuarios de esta direccion</Badge>
                
            </Form.Group>
           
            </div>
            <Form.Group className="col-md-4 offset-md-10">
                <Button variant="primary" type="submit" className="col-md-3">
                        Ordenar
                </Button>
               
            </Form.Group>
            
            <div>
            <Table striped bordered hover size="s">
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
            </Form>
            <Button variant="primary">Crear usuario</Button>{' '}
            </div>
        </>
        
    );
};







export default BandejaDireccion;