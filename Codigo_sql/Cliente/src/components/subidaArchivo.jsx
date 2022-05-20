import React, { useEffect, useState, useRef } from 'react';
import { Form, Button, Table, Badge } from 'react-bootstrap';
import CrearPunto from '../services/crearPunto.service';
import "./css/subidaArchivo.css"


const ResumenJuicios = (props) => {
    const [archivos, setArchivos] = useState([]);
    const [drag, setDrag] = useState(null)
    const fileRef1 = useRef();
    const fileRef2 = useRef()
    const [datosSubida,setDatosSubida] = useState()
    const subirArchivos = async e => {
        console.log(e.target.files)
        await setArchivos([...archivos, ...e.target.files])

    }

    const handleChange = async e =>{
        await setDatosSubida({
            ...datosSubida,
            [e.target.name] : e.target.value
        }) 
    }
    const dragStarted = e => {
        if (drag) {
            setDrag(false)
        }
        else {
            setDrag(true)
        }



    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setDrag(null)
        }, 500)

        return () => clearTimeout(timer)
    }, [drag])



    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData()
        for (let clave in datosSubida){
            console.log({[clave]:datosSubida[clave]})
            data.append([clave],datosSubida[clave])
         
        }
        
        for (let file of archivos){
            data.append( 'files',file )
        }
       
        
        console.log(data)
        await CrearPunto(data)
            .then((Response) => {
                console.log(Response)
                if (Response.data) {
                    console.log(Response)
                }
            })

            .catch(() => {
                alert("error")
            })

    }
    return (
        <>
            {console.log(datosSubida)}
            <div className="container" onDragOverCapture={dragStarted} >
                <div >
                    <p class="cajita1">Subida de Archivos</p>
                </div>
                <div className='caja2'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Label>Titulo del Punto</Form.Label>
                        <Form.Control className="outer-control" type="text" name='titulo' onChange={handleChange}/>
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control className="outer-control" type="text" name='Descripcion' onChange={handleChange}/>
                        <Form.Label>Tipo de archivo</Form.Label>
                        <Form.Control className="outer-control" type="text" name='tipo de archivo' />
                        <Form.Label>Plantilla/Ejemplo</Form.Label>

                        {(drag == null) ? <>

                            <div className='container'>
                                <Form.Control className="drop-area " placeholder='Suba un archivo o arrastre aqui' disabled onChange={subirArchivos}  ></Form.Control>
                                <Form.Control className="drop-area " multiple type='file' name="archivo" placeholder='Suba un archivo o arrastre aqui' onChange={subirArchivos} ref={fileRef1} hidden></Form.Control>
                                <button className="botoncito1 button" variant="outline-success" onClick={(e) => {
                                    e.preventDefault()
                                    fileRef1.current.click()
                                
                                }}>
                                    Custom File Input Button
                                </button>
                            </div>
                        </> : <>
                            <div className='container'>
                                <Form.Control className="drop-area" type="file" multiple name="archivo" onChange={subirArchivos} ref = {fileRef2}  />
                                
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