import React, { useState } from 'react';
import { Form, Button, Table, Badge } from 'react-bootstrap';
import "./css/subidaArchivo.css"


const ResumenJuicios = (props) => {
    const [archivos, setArchivos]=useState(null);
    const subirArchivos=e=>{
    }
   
    return (
    <>
        <div>
            <p class="cajita1">Subida de Archivos</p>
        </div>
        <div className='caja2'>
            
            <h4>Titulo del Archivo:  <input type="text" name="titulo" width="200px"/></h4>
            <h5>Descripcion del Archivo: <input className ="t1" name="descripcion"/></h5>
        </div>
        
        <body>
            <h2 className='col col-md-3 row justify-content-center'>Adjuntar Archivos: </h2>
                <div className="drop-area">
                
                    <h2> Arrastra</h2>
                    <span>O</span>
                    <input type="file" name id="input-file" multiple onChange={(e)=>subirArchivos(e.targaet.files)} />
                </div>
               
              
            
            
             
        </body>

       
    </>
    );
 
};
export default ResumenJuicios;