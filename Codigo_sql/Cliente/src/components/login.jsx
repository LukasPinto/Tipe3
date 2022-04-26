/*import React, { useState ,useContext} from 'react';
import { Form, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router';
import { UserContext } from '../context/userContext';
import loginService from '../services/login.service';*/
import './css/login.css';

//import React, { useRef } from 'react';
export default function IncioSesion(props) {
  return (
   

    <div className='container-fluid h-100'>

    
    <div className="row pb-0 pt-0 ">
    <div className='col   ps-0 pe-0 mt-0 mb-0  bg-dark'>
      </div>
      <div className="col ps-0 pe-0  mt-5 ">
        <div className="card pt-5 ">
          <div className="card-header text-center">
            <h3>💻Iniciar Usuario Municipal</h3>
          </div>
          <div className="card=body">
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

              />
            </div>
            <button

              className="btn btn-info btn-lg btn-lock "> Acceder </button>



          </div>
        </div>

      </div>
      

    </div>
    </div>
    

  )

}


/*const InicioSesion = () => {
const history=useHistory()
const [body,setBody] =
useState( {
  correo:'',
  clave:''
} );
const {setUserState}=useContext(UserContext)
const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(body.correo,body.clave)
  const correo= body.correo
  const clave =body.clave
  loginService({correo,clave}).then((response)=>{
    if(response.data.error){
      alert(response.data.error)
    }else{

      localStorage.setItem("token",response.data.token)

      setUserState({
        correo:response.data.correo,
        rut:response.data.rut,
        estado:true
      })
      history.push('/')
    }
    //history.push("/Inicio")
  }).catch=(error)=>{
    console.log(error)
  }
}
const handleChange =async (e)=>{
     await setBody({
      ...body,
      [e.target.name]: e.target.value
    })
    console.log(body.correo,body.clave)
  }
return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control  type="email" name="correo" placeholder="ejemplo@homtail.com" value={body.correo} onChange={handleChange}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3"  controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" name="clave" value={body.clave} onChange={handleChange}/>
          </Col>
        </Form.Group>
        <button className="btn btn-primary btn-lg" type="submit" >iniciar Sesion</button>
      </Form>

    </React.Fragment>
  );
};*/


