import React, { useContext } from 'react';
import { Form, Button, Table, Badge } from 'react-bootstrap';
import direccionesService from '../services/listadoDirecciones.service';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {  DirContext,DireccionContext } from '../context/dirContext';

const VistaGeneral = () => {

    const {dirContext,setDirContext} = useContext(DireccionContext)
    const [direcciones, setDirecciones] = useState([])
    const [actualizar, setActualizar] = useState(true)
    const [traerDatos, setTraerDatos] = useState(true)
    
    useEffect(() => {
        direccionesService()
            .then((Response) => {

                setDirecciones(Response.data)
                console.log(direcciones)
                setActualizar(!actualizar)
            }).
            catch(() => {
                alert("error")
            })
    }, [traerDatos])


    return (
        <>


            
            <div className="bg-light"  style={{backgroundColor: 'red'}}>
                <Form >

                    <Form.Group className="col-md-7 offset-md-1">

                        <Button variant="primary" type="submit" className="col-md-5">
                            Listado de direcciones
                        </Button>

                    </Form.Group>

                    <Form.Group className="col-md-4 offset-md-7">

                        <Button variant="primary" type="submit" className="col-md-8">
                            Ordenar
                        </Button>

                    </Form.Group>

                    <div>
                        <Table striped bordered hover size="s">
                            <thead>
                                <tr>
                                    <th>Nombre de direccion</th>
                                    <th>Gestionar Expediente</th>
                                    <th>Expediente Actual</th>
                                    <th>Gestionar Usuario usuario</th>

                                </tr>
                            </thead>
                            <tbody>
                                
                                
                                {direcciones.map((value,key)=>{ 
                                    return<><tr>
                                    <td key={value.id_direccion}>{value.nombre_direccion}</td>
                                    <td><Button variant="primary">Gestionar</Button>{' '}</td>
                                    <td><Link to={{pathname:"/"}} ><Button variant="primary" name="id_direccion" value={value.id_direccion} onClick={()=>setDirContext(value.id_direccion)} >Ver</Button></Link>{' '}</td>
                                    <td><Button variant="primary">Gestionar</Button>{' '}</td>

                                </tr>
                                </>
                                })}
                            </tbody>
                        </Table>
                    </div>
                </Form>
                <Button variant="primary">Crear direccion</Button>{' '}
            </div>

        </>

    );
};


export default VistaGeneral;