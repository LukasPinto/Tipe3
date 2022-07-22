import React from 'react';
import "./css/bandejaIntentos.css"
import { Form, Button, Table, Accordion, Card,Container } from 'react-bootstrap';
import "./css/historialSolicitud.css"
import "./css/puntosSolicitud.css"
import {  Link ,useNavigate} from 'react-router-dom';
import listadoPuntos from '../services/puntosDireccion.service';
import { useState, useEffect, useContext } from 'react';
import PuntosUsuario from '../services/PuntosUsuario.service';
import { useLocalStorage } from './custom/useLocalStorage';
import listaPuntos from '../services/listaPuntos.service';
import { UserContext } from '../context/userContext';
import Intentos from '../services/intentos.service';
const BandejaIntentos = (props) => {
  const [punto, setPunto] = useLocalStorage('punto', '')
  const [intento_id, setIntentoId] = useLocalStorage('intento', '')
  const [puntos, setPuntos] = useState([])
  const [intentos, setIntentos] = useState([])
  const [actualizar, setActualizar] = useState(true)
  const [traerDatos, setTraerDatos] = useState(true)
  const { userState, setUserState } = useContext(UserContext)
  const history = useNavigate()
  useEffect(async () => {

    await PuntosUsuario(userState.id).then((Response) => {
      setPuntos(Response.data)


      setActualizar(!actualizar)

    }).catch(() => {
      alert("error")
    })


  }, [])

  useEffect(async () => {
    const aux = []
    for (let punto in puntos) {

      await Intentos(puntos[punto].id_punto)
        .then((Response) => {
      
          aux.push(Response.data)

        }).catch(() => {
          alert("error")
        })

    }
    await setIntentos(aux)
  
  }, [actualizar])


const handleClickPunto = (e) =>{
  setPunto(e.target.value)
  history('/nuevointento')
}

  return (
    <>    <Container className='fondoBlanco11' maxWidth="sm">
      <div>
        <h3 className="margen11">Puntos de la solicitud</h3>
      </div>
      <div>
        <Button variant='success'  className="margen11">ORDENAR</Button>{' '}
      </div>
     
        <Table striped bordered hover size="sm">
          <thead>
            <tr>

              <th>Puntos</th>
              <th>Descripcion del punto</th>
              <th>Historial</th>
              <th>Fecha inicio</th>
              <th>Fecha termino</th>
              <th>Estado</th>

            </tr>
          </thead>
          <tbody>

            {puntos.map((value, key) => {
              return (<>
                <tr>
                  <td>{key + 1}</td>
                  <td>{value.titulo}</td>


                  <td ><Accordion variant="success" alwaysOpen >
                    <Accordion.Item eventKey="0"variant="success" >
                      <Accordion.Header variant="success" >Ver</Accordion.Header>
                      <Accordion.Body variant="success">

                        <Table variant="light"striped bordered hover size="s">
                          <thead>
                            <tr>
                              <th>Numero Intento</th> 
                              <th>Estado</th>
                              <th>Respuesta</th>
                              <th>Ver detalle</th>
                            </tr>
                          </thead>
                          <tbody>
                            {intentos.map((val, k) => {
                              return (
                                val.map((valor, llave) => {

                                  return (

                                    <>
                                      {valor.id_punto === value.id_punto && (<tr>
                                        <td>{llave+1}</td>
                                        <td>{valor.estado}</td>
                                        <td>{valor.descripcion} </td>
                                        <td><Button variant="success" type="button" >Ver</Button>{' '}</td>
                                      </tr>)}

                                    </>)
                                })

                              )
                            })}

                            
                            <tr><Button variant="success" value={value.id_punto} onClick={handleClickPunto}>Crear nuevo intento</Button></tr>

                          </tbody>
                        </Table>

                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion></td>
                  <td>{value.inicio.substring(0, 10)}</td>
                  <td>{(value.termino !== null) && (value.termino.substring(0, 10))}</td>
                  <td>{value.estado}</td>
                </tr>
              </>)
            })}
          </tbody>
        </Table>




  
     


      <div>
        <Link to={{ pathname: "/subidaarchivo" }}>{' '}</Link>
      </div>






      </Container>
    </>

  );
};

export default BandejaIntentos;