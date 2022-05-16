import React from 'react';
import { Form, btn, Table, Badge } from 'react-bootstrap';
import "./css/bandejaIntentos.css"

const BandejaIntentos = (props) => {
    return (
        <>
        <div className ="contenedor04-2">   
            <h3 className="outer-text02">Bandeja de intentos</h3>
            </div>

            <div className ="fondoTabla04"> 
            <btn type="button" className="botoncito04 button" >
                        Ordenar
                </btn>               
 
            <div>
              <Table className ="fondoTabla04"striped bordered hover size="s">
                <thead>
                  <tr>
                    <th>Nombre del punto</th>
                    <th>Numero de intentos</th>
                    <th>Observaciones</th>
                    <th>Estado</th>
                    <th>Detalle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Resumen de juicios</td>
                    <td>1</td>
                    <td>Se envian archivos solicitados</td>
                    <td>Rechazados</td>
                    <td><btn type="button" className="botoncito04 button" >VER</btn>{' '}</td>
                  </tr>
                  <tr>
                    <td>Resumen de juicios</td>
                    <td>2</td>
                    <td>Se vuelve a enviar archivos solicitados</td>
                    <td>Pendiente</td>
                    <td><btn type="button" className="botoncito04 button" >VER</btn>{' '}</td>
                  </tr>
                  
                </tbody>
              </Table>
            </div>
           
            <btn type="button" className="botoncito04-2 button" >Nuevo intento</btn>{' '}
            </div>
        </>
        
    );
};







export default BandejaIntentos;