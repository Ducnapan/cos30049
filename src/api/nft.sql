-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2023 at 11:24 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nft_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `nft`
--

CREATE TABLE `nft` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `color` varchar(10) NOT NULL,
  `price` float NOT NULL,
  `views` int(11) NOT NULL,
  `likes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nft`
--

INSERT INTO `nft` (`id`, `name`, `color`, `price`, `views`, `likes`) VALUES
(1, 'Man covered in Yellow', '#00FFFF', 0.25, 1289, 57),
(2, 'Woman with a lot of Purple', '#800080', 0.35, 3497, 82),
(3, 'Child covered in Pink paint', '#EE82EE', 0.65, 2098, 44),
(4, 'Police covered in Yellow paint', '#FFFF00', 0.45, 4226, 63),
(5, 'Teacher covered in Green paint', '#008080', 0.75, 5794, 91),
(6, 'Doctor covered in Orange paint', '#FFA500', 0.85, 3152, 75),
(7, 'Artist with a Blue Palette', '#0000FF', 0.55, 2467, 29),
(8, 'Firefighter in Red Uniform', '#FF0000', 0.65, 4235, 68),
(9, 'Dancer in Sparkling Silver', '#C0C0C0', 0.45, 1984, 53),
(10, 'Construction Worker in Safety Yellow', '#FFFF00', 0.55, 3625, 36),
(11, 'Chef in Apron of Red Stripes', '#FF0000', 0.75, 4789, 77),
(12, 'Pilot in Sky-Blue Uniform', '#87CEEB', 0.85, 2573, 48);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `nft`
--
ALTER TABLE `nft`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nft`
--
ALTER TABLE `nft`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
