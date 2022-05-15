import React from 'react';
import  img1 from './../assets/img/usuario.png';
import "./css/modificarCuenta.css"
import { Form, Button, FormLabel } from 'react-bootstrap';


const ModificarCuenta = (props) => {
    return (
        <>
         <div className ="contenedor"  > 
         <Form >
         <img className ='imagen'src={img1}/>
         <h5 className='outer-h5'>Modificar cuenta</h5>
            <div className="row justify-content-center">
          
            <Form.Group className="mb-3 col col-md-8 mt-auto ">
                <FormLabel className='outer-text' >Nombre Apellido</FormLabel>
                <Form.Control  className= "fondo-texto" type="text"  />
            

                <Form.Label className='outer-text'>Direccion</Form.Label>
                <Form.Control type="text" className= "outer-control"  />
            

                    <Form.Label className='outer-text'>Correo</Form.Label>
                    <Form.Control className= "outer-control" type="email" />
           
              
                    <Form.Label className='outer-text'>Contraseña</Form.Label>
                    <Form.Control type="password" className= "outer-control"  />
                   
            
 
                    <Form.Label className='outer-text'>Cargo</Form.Label>
                    <Form.Select type="email" className= "outer-control"   >
                    <option className ="outer-text">Seleccione el cargo del usuario</option>
                    <option value="1">Usuario de direccion</option>
                    <option value="2">Subalterno de direccion</option>
                    <option value="3">Administrador</option>
                    </Form.Select>
                </Form.Group>
            </div>    
                <div className="row justify-content-center">
                    
                    <Button type="submit" className="botoncito1">
                        Modificar usuario
                    </Button>
                </div>
               
            </Form>
            </div>
        </>
        
    );
};







export default ModificarCuenta;