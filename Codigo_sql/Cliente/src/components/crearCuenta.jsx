import React from 'react';
import { Form, Button } from 'react-bootstrap';



const CrearUsuario = (props) => {
    return (
        <>
         <Form >
        <div className="row justify-content-center">
         
            <Form.Group className="mb-3 col col-md-3 mt-auto">
                <Form.Label>Nombre Mascota</Form.Label>
                <Form.Control type="number" name="edad"  />
            </Form.Group>
            <Form.Group className="mb-3 col col-md-3 mt-auto">
                <Form.Label>Especie</Form.Label>
                <Form.Control type="number" name="edad"  />
            </Form.Group>
        </div>
            <div className="row justify-content-center">

                <Form.Group className="mb-3 col col-md-3 mt-auto">
                    <Form.Label>Raza</Form.Label>
                    <Form.Control type="number" name="edad"  />
                </Form.Group>
                <Form.Group className="mb-3 col col-md-3 mt-auto">
                    <Form.Label>Peso</Form.Label>
                    <Form.Control type="number" name="edad"  />
                </Form.Group>
            </div>
            <div className="row justify-content-center">

                <Form.Group className="mb-3 col col-md-3 mt-auto">
                    <Form.Label>Edad</Form.Label>
                    <Form.Control type="number"  name="edad"  />
                </Form.Group>
                <Form.Group className="mb-3 col col-md-2 mt-auto ">
                    <Form.Label>Fecha de la consulta</Form.Label>
                  
                </Form.Group>
                <Form.Group className="mb-3 col col-md-2 mt-auto " >
                    <Form.Label>Seleccione su mascota</Form.Label>
                    <Form.Select aria-label="Default select example" name="horario" >
                        <option value="false">Hora de atencion</option>
                        
                    </Form.Select>
                </Form.Group>
                <div className="row justify-content-center">
                    <Button variant="primary" type="submit" className="col-md-3">
                        Submit
                    </Button>
                </div>
            </div>
            </Form>
        </>
        
    );
};







export default CrearUsuario;