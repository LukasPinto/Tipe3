import React, { useContext } from 'react';
import { Form, Button, Table, Badge } from 'react-bootstrap';
import direccionesService from '../services/listadoDirecciones.service';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DirContext, DireccionContext } from '../context/dirContext';
import { useLocalStorage } from './custom/useLocalStorage';
import estadoSolicitud from '../services/estadoSolicitud.service';
import listadoPuntos from '../services/puntosDireccion.service';
import solicitudes from '../services/solicitudes.sevice';
const VistaGeneral = () => {
    const [local, setLocal] = useLocalStorage('direccion', '')
    const [solicitud,setSolicitud] = useLocalStorage('solicitud','')
    const [estado, setEstado] = useLocalStorage('estado', '')
    const { DirContext, setDirContext } = useContext(DireccionContext)
    const [direcciones, setDirecciones] = useState([])
    const [actualizar, setActualizar] = useState(true)
    const [traerDatos, setTraerDatos] = useState(true)
    
    useEffect(() => {

        direccionesService()
            .then((Response) => {
                setDirecciones(Response.data)
                setActualizar(!actualizar)
            }).
            catch(() => {
                alert("error")
            })
    }, [traerDatos])

    const handleClickActual = async(e) => {

        setDirContext(e.target.value)
        setLocal(e.target.value)
        await listadoPuntos(e.target.value)
        .then((Response) => {
            setSolicitud(Response.data[0].id_solicitud)
            setEstado(Response.data[0].estado)
          }).
          catch((err) => {
            setEstado("false")

          })
          
   

    }
    const handleClickHistorial = async(e) => {

        setDirContext(e.target.value)
        setLocal(e.target.value)


    }
    return (
        <>


            <div className="bg-light" style={{ backgroundColor: 'red' }}>
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


                                {direcciones.map((value, key) => {
                                    return <><tr>
                                        <td key={value.id_direccion}>{value.nombre_direccion}</td>
                                        <td><Link to={{ pathname: "/historialsolicitud" }} ><Button variant="primary" name="id_direccion" value={value.id_direccion} onClick={handleClickHistorial} >Gestionar</Button></Link>{' '}</td>
                                        <td><Link to={{ pathname: "/puntossolicitud" }} ><Button variant="primary" name="id_direccion" value={value.id_direccion} onClick={handleClickActual} >Ver</Button></Link>{' '}</td>
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