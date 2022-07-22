import React, { useContext } from 'react';
import { Form, Button, Table, Badge, Container} from 'react-bootstrap';
import direccionesService from '../services/listadoDirecciones.service';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DirContext, DireccionContext } from '../context/dirContext';
import { useLocalStorage } from './custom/useLocalStorage';
import estadoSolicitud from '../services/estadoSolicitud.service';
import listadoPuntos from '../services/puntosDireccion.service';
import solicitudes from '../services/solicitudes.sevice';
import "./css/vistaAdmin.css"
const VistaGeneral = () => {
    const [local, setLocal] = useLocalStorage('direccion', '')
    const [solicitud,setSolicitud] = useLocalStorage('solicitud','')
    const [estado, setEstado] = useLocalStorage('estado', '')
    const { DirContext, setDirContext } = useContext(DireccionContext)
    const [direcciones, setDirecciones] = useState([])
    const [actualizar, setActualizar] = useState(true)
    const [traerDatos, setTraerDatos] = useState(true)
    const history = useNavigate()
    useEffect(() => {

        direccionesService()
            .then((Response) => {
                console.log(Response.data)
                setDirecciones(Response.data)
                setActualizar(!actualizar)
            }).
            catch(() => {
                alert("error")
            })
    }, [traerDatos])

    const handleClickActual = async(e) => {


          setLocal(e.target.value)
        await listadoPuntos(e.target.value)
        .then((Response) => {
            setSolicitud(Response.data[0].id_solicitud)
            setEstado(Response.data[0].estado)
            history("/puntossolicitud")
          }).
          catch((err) => {
            
            setSolicitud("")
            setEstado("false")
            history("/puntossolicitud")

            
          })
          
   

    }
    const handleClickHistorial = (e) => {

        setDirContext(e.target.value)
        setLocal(e.target.value)

    }

    const handleClickGestionar = (e) => {

        setDirContext(e.target.value)
        setLocal(e.target.value)
        history("/usuariosdireccion")

    }
    return (
        <>

<Container className='fondoBlanco3' maxWidth="sm">
<h3 className="margenVista">Lista de direcciones</h3>
            <div style={{ backgroundColor: '' }}>
                <Form >
                <Button variant="success" type="submit" className="margenVista">
                            Ordenar
                        </Button>
                    <div>
                        <Table striped bordered hover size="s">
                            <thead>
                                <tr>
                                    <th>Nombre de direccion</th>
                                    <th>Gestionar Expediente</th>
                                    <th>Expediente Actual</th>
                                    <th>Gestionar Usuarios</th>
                                </tr>
                            </thead>
                            <tbody>
                {direcciones.map((value, key) => {
                                    return <><tr>
                                        <td key={value.id_direccion}>{value.nombre_direccion}</td>
                                        <td><Link to={{ pathname: "/historialsolicitud" }} >
                                            <Button variant="success" name="id_direccion" value={value.id_direccion} onClick={handleClickHistorial} >Gestionar</Button></Link>{' '}</td>
                                        <td>
                                            <Button variant="success" name="id_direccion" value={value.id_direccion} onClick={handleClickActual} >Ver</Button>{' '}</td>
                                        <td>
                                            <Button variant="success" value={value.id_direccion}onClick={handleClickGestionar}>Gestionar</Button>{' '}</td>

                                    </tr>
                                    </>
                                })}
                            </tbody>
                        </Table>
                    </div>
                </Form>
                <Button variant="success" className="margenVista">Crear direccion</Button>{' '}
            </div>
        
            </Container>
        </>

    );
};


export default VistaGeneral;