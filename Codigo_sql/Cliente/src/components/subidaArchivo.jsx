import React, { useEffect, useState,useRef} from 'react';
import { Form, Button, Table, Badge } from 'react-bootstrap';
import "./css/subidaArchivo.css"


const ResumenJuicios = (props) => {
    const [archivos, setArchivos]=useState([]);
    const [drag,setDrag] = useState(null)
    const fileRef = useRef();
    const subirArchivos=async e=>{

        await setArchivos([...archivos,...e.target.files])
        //console.log(e.target.files)
    }
    const dragStarted= e=>{
        if(drag){
            setDrag(false)
        }
        else{
            setDrag(true)
        }
        
   
        
    }

    useEffect(() => {
        const timer = setTimeout(() => {
          setDrag(null)
        }, 500)
    
        return () => clearTimeout(timer)
      }, [drag])
 
    return (
    <>
    {console.log(archivos)}
        <div className="container"  onDragOverCapture={dragStarted} >
        <div >
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

                {(drag == null)? <>
                
                    <div className='container'>
                    <Form.Control className="drop-area "   placeholder='Suba un archivo o arrastre aqui' disabled onChange={subirArchivos}  ></Form.Control>
                    <Form.Control className="drop-area " multiple type='file'  name="archivo" placeholder='Suba un archivo o arrastre aqui'  onChange={subirArchivos} ref={fileRef} hidden></Form.Control>
                    <button className="botoncito1 button" variant="outline-success" onClick={(e) => {
                        e.preventDefault()
                        fileRef.current.click()}}>
        Custom File Input Button
      </button>
                    </div>
                </>:<>
                <div className='container'>
                    <Form.Control className="drop-area" type="file"   multiple  name="archivo" onChange={subirArchivos}  />
                    </div>
                
                </>}
                    
 
                <button variant="outline-success" type="submit" className="botoncito1 button" >Crear punto</button>
            
            </Form>
            
        </div>
      
        </div>

              
            
            
             


       
    </>
    );
 
};
export default ResumenJuicios;