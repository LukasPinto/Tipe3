-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-07-2022 a las 07:40:16
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tipe3`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivo_intento`
--

CREATE TABLE `archivo_intento` (
  `id_archivo_intento` int(11) NOT NULL,
  `id_intento_solicitud` int(11) NOT NULL,
  `dir_archivo_intento` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargo`
--

CREATE TABLE `cargo` (
  `id_cargo` int(11) NOT NULL,
  `descripcion` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cargo`
--

INSERT INTO `cargo` (`id_cargo`, `descripcion`) VALUES
(1, 'admin'),
(2, 'encargado direccion'),
(3, 'subalterno direccion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccion_municipal`
--

CREATE TABLE `direccion_municipal` (
  `id_direccion` int(11) NOT NULL,
  `nombre_direccion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `direccion_municipal`
--

INSERT INTO `direccion_municipal` (`id_direccion`, `nombre_direccion`) VALUES
(1, 'sollicitudin orci'),
(2, 'viverra. Maecenas'),
(3, 'mauris ipsum'),
(4, 'laoreet lectus'),
(5, 'Quisque ornare');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empl_solicitud`
--

CREATE TABLE `empl_solicitud` (
  `id_solicitud` int(11) NOT NULL,
  `id_empleado` int(11) NOT NULL,
  `id_punto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empl_solicitud`
--

INSERT INTO `empl_solicitud` (`id_solicitud`, `id_empleado`, `id_punto`) VALUES
(6, 31, 2),
(6, 31, 100),
(6, 31, 101),
(8, 31, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `intento`
--

CREATE TABLE `intento` (
  `id_intento` int(11) NOT NULL,
  `id_punto` int(11) NOT NULL,
  `fecha_intento` date NOT NULL,
  `estado` varchar(15) DEFAULT 'pendiente',
  `descripcion` text DEFAULT NULL,
  `respuesta` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `intento`
--

INSERT INTO `intento` (`id_intento`, `id_punto`, `fecha_intento`, `estado`, `descripcion`, `respuesta`) VALUES
(1, 1, '2022-06-27', 'rechazado', 'Debe enviar el resumen juridico por cada localidad', 'tiene que añadir el apartado de causas'),
(2, 1, '2022-05-03', 'pendiente', 'Debe enviar el resumen juridico por cada localidad', ''),
(3, 2, '2023-01-09', 'rechazado', 'Debe enviar el resumen de gastos locales', 'se equivoco en el inciso 2'),
(4, 2, '2021-08-25', 'aceptado', 'Debe enviar el resumen de gastos locales', 'Todo Bien'),
(6, 2, '2022-05-10', 'pendiente', 'Debe enviar este resumen tal', 'resumen anual');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plantilla_punto`
--

CREATE TABLE `plantilla_punto` (
  `id_archivo_plantilla` int(11) NOT NULL,
  `id_punto_solicitud` int(11) NOT NULL,
  `dir_archivo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `plantilla_punto`
--

INSERT INTO `plantilla_punto` (`id_archivo_plantilla`, `id_punto_solicitud`, `dir_archivo`) VALUES
(40, 96, 'evaluacion de pares tipe3-1658029774234.pdf'),
(41, 97, 'Evaluacion de pares omar martinez-1658030748605.pdf'),
(42, 98, 'carga de datos externo85-1658034310958.sql'),
(43, 100, 'DEATH PENALTY DEBATE-1658096891425.pdf'),
(44, 101, 'Resumen Control 3-1658097766497.pdf');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntos`
--

CREATE TABLE `puntos` (
  `id_punto` int(11) NOT NULL,
  `id_solicitud` int(11) NOT NULL,
  `titulo` varchar(30) DEFAULT NULL,
  `estado` varchar(30) DEFAULT 'pendiente',
  `descripcion` text DEFAULT NULL,
  `inicio` date NOT NULL DEFAULT current_timestamp(),
  `termino` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `puntos`
--

INSERT INTO `puntos` (`id_punto`, `id_solicitud`, `titulo`, `estado`, `descripcion`, `inicio`, `termino`) VALUES
(1, 6, 'Resumen juridico', 'pendiente', 'Debe enviar el resumen juridico por cada localidad', '2022-05-15', '2022-05-15'),
(2, 6, 'Resumen de gastos locales', 'aceptado', 'Debe enviar el resumen de gastos locales', '2022-05-15', '2022-05-15'),
(96, 1, 'asdasdas', 'pendiente', 'asdasdasdsa', '2022-07-16', NULL),
(97, 3, 'asdasdas', 'pendiente', 'asdassa', '2022-07-17', NULL),
(98, 3, 'Hola', 'pendiente', 'asdfasd', '2022-07-17', NULL),
(99, 8, 'sdad', 'pendiente', NULL, '2022-07-17', NULL),
(100, 6, 'Resumen abogados', 'pendiente', 'Debe enviar un resumen para los abogados', '2022-07-17', NULL),
(101, 6, 'test', 'pendiente', 'test', '2022-07-17', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitud`
--

CREATE TABLE `solicitud` (
  `id_solicitud` int(11) NOT NULL,
  `id_direccion` int(11) NOT NULL,
  `id_empl_municipal` int(11) NOT NULL,
  `fecha_inicio` date NOT NULL DEFAULT current_timestamp(),
  `estado` varchar(15) DEFAULT '"pendiente"',
  `fecha_termino` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `solicitud`
--

INSERT INTO `solicitud` (`id_solicitud`, `id_direccion`, `id_empl_municipal`, `fecha_inicio`, `estado`, `fecha_termino`) VALUES
(2, 5, 1, '2022-05-03', 'pendiente', NULL),
(3, 1, 1, '2021-07-01', 'pendiente', NULL),
(6, 3, 1, '2022-06-27', 'pendiente', NULL),
(8, 3, 1, '2023-01-09', 'rechazado', '2022-05-31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_direccion`
--

CREATE TABLE `usuario_direccion` (
  `id_empl_direccion` int(11) NOT NULL,
  `id_direccion` int(11) NOT NULL,
  `id_cargo` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `rut` varchar(30) NOT NULL,
  `correo` varchar(40) NOT NULL,
  `clave` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario_direccion`
--

INSERT INTO `usuario_direccion` (`id_empl_direccion`, `id_direccion`, `id_cargo`, `nombre`, `rut`, `correo`, `clave`) VALUES
(1, 1, 2, 'Jaime Barron', '2518294', 'lectus.nullam@google.net', 'hola123'),
(2, 4, 3, 'Ian Foreman', '35470502-8', 'eros.nec@google.net', 'QWQ18VJC2RF'),
(3, 1, 2, 'Orlando Underwood', '779888-1', 'enim@google.ca', 'HWZ28PFQ8NW'),
(6, 5, 3, 'Tanek Cardenas', '31455593-7', 'phasellus.elit@google.com', 'LEM36VIZ1HD'),
(7, 4, 3, 'Velma Chaney', '20702700-6', 'mi.ac@hotmail.couk', 'PTK62KVF3HC'),
(11, 5, 3, 'Phoebe Sharpe', '44494555-9', 'augue.eu.tellus@outlook.net', 'XIM21VHZ2MD'),
(17, 2, 2, 'Willow Washington', '11720810-9', 'felis@hotmail.ca', 'BPH26ZMQ6BF'),
(19, 6, 2, 'Jayme Ortiz', '39922593-0', 'libero.mauris.aliquam@google.org', 'FAO33RDJ0ZC'),
(20, 6, 3, 'Sasha Barron', '14459387-1', 'pretium.et.rutrum@google.ca', 'VDW85GHE1LI'),
(31, 3, 2, 'Bianca Cobb', '31619813-9', 'tristique@outlook.net', 'hola123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_municipal`
--

CREATE TABLE `usuario_municipal` (
  `id_empl_municipal` int(11) NOT NULL,
  `id_cargo` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `rut` varchar(30) NOT NULL,
  `correo` varchar(40) NOT NULL,
  `clave` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario_municipal`
--

INSERT INTO `usuario_municipal` (`id_empl_municipal`, `id_cargo`, `nombre`, `rut`, `correo`, `clave`) VALUES
(1, 1, 'Blake Moon', '644328-1', 'lectus.convallis.est@icloud.org', 'hola123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `archivo_intento`
--
ALTER TABLE `archivo_intento`
  ADD PRIMARY KEY (`id_archivo_intento`),
  ADD KEY `archivo_intento_id` (`id_intento_solicitud`);

--
-- Indices de la tabla `cargo`
--
ALTER TABLE `cargo`
  ADD PRIMARY KEY (`id_cargo`);

--
-- Indices de la tabla `direccion_municipal`
--
ALTER TABLE `direccion_municipal`
  ADD PRIMARY KEY (`id_direccion`);

--
-- Indices de la tabla `empl_solicitud`
--
ALTER TABLE `empl_solicitud`
  ADD PRIMARY KEY (`id_solicitud`,`id_empleado`,`id_punto`),
  ADD KEY `fk_f_usd` (`id_empleado`),
  ADD KEY `fk__f_punto` (`id_punto`);

--
-- Indices de la tabla `intento`
--
ALTER TABLE `intento`
  ADD PRIMARY KEY (`id_intento`),
  ADD KEY `fk__f_p` (`id_punto`);

--
-- Indices de la tabla `plantilla_punto`
--
ALTER TABLE `plantilla_punto`
  ADD PRIMARY KEY (`id_archivo_plantilla`),
  ADD KEY `plantilla` (`id_punto_solicitud`);

--
-- Indices de la tabla `puntos`
--
ALTER TABLE `puntos`
  ADD PRIMARY KEY (`id_punto`),
  ADD KEY `fk__f_s` (`id_solicitud`);

--
-- Indices de la tabla `solicitud`
--
ALTER TABLE `solicitud`
  ADD PRIMARY KEY (`id_solicitud`),
  ADD KEY `fk__f_d` (`id_direccion`),
  ADD KEY `fk_f_um` (`id_empl_municipal`);

--
-- Indices de la tabla `usuario_direccion`
--
ALTER TABLE `usuario_direccion`
  ADD PRIMARY KEY (`id_empl_direccion`),
  ADD KEY `fk_cargo` (`id_cargo`),
  ADD KEY `fk_f_dm` (`id_direccion`);

--
-- Indices de la tabla `usuario_municipal`
--
ALTER TABLE `usuario_municipal`
  ADD PRIMARY KEY (`id_empl_municipal`),
  ADD KEY `fk_f_cargo` (`id_cargo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `archivo_intento`
--
ALTER TABLE `archivo_intento`
  MODIFY `id_archivo_intento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `cargo`
--
ALTER TABLE `cargo`
  MODIFY `id_cargo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `direccion_municipal`
--
ALTER TABLE `direccion_municipal`
  MODIFY `id_direccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `intento`
--
ALTER TABLE `intento`
  MODIFY `id_intento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `plantilla_punto`
--
ALTER TABLE `plantilla_punto`
  MODIFY `id_archivo_plantilla` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `puntos`
--
ALTER TABLE `puntos`
  MODIFY `id_punto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT de la tabla `solicitud`
--
ALTER TABLE `solicitud`
  MODIFY `id_solicitud` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuario_direccion`
--
ALTER TABLE `usuario_direccion`
  MODIFY `id_empl_direccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT de la tabla `usuario_municipal`
--
ALTER TABLE `usuario_municipal`
  MODIFY `id_empl_municipal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `archivo_intento`
--
ALTER TABLE `archivo_intento`
  ADD CONSTRAINT `archivo_intento_id` FOREIGN KEY (`id_intento_solicitud`) REFERENCES `intento` (`id_intento`);

--
-- Filtros para la tabla `empl_solicitud`
--
ALTER TABLE `empl_solicitud`
  ADD CONSTRAINT `fk__f_punto` FOREIGN KEY (`id_punto`) REFERENCES `puntos` (`id_punto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk__f_so` FOREIGN KEY (`id_solicitud`) REFERENCES `solicitud` (`id_solicitud`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_f_usd` FOREIGN KEY (`id_empleado`) REFERENCES `usuario_direccion` (`id_empl_direccion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `intento`
--
ALTER TABLE `intento`
  ADD CONSTRAINT `fk__f_p` FOREIGN KEY (`id_punto`) REFERENCES `puntos` (`id_punto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `plantilla_punto`
--
ALTER TABLE `plantilla_punto`
  ADD CONSTRAINT `plantilla` FOREIGN KEY (`id_punto_solicitud`) REFERENCES `puntos` (`id_punto`);

--
-- Filtros para la tabla `puntos`
--
ALTER TABLE `puntos`
  ADD CONSTRAINT `fk__f_s` FOREIGN KEY (`id_solicitud`) REFERENCES `solicitud` (`id_solicitud`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `solicitud`
--
ALTER TABLE `solicitud`
  ADD CONSTRAINT `fk__f_d` FOREIGN KEY (`id_direccion`) REFERENCES `direccion_municipal` (`id_direccion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_f_um` FOREIGN KEY (`id_empl_municipal`) REFERENCES `usuario_municipal` (`id_empl_municipal`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario_direccion`
--
ALTER TABLE `usuario_direccion`
  ADD CONSTRAINT `fk_cargo` FOREIGN KEY (`id_cargo`) REFERENCES `cargo` (`id_cargo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_f_dm` FOREIGN KEY (`id_direccion`) REFERENCES `direccion_municipal` (`id_direccion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario_municipal`
--
ALTER TABLE `usuario_municipal`
  ADD CONSTRAINT `fk_f_cargo` FOREIGN KEY (`id_cargo`) REFERENCES `cargo` (`id_cargo`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
