import React from 'react';
import { Form, Button } from 'react-bootstrap';



const SolicitarSubAlterno = (props) => {
    return (
        <>
         <div className ="bg-secondary"  > 
         <Form >
     
            <div className="row justify-content-center">
            <Form.Group className="mb-3 col col-md-3 mt-auto">
                <Form.Label>Nombre Apellido</Form.Label>
                <Form.Control type="text" name="edad"  />
            </Form.Group>
            <Form.Group className="mb-3 col col-md-3 mt-auto">
                <Form.Label>Direccion</Form.Label>
                <Form.Control type="text" name="edad"  />
            </Form.Group>
        </div>
            <div className="row justify-content-center">

                <Form.Group className="mb-3 col col-md-3 mt-auto">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" name="edad"  />
                </Form.Group>
                <Form.Group className="mb-3 col col-md-3 mt-auto">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" name="edad"  />
                </Form.Group>
            </div>
            <div className="row justify-content-center">
            <Form.Group className="mb-3 col col-md-3 mt-auto">
                    <Form.Label>Encargado</Form.Label>
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
                        Solicitar subalterno de direccion
                    </Button>
                </div>
               
            </Form>
            </div>
        </>
        
    );
};







export default SolicitarSubAlterno;