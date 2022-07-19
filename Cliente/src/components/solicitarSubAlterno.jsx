import React from 'react';
import { Form, Button,FormLabel } from 'react-bootstrap';
import  img1 from './../assets/img/usuario.png';
import "./css/solicitarSubAlterno.css"


const SolicitarSubAlterno = (props) => {
    return (
        <>
         <div className ="contenedor02"  > 
         <Form >
         <img className ='imagen02'src={img1}/>
         <h5 className='outer-h5'>Solicitar Subalterno</h5>
            <div className="row justify-content-center">
          
            <Form.Group className="mb-3 col col-md-8 mt-auto ">
                <FormLabel className='outer-text02' >Nombre Apellido</FormLabel>
                <Form.Control  className= "fondo-texto" type="text"  />
                
                <Form.Label className='outer-text'>Rut</Form.Label>
                    <Form.Control type="text" className= "outer-control"  />
                   

                <Form.Label className='outer-text'>Direccion</Form.Label>
                <Form.Control type="text" className= "outer-control"  />
            

                    <Form.Label className='outer-text'>Correo</Form.Label>
                    <Form.Control className= "outer-control" type="email" />
           
              
                    <Form.Label className='outer-text'>Contraseña</Form.Label>
                    <Form.Control type="password" className= "outer-control"  />
                   
            
            
 
                    
                    
                </Form.Group>
            </div>    
                <div className="row justify-content-center">
                    
                    <btn type="submit" className="botoncito03 button">
                        Solicitar subalterno
                    </btn>
                </div>
               
            </Form>
            </div>
        </>
        
    );
};







export default SolicitarSubAlterno;