import React, { useState } from 'react';
import { Form, Button, Table, Badge } from 'react-bootstrap';
import "./css/subidaArchivo.css"


const ResumenJuicios = (props) => {
    const [archivos, setArchivos]=useState([]);
    
    const subirArchivos=async e=>{
       
        await setArchivos([...archivos,...e.target.files])
        //console.log(e.target.files)
    }
   
    return (
    <>
    {console.log(archivos)}
        <div>
            <p class="cajita1">Subida de Archivos</p>
        </div>
        <div className='caja2'>
            <Form>
                <Form.Label>Titulo del Punto</Form.Label>
                <Form.Control className="outer-control" type="text" name='titulo' />
                <Form.Label>Descripcion</Form.Label>
                <Form.Control className="outer-control" type="text" name='titulo' />
                <Form.Label>Tipo de archivo</Form.Label>
                <Form.Control className="outer-control" type="text" name='titulo' />
                <Form.Label>Tipo de archivo</Form.Label>

                
                    
                    <Form.Control className="drop-area" type="file"   multiple placeholder="Arrastre o suba un archivo" name="archivo"  onChange={subirArchivos}> 
                    </Form.Control>
 
                <button variant="outline-success" type="submit" className="botoncito1 button" multiple>Crear punto</button>
            
            </Form>
            
        </div>

                
               
              
            
            
             


       
    </>
    );
 
};
export default ResumenJuicios;