import { useState, useEffect ,useContext} from 'react';
import './App.css';
import Axios from 'axios'
import { Nav, Navbar, DropdownButton, ButtonGroup, Dropdown, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route,Link ,useNavigate,useResolvedPath,useMatch, Navigate} from "react-router-dom";
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
import HistorialSolicitud from './components/historialSolicitud';
import ListadoUsuarios from './components/listadoUsuarios';
import PuntosSolicitud from './components/puntosSolicitud';
import ResumenJuicios from './components/crearPunto';
import { DirContext, DireccionContext } from './context/dirContext';
import NuevoIntento from './components/nuevoIntento';
const App = () => {
  const history = useNavigate()
  const {direccion,setDireccion} = useContext(DireccionContext)
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

    Axios.get('http://localhost:3110/Auth', {
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
      <DirContext >
      {/*console.log(userState.correo,userState.rut,userState.estado)*/}
      

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
                    {userState.cargo === 1 && (<CustomLink className="btn btn-light rounded border me-3 pe-4 ps-4 fs-6   "  to="/historialsolicitud">Solicitudes de usuario</CustomLink>)}
                    {userState.cargo === 1 && ( <Link className="btn btn-light rounded border me-3 pe-4 ps-4 fs-6   " to="/vistageneral" >Inicio</Link>)}
                    {userState.cargo === 2 && (<Link className="btn btn-light rounded border me-3 pe-4 ps-4 fs-6   " to="/inicio" >Solicitar Subalterno</Link>)}
                    <Link className="btn btn-light rounded border me-3 p    e-3 ps-3 fs-6   " to="/login" onClick={logOut} >Cerrar sesión</Link>
                  </>
                  : <></>}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </div>
        <Routes>
        {userState.cargo === 1 && (<Route  path="/crearusuario" element={<CrearUsuario/>} />)}
      {userState.cargo === 1 && (<Route  path="/modificarusuario" element={<ModificarUsuario/>} />)}
      {userState.cargo === 1 && (<Route  path="/historialsolicitud" element={<HistorialSolicitud/>} />)}
      {userState.cargo === 1 && ( <Route  path="/listadodirecciones" element={<ListadoDirecciones/>} />)}
      {userState.cargo === 1 && ( <Route  path="/listadousuarios" element={<ListadoUsuarios/>} />)}
      {userState.cargo === 1 && ( <Route  path="/usuariosdireccion" element={<UsuarioDireccion/>} /> )}


      {userState.cargo === 1 && ( <Route  path="/puntossolicitud" element={<PuntosSolicitud/>} /> )}

      {userState.cargo === 1 && ( <Route  path="/vistageneral" element={<VistaGeneral/>} /> )}
      {userState.cargo === 1 && ( <Route path="/subidaArchivo" element={<ResumenJuicios/>} /> )}

      {userState.cargo === 2 && ( <Route  path="/solicitarsubalterno" element={<SolicitarSubAlterno/>} /> )}
      {(userState.cargo === 2 || userState.cargo === 3 ) && ( 
      <>
      <Route path="/bandejaintentos" element={<BandejaIntentos/>} /> 
      <Route path="/nuevointento" element = {<NuevoIntento/>}/>
      
      
      </>)}
      
 
      {(userState.cargo ===0 && useState.cargo !== 1 && useState.cargo !== 2 && useState.cargo !== 3) && (<Route path='/*' element={<InicioSesion/>}></Route>)}
          {/*<PrivateRoutes></PrivateRoutes>*/}
          
   

        </Routes>
        </DirContext>
    </UserContext.Provider>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
export default App;
