import React from 'react';
import { Form, Button, FormLabel } from 'react-bootstrap';
import "./css/crearCuenta.css"



const CrearCuenta = (props) => {
    return (
       
        
        <div className="contener">
         <Form >
            <h5 className='outer-h5'>Crear usuario</h5>
         
            <div className="row justify-content-center">
            <Form.Group className="mb-3 col col-md-8 mt-auto ">
                <FormLabel className='outer-p' >Nombre Apellido</FormLabel>
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
                    <Button className="botonCrear">
                        Crear usuario
                    </Button>
                    </div> 
            </Form>
            </div>
           
       
    );
};







export default CrearCuenta;