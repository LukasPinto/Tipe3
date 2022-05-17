import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios'
import { Nav, Navbar, DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link ,useHistory} from "react-router-dom";
import InicioSesion from './components/login';
import { UserContext } from './context/userContext';
import CrearUsuario from './components/crearCuenta'
import ModificarUsuario from './components/modificarCuenta'
import UsuarioDireccion from './components/usuariosDireccion'
import ListadoDirecciones from './components/listadoDirecciones'
import VistaGeneral from './components/vistaAdmin'
import SolicitarSubAlterno from './components/solicitarSubAlterno'
import BandejaIntentos from './components/bandejaIntentos'
import PrivateRoutes from './components/protected.routes'

const App = () => {
  const history = useHistory()
  const [userState, setUserState] = useState({
    correo: "",
    rut: 0,
    id: 0,
    cargo: 0,
    estado: false
  })


  const logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('solicitud')
    localStorage.removeItem('direccion')
    localStorage.removeItem('estado')
    setUserState({
      correo: "",
      rut: 0,
      id: 0,
      cargo: 0,
      estado: false
    })

  }

  useEffect(() => {

    Axios.get('http://localhost:3001/Auth', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((response) => {
      if (!response.data.error) {
        console.log(response.data)
        setUserState({
          correo: response.data.correo,
          rut: response.data.rut,
          id: response.data.id,
          cargo: response.data.cargo,
          estado: true
        })
      }
    })
  }, [])


  return (

    <UserContext.Provider value={{ userState, setUserState }}>
      {/*console.log(userState.correo,userState.rut,userState.estado)*/}

      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark"
            sticky="top" expand="sm em" collapseOnSelect className="ps-5  fs-5 ">

            <Navbar.Brand >
              Municipalidad de cartagena
            </Navbar.Brand>

            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse className="justify-content-end pe-2">
              {/*falta colocar las url de direccionamiento solamente */}
              <Nav  >
                {(userState.cargo) ?

                  <>
                    {userState.cargo === 1 && (<Link className="btn btn-light rounded border me-3 pe-4 ps-4 fs-6   " to="/inicio" >Solicitudes de usuario</Link>)}
                    {userState.cargo === 1 && ( <Link className="btn btn-light rounded border me-3 pe-4 ps-4 fs-6   " to="/vistageneral" >Inicio</Link>)}
                    {userState.cargo === 2 && (<Link className="btn btn-light rounded border me-3 pe-4 ps-4 fs-6   " to="/inicio" >Solicitar Subalterno</Link>)}
                    <Link className="btn btn-light rounded border me-3 p    e-3 ps-3 fs-6   " to="/login" onClick={logOut} >Cerrar sesión</Link>
                  </>
                  : <></>}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </div>
        <Switch>

          <PrivateRoutes></PrivateRoutes>



        </Switch>
      </Router>
    </UserContext.Provider>
  )
}
export default App;
