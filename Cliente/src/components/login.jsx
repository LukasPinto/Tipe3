/*import React, { useState ,useContext} from 'react';
import { Form, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router';
import { UserContext } from '../context/userContext';
import loginService from '../services/login.service';*/
import './css/login.css';
import { Container} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { UserContext } from '../context/userContext';
import { useState, useContext } from 'react';
import loginService from '../services/login.service';
import './css/login.css';
import React from 'react';
import img1 from './../assets/img/cartagena.jpg';



//import React, { useRef } from 'react';
/*const App =_=>{
  return(
    <div>
      <img src={muni} />
    </div>
  )
};*/
export default function IncioSesion(props) {
  const [body, setBody] =
    useState({
      correo: '',
      clave: ''
    });

  const { userState, setUserState } = useContext(UserContext)
  const correo = body.correo
  const clave = body.clave
  const history = useNavigate()
  const handleChange = async (e) => {
    await setBody({
      ...body,
      [e.target.name]: e.target.value
    })
    console.log(body.correo, body.clave)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(body.correo, body.clave)
    const correo = body.correo
    const clave = body.clave
    loginService({ correo, clave }).then((response) => {
      if (response.data.error) {
        alert(response.data.error)
      } else {
        console.log(response.data)
        console.log(response.data.id_empl_direccion)
        localStorage.setItem("token", response.data.token)
        setUserState({
          correo: response.data.correo,
          rut: response.data.rut,
          id: response.data.id,
          cargo: response.data.cargo,
          estado: true
        })
        console.log(userState.cargo)
        if(response.data.cargo === 1){
          history('/vistageneral')
        }
        else {
          history("/bandejaintentos")
        }
        
      }
      //history.push("/Inicio")
    }).catch = (error) => {
      console.log(error)
    }
  }

  return (
    <Container className='fondoBlanco2' maxWidth="sm">
    <div className='container-fluid h-100'>
      <div className="row pb-0 pt-0 ">
        <div className='col ps-0 pe-0 mt-0 mb-0 '>
          <img className='tamImagen' src={img1} />
        </div>
            
              <div className="centrado">
                
             
                  <h3 className="row justify-content-center">💻Iniciar Usuario Municipal</h3>
                 
                <div className="tamTodo">
                  <form onSubmit={handleSubmit}>
                    <div className="input-group mb-4 ">
                      <div className="input-group-prependc">
                        <span className="input-group-text" id="basic-addon1">
                          📥
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Correo@ejemplo.com"
                        aria-label="Username"
                        aria-describedby="basic-addon1 "
                        name='correo'
                        value={body.correo}
                        onChange={handleChange}

                      />
                    </div>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          🔒
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        aria-label="Clave"
                        aria-describedby="basic-addon2"
                        name="clave"
                        value={body.clave}
                        onChange={handleChange}

                      />
                    </div>
                    <button className="btn btn-success btn-lg btn-lock " type="submit" > Acceder </button>
      
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      );
}
