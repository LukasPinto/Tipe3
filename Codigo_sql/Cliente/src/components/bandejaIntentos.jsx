import React from 'react';
import { Form, Button, Table, Badge } from 'react-bootstrap';

const BandejaIntentos = (props) => {
    return (
        <>
         <div className ="bg-light"  > 
         <Form >
            <div className ="bg-light link" >
            <Badge bg="secondary">Vista usuario de Direccion</Badge>
            
           
           
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
      <th>Nombre del punto</th>
      <th>Numero de intentos</th>
      <th>Observaciones</th>
      <th>Estado</th>
      <th>Detalle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Resumen de juicios</td>
      <td>1</td>
      <td>Se envian archivos solicitados</td>
      <td>Rechazados</td>
      <td><Button variant="primary">VER</Button>{' '}</td>
    </tr>
    <tr>
      <td>Resumen de juicios</td>
      <td>2</td>
      <td>Se vuelve a enviar archivos solicitados</td>
      <td>Pendiente</td>
      <td><Button variant="primary">VER</Button>{' '}</td>
    </tr>
    
  </tbody>
</Table>
            </div>
            </Form>
            <Button variant="primary">Nuevo intento</Button>{' '}
            </div>
        </>
        
    );
};







export default BandejaIntentos;