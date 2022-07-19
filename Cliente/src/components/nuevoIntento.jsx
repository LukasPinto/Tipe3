import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Form, Button, Table, Badge, FormGroup } from 'react-bootstrap';
import SubirPlantilla from '../services/subirPlantilla.service';
import CrearPunto from '../services/crearPunto.service';
import "./css/subidaArchivo.css"
import DatosPunto from '../services/datosPunto.service';
import documento from '../assets/img/documento.png'
import ListadoPlantilla from '../services/listadoPlantilla.service';
import DescargarPlantilla from '../services/descargarPlantilla.service';
import { useLocalStorage } from './custom/useLocalStorage';
import FileDownload from 'js-file-download'
const NuevoIntento = (props) => {
    const [archivos, setArchivos] = useState([]);
    const [drag, setDrag] = useState(null)
    const fileRef1 = useRef();
    const fileRef2 = useRef()
    const [datosSubida,setDatosSubida] = useState()
    const [punto,setPunto] = useState([])
    const [plantillas,setPlantilla] = useState([])
    const files = new FormData()
    const [aux,setAux] = useLocalStorage('plantilla','')
    const subirArchivos = async e => {
        console.log(e.target.files)
        await setArchivos([...archivos, ...e.target.files])
        await console.log(archivos)

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

    useEffect(async ()=>{
        await DatosPunto(window.localStorage.getItem('punto').replace(/['"]+/g, '')).then((respuesta)=>{
            if(respuesta.data){
                setPunto(respuesta.data)
            }
        }).catch(error=>{
            alert("error")
        })
       
    },[])
    useEffect(async ()=>{
      await ListadoPlantilla(window.localStorage.getItem('punto').replace(/['"]+/g, ''))
      .then((respuesta)=>{
        if(respuesta.data){
            setPlantilla(respuesta.data)    
            
        }
      }).catch(error=>{
        alert("error") 
      })
      //await console.log(plantillas) 
    },[])
    const handleSubmit = async (e) => {
        let id_punto = ''
        e.preventDefault()
        
        for (let clave in datosSubida){
            //console.log({[clave]:datosSubida[clave]})
            files.append([clave],datosSubida[clave])
         
        }
        
        for (let file of archivos){
            files.append( 'files',file )
        }
        const ahora = new Date()
        const data = {
            id_solicitud: localStorage.getItem('solicitud').replace(/['"]+/g, ''),
            ...datosSubida,
            inicio:`${ahora.getFullYear()}/${ahora.getMonth()+1}/${ahora.getDate()}`

        }
    
       await CrearPunto(data).then((response)=>{
        console.log(response)
        if(response.data){
            

            id_punto = response.data['LAST_INSERT_ID']
        }
       }).catch(()=>{
        alert("error")
       })
       await SubirPlantilla(files,id_punto)
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
    const handleClickPlantilla = async (e) =>{
        
       
        DescargarPlantilla(e.target.value).then((respuesta)=>{
            FileDownload(respuesta.data,e.target.value)
        }).catch(err=>{
            alert('error')
        })
        
    }
    return (
        
        <>
            {console.log(datosSubida)}
            <div className="container" onDragOverCapture={dragStarted} >
                <div >
                    <p class="cajita1">Crear punto</p>
                </div>
                <div className='caja2'>
                    <Form onSubmit={handleSubmit}>
                        {punto.map((value,key)=>{
                            return(
                                <>
                                <Form.Label>Titulo del Punto</Form.Label>
                        <Form.Control className="outer-control" type="text" name='titulo' onChange={handleChange} placeholder={value.titulo} readOnly/>
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control className="outer-control" type="text" name='Descripcion' onChange={handleChange} placeholder={value.descripcion} readOnly/>
                        <Form.Label>Plantillas</Form.Label> 
                        <div className='container'>
                                <div className="drop-area" readOnly > 
                                {plantillas.map((llave,valor)=>{
                                            
                                            return(
                                                <>
                                                
                                                <div className='container' style={{ maxWidth: '100%',maxHeight:'100%' }}   ><img src={documento} style={{ maxWidth: '10%' }} ></img>{llave.dir_archivo} <Button size='lg' placeholder='descargar' variant='primary' value={llave.dir_archivo}onClick={handleClickPlantilla}></Button></div>
                                                </>
                                            )
                                        })} 
                                </div>
                                
                            </div>
                        <Form.Label>Subir Archivo</Form.Label>  
                                </>

                            )
                        })}
                        

                        {(drag == null) ? <>

                            <div className='container'>
                           
                                <div className="drop-area " placeholder='Suba su archivo' disabled onChange={subirArchivos}      >
                                {archivos.map((value,key)=>{
                                            
                                            return(
                                                <>
                                                <div className='container' style={{ maxWidth: '40%' }}> <img src={documento} style={{ maxWidth: '10%' }} ></img>{value.name} </div>
                                                </>
                                            )
                                        })} 
                                </div>
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
export default NuevoIntento;