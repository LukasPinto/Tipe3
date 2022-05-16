import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import "./css/historialSolicitud.css"
import { useLocalStorage } from './custom/useLocalStorage';
import solicitudes from '../services/solicitudes.sevice';
import { Link } from 'react-router-dom';
import listaPuntos from '../services/listaPuntos.service'
const HistorialSolicitud = (props) => {
  const [local, setLocal] = useLocalStorage('direccion', '')
  const [actualizar, setActualizar] = useState(true)
  const [traerDatos, setTraerDatos] = useState(true)
  const [listaSolicitud, setLista] = useState([])
  const [estado, setEstado] = useLocalStorage('estado', '')
  useEffect(() => {
    solicitudes(local)
      .then((Response) => {

        setLista(Response.data)
        setActualizar(!actualizar)
      }).
      catch(() => {
        alert("error")
      })
  }, [traerDatos])

  const handleClick = async(e) => {

    setLocal(e.target.value)
    await listaPuntos(e.target.value)
    .then((Response) => {
        setEstado(Response.data[0].id_solicitud)

      }).
      catch((err) => {

        setEstado("false")

      })   

}

  return (
    <>

      <div>
        <p class="cajita1">Historial de solicitud</p>
      </div>
      <div>
        <Button className='botoncito2'>ORDENAR</Button>{' '}
      </div>
      <div className="bg-secondary"  >
        <Table striped bordered hover size="sm">
          <thead>
            <tr>

              <th>Fecha inicio</th>
              <th>Fecha termino</th>
              <th>Expediente</th>
              <th>Estado</th>
              <th>Detalle de solicitud</th>

            </tr>
          </thead>
          <tbody>

            {listaSolicitud.map((value, key) => {
              return <>
                <tr>
                  <td>{value.fecha_inicio.substring(0,10)}</td>
                  <td>{value.fecha_termino ? <></>:value.fecha_termino}</td>
                  <td>Cuenta publica de {value.nombre_direccion} - {value.fecha_inicio.substring(0,10)} </td>
                  <td>{value.estado.toUpperCase()}</td>
                  <td><Link to={{ pathname: "/puntossolicitud" }} ><Button variant="primary" name="id_direccion" value={value.id_direccion} onClick={handleClick} >Ver</Button></Link>{' '}</td>
                </tr>
              </>
            })}

          </tbody>
        </Table>
      </div>
      <div> 
        <Button className='botoncito2'>Crear expediente</Button>{' '}
        <Button className='botoncito2'>Descargar todos los documentos</Button>{' '}
      </div>
    </>

  );
};







export default HistorialSolicitud;