-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-07-2021 a las 15:23:55
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `leaflet`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurants`
--

CREATE TABLE `restaurants` (
  `id_restaurant` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `kind_food` set('Mexican','Chinese','Arab','Spanish','Japanese','Catalan') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `restaurants`
--

INSERT INTO `restaurants` (`id_restaurant`, `name`, `address`, `lat`, `lng`, `kind_food`) VALUES
(1, 'El Guaro', 'Carrer Mallorca, 401', 41.40358207760488, 2.1731807264293095, 'Mexican,Spanish'),
(2, 'Out of China', 'Carrer d\'Aribau, 112', 41.39069016293213, 2.15663566943333, 'Chinese'),
(3, 'Restaurante Arabiga', 'Carrer de Viladomat, 213', 41.38509639474871, 2.1501749441737332, 'Arab,Spanish'),
(4, 'La cantina', 'Carrer de l\'Olivera, 70', 41.37377284669182, 2.15548950369956, 'Mexican,Spanish'),
(5, 'Mezquita Restaurante', 'Avinguda Diagonal, 103', 41.40507639855046, 2.2073666855112513, 'Arab'),
(6, 'La meva cuina', 'Avinguda Diagonal, 418', 41.39798785628259, 2.1641010635140225, 'Spanish,Catalan'),
(7, 'Mikado Restaurante', 'Carrer de Sants, 213', 41.37548344808992, 2.1323626293629205, 'Japanese'),
(8, 'Buffet Libre Xiaon', 'Pg. de la Bonanova, 47', 41.404295134567896, 2.1297494727527426, 'Chinese,Japanese'),
(9, 'La Langosta', 'Passatge de Simó, 21, 08025 Barcelona', 41.40488931004802, 2.173539468543964, 'Spanish'),
(10, 'Can Culleres', 'Gran Via de les Corts Catalanes, 727', 41.39845742986482, 2.1795709700559684, 'Catalan');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id_restaurant`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id_restaurant` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
