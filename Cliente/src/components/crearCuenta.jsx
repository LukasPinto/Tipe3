import React from 'react';
import "./css/crearCuenta.css"
import { Form, Button, FormLabel } from 'react-bootstrap';
import img1 from './../assets/img/usuario.png';
import { useState, useEffect ,useContext} from 'react';
import direccionesService from '../services/listadoDirecciones.service';
import crearUsuario from '../services/crearUsuario.service';
import { UserContext } from '../context/userContext';
const CrearCuenta = (props) => {

    const { userState} = useContext(UserContext)
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


    const [body, setBody] =
        useState({
            id_direccion: "",
            id_cargo: "",
            nombre: "",
            rut: "",
            correo: "",
            clave: ""
        });
    const handleChange = async (e) => {
        await setBody({
            ...body,
            [e.target.name]: e.target.value
        })
        console.log(body.id_direccion, body.id_cargo, body.nombre, body.rut, body.correo, body.clave)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        crearUsuario(body.id_direccion, body.id_cargo, body.nombre, body.rut, body.correo, body.clave,userState.cargo)
            .then((Response) => {
                console.log(Response)
                if (Response.data.message) {
                    alert("error")
                }
                else {
                    console.log(Response.data)
                    alert("Usuario creado exitosamente")
                }
            })

            .catch(() => {
                alert("error")
            })
    }

    return (

        <div className="contenedorcito">

            <Form onSubmit={handleSubmit}>
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
                        <Form.Select type="text" className="outer-control"    
                            name='id_direccion'
                            value={body.id_direccion}
                            onChange={handleChange} >
                            <option  value={false} readOnly>Seleccione el cargo del usuario</option>
                            {direcciones.map((value) => {
                            return <option value={value.id_direccion} key={value.nombre_direccion} >{value.nombre_direccion}</option>
                        })
                        }
                        </Form.Select>


                        <Form.Label className='outer-text'>Correo</Form.Label>
                        <Form.Control className="outer-control" type="email"  
                            name='correo'
                            value={body.correo}
                            onChange={handleChange}  />
                        <Form.Label className='outer-text'>Rut</Form.Label>
                        <Form.Control className="outer-control" type="text"  
                            name='rut'
                            value={body.rut}
                            onChange={handleChange}  />


                        <Form.Label className='outer-text'>Contraseña</Form.Label>
                        <Form.Control type="password" className="outer-control" 
                            name='clave'
                            value={body.clave}
                            onChange={handleChange} />



                        <Form.Label className='outer-text'>Cargo</Form.Label>
                        <Form.Select type="text" className="outer-control"  
                             name='id_cargo'
                             value={body.id_cargo}
                             onChange={handleChange}  >
                            <option value={false} >Seleccione el cargo del usuario</option>
                            <option value="1">Usuario de direccion</option>
                            <option value="2">Subalterno de direccion</option>
                            <option value="3">Administrador</option>
                        </Form.Select>
                    </Form.Group>

                    <button variant="outline-success" type="submit" className="botoncito1 button" >
                        Crear usuario
                    </button>{' '}

                </div>
            </Form>
        </div>


    );
};







export default CrearCuenta;