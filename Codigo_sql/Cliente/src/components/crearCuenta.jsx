import React from 'react';
import "./css/crearCuenta.css"
import { Form, Button, FormLabel } from 'react-bootstrap';
import img1 from './../assets/img/usuario.png';
import { useState } from 'react';

const CrearCuenta = (props) => {

    /*const id_direccion = body.correo
    const id_cargo = body.clave
    const nombre = body.nombre
    const rut = body.rut
    const correo = body.correo
    const clave = body.clave*/
    const [body, setBody] =
        useState({
            correo: '',
            clave: ''
        });
    const handleChange = async (e) => {
        await setBody({
            ...body,
            [e.target.name]: e.target.value
        })
        console.log(body.correo, body.clave)
    }



    return (

        <div className="contenedor">
            <Form >
                <img className='imagen' src={img1} />
                <h5 className='outer-h5'>Crear usuario</h5>

                <div className="row justify-content-center">
                    <Form.Group className="mb-3 col col-md-8 mt-auto ">
                        <FormLabel className='outer-text' >Nombre Apellido</FormLabel>
                        <Form.Control type="text" className="outer-control"
                            name='nombre'
                            value={body.nombre}
                            onChange={handleChange} />


                        <Form.Label className='outer-text'>Direccion</Form.Label>
                        <Form.Control type="text" className="outer-control" name='correo' />


                        <Form.Label className='outer-text'>Correo</Form.Label>
                        <Form.Control className="outer-control" type="email" />


                        <Form.Label className='outer-text'>Contraseña</Form.Label>
                        <Form.Control type="password" className="outer-control" />



                        <Form.Label className='outer-text'>Cargo</Form.Label>
                        <Form.Select type="email" className="outer-control"   >
                            <option className="outer-text">Seleccione el cargo del usuario</option>
                            <option value="1">Usuario de direccion</option>
                            <option value="2">Subalterno de direccion</option>
                            <option value="3">Administrador</option>
                        </Form.Select>
                    </Form.Group>


                    <Button variant="outline-success" className="boton1">
                        Crear usuario
                    </Button>{' '}

                </div>
            </Form>
        </div>


    );
};







export default CrearCuenta;