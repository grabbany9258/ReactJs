-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2022 at 06:59 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `youthappam`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categories_id` int(11) NOT NULL,
  `categories_name` varchar(255) NOT NULL,
  `categories_active` int(11) NOT NULL DEFAULT 0,
  `categories_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categories_id`, `categories_name`, `categories_active`, `categories_status`) VALUES
(1, 'Sweet', 1, 1),
(2, 'Hot', 1, 1),
(3, 'Vadiyalu', 1, 2),
(4, 'Specials', 1, 1),
(5, 'Podulu', 1, 2),
(6, 'Pickles_aminu', 1, 1),
(7, 'Breakfast', 1, 1),
(8, 'juce_Cold', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `donores`
--

CREATE TABLE `donores` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `donores`
--

INSERT INTO `donores` (`id`, `name`, `city`) VALUES
(16, 'Rabbany', 'Dhaka'),
(17, 'trishu', 'Dhaka'),
(19, 'gjsdg', 'sdg');

-- --------------------------------------------------------

--
-- Table structure for table `employee_list`
--

CREATE TABLE `employee_list` (
  `id` int(11) NOT NULL,
  `employee_name` varchar(50) NOT NULL,
  `designation` varchar(50) NOT NULL,
  `phone_nb` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee_list`
--

INSERT INTO `employee_list` (`id`, `employee_name`, `designation`, `phone_nb`) VALUES
(1, 'Golam Rabbany', 'Manager', '01642541075');

-- --------------------------------------------------------

--
-- Table structure for table `manage_website`
--

CREATE TABLE `manage_website` (
  `id` int(11) NOT NULL,
  `title` varchar(600) NOT NULL,
  `short_title` varchar(600) NOT NULL,
  `logo` text NOT NULL,
  `footer` text NOT NULL,
  `currency_code` varchar(600) NOT NULL,
  `currency_symbol` varchar(600) NOT NULL,
  `login_logo` text NOT NULL,
  `invoice_logo` text NOT NULL,
  `background_login_image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manage_website`
--

INSERT INTO `manage_website` (`id`, `title`, `short_title`, `logo`, `footer`, `currency_code`, `currency_symbol`, `login_logo`, `invoice_logo`, `background_login_image`) VALUES
(1, 'Admin Panel by ', '9090908080', 'logo.jpg', 'Admin PanelÂ ', 'India', 'â‚¹', 'logo.png', 'logo.jpg', 'logo.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_date` date NOT NULL,
  `client_name` varchar(255) NOT NULL,
  `client_contact` varchar(255) NOT NULL,
  `sub_total` varchar(255) NOT NULL,
  `vat` varchar(255) NOT NULL,
  `total_amount` varchar(255) NOT NULL,
  `discount` varchar(255) NOT NULL,
  `grand_total` varchar(255) NOT NULL,
  `paid` varchar(255) NOT NULL,
  `due` varchar(255) NOT NULL,
  `payment_type` int(11) NOT NULL,
  `payment_status` int(11) NOT NULL,
  `payment_place` int(11) NOT NULL,
  `gstn` varchar(255) NOT NULL,
  `order_status` int(11) NOT NULL DEFAULT 0,
  `user_id` int(11) NOT NULL,
  `file` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `order_date`, `client_name`, `client_contact`, `sub_total`, `vat`, `total_amount`, `discount`, `grand_total`, `paid`, `due`, `payment_type`, `payment_status`, `payment_place`, `gstn`, `order_status`, `user_id`, `file`) VALUES
(1, '2022-09-25', '1', '8090809080', '846.00', '152.28', '998.28', '5', '993.28', '993', '0.28', 2, 1, 1, '152.28', 1, 1, ''),
(2, '2022-09-25', '1', '8090809080', '1050.00', '189.00', '1239.00', '', '1239.00', '1239', '0.00', 2, 1, 1, '189.00', 1, 1, ''),
(3, '2022-09-25', '1', '8090809080', '430.00', '77.40', '507.40', '', '507.40', '507', '0.40', 4, 1, 1, '77.40', 1, 1, ''),
(4, '2022-12-14', '', '01642541075', '175.00', '31.50', '206.50', '20', '186.50', '190', '-3.50', 2, 1, 1, '31.50', 1, 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `order_item`
--

CREATE TABLE `order_item` (
  `order_item_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL DEFAULT 0,
  `product_id` int(11) NOT NULL DEFAULT 0,
  `quantity` varchar(255) NOT NULL,
  `rate` varchar(255) NOT NULL,
  `total` varchar(255) NOT NULL,
  `order_item_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_item`
--

INSERT INTO `order_item` (`order_item_id`, `order_id`, `product_id`, `quantity`, `rate`, `total`, `order_item_status`) VALUES
(1, 1, 7, '1', '180', '180.00', 1),
(2, 1, 8, '3', '222', '666.00', 1),
(3, 2, 1, '2', '175', '350.00', 1),
(4, 2, 4, '5', '140', '700.00', 1),
(5, 3, 9, '1', '70', '70.00', 1),
(6, 3, 7, '2', '180', '360.00', 1),
(7, 4, 1, '1', '175', '175.00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_image` text NOT NULL,
  `brand_id` int(11) NOT NULL,
  `categories_id` int(11) NOT NULL,
  `quantity` varchar(255) NOT NULL,
  `rate` varchar(255) NOT NULL,
  `active` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_image`, `brand_id`, `categories_id`, `quantity`, `rate`, `active`, `status`) VALUES
(1, 'Tapeswaram Madatha Kaja', '', 0, 1, '557', '175', 1, 1),
(2, 'Bellam Gavvalu', '', 0, 1, '125', '140', 2, 1),
(3, 'Special Pappu Chegodi', '', 0, 2, '234', '140', 1, 1),
(4, 'Karapu Boondi', '', 0, 2, '349', '140', 1, 1),
(5, 'Gummadikaya Vadiyalu', '', 0, 3, '556', '180', 1, 1),
(6, 'Biyyam Pindi Vadiyalu', '', 0, 3, '545', '170', 2, 1),
(7, 'Masala dosa', '', 0, 2, '341', '180', 1, 1),
(8, 'Chicken 65', '', 0, 2, '440', '222', 1, 1),
(9, 'Idli Sambhar', '', 0, 4, '432', '70', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `register_form`
--

CREATE TABLE `register_form` (
  `id` int(11) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register_form`
--

INSERT INTO `register_form` (`id`, `fname`, `lname`, `email`, `password`) VALUES
(1, 'golam', 'rabbany', 'grb@example.com', '1234abcd'),
(4, 'aklima', 'aktar', 'aklima@gmail.com', 'abcd1234'),
(5, 'Trishu', 'Trishu', 'Trishu@gmail.com', 'abcd1234'),
(6, 'Fayzullah', 'aman', 'fayez@gmail.com', 'abcd1234'),
(11, 'Taskin', 'mahmud', 'taskin@gmail.com', 'abcd123'),
(12, 'Talukdar ', 'mahadi', 'mahadi@gmail.com', 'abcd123'),
(14, 'Mahir', 'CHowdhury', 'mahir@gmail.com', 'abcd123'),
(15, 'xyz', 'abc', 'k@gmail.com', 'abcd'),
(16, 'tcld', 'madam', 'madam@gmail.com', 'abcd');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_client`
--

CREATE TABLE `tbl_client` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `gender` varchar(150) NOT NULL,
  `mob_no` varchar(150) NOT NULL,
  `reffering` varchar(150) NOT NULL,
  `address` varchar(250) NOT NULL,
  `created_date_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `delete_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_client`
--

INSERT INTO `tbl_client` (`id`, `name`, `gender`, `mob_no`, `reffering`, `address`, `created_date_time`, `delete_status`) VALUES
(1, 'Rammolli Kallathil', 'Male', '8090809080', 'Subodh', 'Old Kanakapura Rd, Basavanagudi, Bengaluru, Karnataka 560004', '2022-09-25 05:32:57', 0),
(2, 'Sachin Rajjan', 'Male', '8070809805', 'Akash', 'Plot No.8, Sahajan Colon, Kolkata', '2022-09-25 07:23:34', 0),
(3, 'Golam Rabbany', 'Male', '01642541075', '1', 'Shyamoli Dhaka-1207', '2022-12-14 02:58:05', 0),
(4, 'Fayzullah', 'Male', '0123654893', 'Rabbany', 'Polton Dhaka-1207', '2022-12-14 05:06:37', 0),
(5, 'xfnjdgjd', 'Female', 'vbncvn', 'vncvn', 'cvbncvn', '2022-12-14 05:44:03', 0),
(6, 'golam rabbany', 'Female', '014569875', '012', 'dafgdg', '2022-12-18 12:35:32', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_email_config`
--

CREATE TABLE `tbl_email_config` (
  `e_id` int(21) NOT NULL,
  `name` varchar(500) NOT NULL,
  `mail_driver_host` varchar(5000) NOT NULL,
  `mail_port` int(50) NOT NULL,
  `mail_username` varchar(50) NOT NULL,
  `mail_password` varchar(30) NOT NULL,
  `mail_encrypt` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `email`) VALUES
(1, 'grabbany', 'cd92a26534dba48cd785cdcc0b3e6bd1', 'grb@gmail.com'),
(3, 'Trishu', '6beb3d3edc9bc93d358f2527e12284df', 'trishu@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categories_id`);

--
-- Indexes for table `donores`
--
ALTER TABLE `donores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee_list`
--
ALTER TABLE `employee_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `manage_website`
--
ALTER TABLE `manage_website`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`order_item_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `register_form`
--
ALTER TABLE `register_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_client`
--
ALTER TABLE `tbl_client`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_email_config`
--
ALTER TABLE `tbl_email_config`
  ADD PRIMARY KEY (`e_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categories_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `donores`
--
ALTER TABLE `donores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `employee_list`
--
ALTER TABLE `employee_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `manage_website`
--
ALTER TABLE `manage_website`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `order_item`
--
ALTER TABLE `order_item`
  MODIFY `order_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `register_form`
--
ALTER TABLE `register_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_client`
--
ALTER TABLE `tbl_client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_email_config`
--
ALTER TABLE `tbl_email_config`
  MODIFY `e_id` int(21) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
