import React from 'react';
import { Form, Button } from 'react-bootstrap';


const ModificarCuenta = (props) => {
    return (
        <>
         <div className ="contener"  > 
         <Form >
     
            <div className="row justify-content-center">
            <Form.Group className="mb-3 col col-md-3 mt-auto">
                <Form.Label>Nombre Apellido</Form.Label>
                <Form.Control type="text" name="edad"  />
        
       
                <Form.Label>Direccion</Form.Label>
                <Form.Control type="text" name="edad"  />

 

          
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" name="edad"  />

     
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" name="edad"  />
           
      
                    <Form.Label>Cargo</Form.Label>
                    <Form.Select type="email" name="edad"  >
                    <option>Seleccione el cargo del usuario</option>
                    <option value="1">Usuario de direccion</option>
                    <option value="2">Subalterno de direccion</option>
                    <option value="3">Administrador</option>
                    </Form.Select>
                </Form.Group>
            </div>    
                <div className="row justify-content-center">
                    
                    <Button variant="primary" type="submit" className="col-md-3">
                        Modificar usuario
                    </Button>
                </div>
               
            </Form>
            </div>
        </>
        
    );
};







export default ModificarCuenta;