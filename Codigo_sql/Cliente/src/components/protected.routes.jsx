import React from "react"
import { Route, Redirect, BrowserRouter, Routes } from "react-router-dom"
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
import HistorialSolicitud from "./historialSolicitud";
import PuntosSolicitud from "./puntosSolicitud";
import ListadoUsuarios from "./listadoUsuarios";
import ResumenJuicios from "./crearPunto";
import { DireccionContext, DirContext } from "../context/dirContext";
const PrivateRoutes = (props) => {
  const { userState } = useContext(UserContext)
  const {direccion,setDireccion} = useContext(DireccionContext)
  console.log(userState)
  return (<BrowserRouter>
    <Routes>
      <DirContext>
    
      </DirContext>
    </Routes>
  </BrowserRouter>
  );
};

export default PrivateRoutes;