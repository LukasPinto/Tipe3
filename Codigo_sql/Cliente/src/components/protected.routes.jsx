import React from "react"
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import CrearUsuario from "./crearCuenta";
import ModificarUsuario from "./modificarCuenta";
import ListadoDirecciones from "./listadoDirecciones";
import UsuarioDireccion from "./usuariosDireccion";
import InicioSesion from "./login";
import VistaGeneral from "./vistaAdmin";
import SolicitarSubAlterno from "./solicitarSubAlterno";
import BandejaIntentos from "./bandejaIntentos";
const PrivateRoutes = (props) => {
  const { userState } = useContext(UserContext)
  console.log(userState)
  return (<BrowserRouter>
    <Switch>
      {userState.cargo === 1 && (<Route exact path="/crearusuario" component={CrearUsuario} />)}
      {userState.cargo === 1 && (<Route exact path="/modificarusuario" component={ModificarUsuario} />)}
      
      {userState.cargo === 1 && ( <Route exact path="/listadodirecciones" component={ListadoDirecciones} />)}
      {userState.cargo === 1 && ( <Route exact path="/usuariosdireccion" component={UsuarioDireccion} /> )}
      {userState.cargo === 1 && ( <Route exact path="/usuariosdireccion" component={UsuarioDireccion} /> )}
      
      {userState.cargo === 2 && ( <Route exact path="/vistageneral" component={VistaGeneral} /> )}
      {userState.cargo === 3 && ( <Route exact path="/vistageneral" component={VistaGeneral} /> )}
      {userState.cargo === 2 && ( <Route exact path="/solicitarSubAlterno" component={SolicitarSubAlterno} /> )}
      {userState.cargo === 2 && ( <Route exact path="/bandejaIntentos" component={BandejaIntentos} /> )}
      {userState.cargo === 3 && ( <Route exact path="/bandejaIntentos" component={BandejaIntentos} /> )}
      {(userState.cargo ===0) && (<Route to="/login" component={InicioSesion} />)}
      
      
    </Switch>
  </BrowserRouter>
  );
};
/*
const PrivateRoute = ({ component: Component, estado, ...rest }) => {
  const { userState, setUserState } = useContext(UserContext)
  return (
    <Route
      {...rest}
      render={(props) =>
        userState.cargo ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/not-found", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
*/
export default PrivateRoutes;