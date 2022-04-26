import {  useState ,useEffect} from 'react';
import './App.css';
import Axios from 'axios'
import { Nav, Navbar,  DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import InicioSesion from './components/Login';
import { UserContext } from './context/userContext'; 
import CrearUsuario from './components/crearCuenta'
import ModificarUsuario from './components/modificarCuenta'


const App = () => {

const [userState,setUserState] = useState({
    correo:"",
    rut:0,
    estado:false
  })


const logOut = ()=>{
  localStorage.removeItem('token')
  setUserState({
    correo:"",
    rut:0,
    estado:false
   })
 
}

useEffect(()=>{
  Axios.get('http://localhost:3001/Auth',{headers:{
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },}).then((response)=>{
    if(response.data.error) {
      setUserState({
       correo:"",
       rut:0,
       estado:false
      })
    }else{
      setUserState({
        correo:response.data.correo,
        rut:response.data.rut,
        estado:true
      })
      
    }
  })
},[])


  return (

    <UserContext.Provider value={{userState,setUserState}}>
      {/*console.log(userState.correo,userState.rut,userState.estado)*/}
      
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark"
            sticky="top" expand="sm" collapseOnSelect className="ps-5  fs-5">

            <Navbar.Brand >
              HOME
            </Navbar.Brand>

            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse className="justify-content-end pe-5">
              <Nav  >
                <Link className="btn btn-light rounded border me-3 pe-4 ps-4 fs-6   " to="/inicio" >Inicio</Link>

                <DropdownButton as={ButtonGroup} title="Usuario" id="bg-nested-dropdown" className="  rounded border " variant="light">
                  
                    <>
                      <Dropdown.Item  >
                        <Link to="/login" className="text-decoration-none" >iniciar sesion</Link>
                      </Dropdown.Item>
                      </>
                       
                       
                      
                </DropdownButton>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="content">
          </div>
        </div>

        <Switch>
         
          <Route exact path="/crearusuario" component={CrearUsuario}></Route>
          <Route exact path="/" component={InicioSesion}></Route>
          <Route exact path="/modificarusuario" component={ModificarUsuario}></Route>

         
         
   

         
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}
export default App;
/*
 const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [rut, setRut] = useState(0);
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [mascotas, setMascotas] = useState([]);
    Axios.post('http://localhost:3001/add/cliente',{
        rut: rut,
        pnombre: nombre,
        papellido: apellido,
        email: correo,
        clave: clave

    }).then(()=>{
      console.log("DATOS ENVIADOS")
    });
  }
  const mostrarMascotas = () =>{
    Axios.get('http://localhost:3001/mascotas').then((respuesta)=>{
      setMascotas(respuesta.data)
    })
  }



<div className="App">
      <div className>
        <label>Primer nombre</label>
        <input type="text" onChange={(evento)=>{
          setNombre(evento.target.value);
        }}/>
        <label>Primer apellido</label>
        <input type="text" onChange={(evento)=>{
          setApellido(evento.target.value);
        }}/>
        <label>Rut</label>
        <input type="number" onChange={(evento)=>{
          setRut(evento.target.value);
        }}/>
        <label>correo electronico</label>
        <input type="email" onChange={(evento)=>{
          setCorreo(evento.target.value);
        }}/>
        <label>Contraseña</label>
        <input type="password" onChange={(evento)=>{
          setClave(evento.target.value);
        }}/>
        <button onClick={agregarEmpleado}>Agregar empleado</button>
        <div>
        <button onClick={mostrarMascotas}>Mostar mascotas</button>
        {mascotas.map((val,key)=>{
          return <div>
          <h3>{val.nombre_mascota}</h3>

          <h3>{val.especie} </h3>
          <h3>{val.raza}</h3>
          <h3>{val.rut_cliente}</h3>
          <h3>{val.edad}</h3>
          <h3>{val.peso}</h3>
          <h3>{val.id_mascota}</h3>
          </div>
        })}
        </div>
      </div>
    </div> */