-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.33 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for laravel8-react-ecommerce
CREATE DATABASE IF NOT EXISTS `laravel8-react-ecommerce` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `laravel8-react-ecommerce`;

-- Dumping structure for table laravel8-react-ecommerce.cart_orders
CREATE TABLE IF NOT EXISTS `cart_orders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `invoice_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_method` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_charge` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_time` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.cart_orders: ~1 rows (approximately)
/*!40000 ALTER TABLE `cart_orders` DISABLE KEYS */;
INSERT INTO `cart_orders` (`id`, `invoice_no`, `product_name`, `product_code`, `size`, `color`, `quantity`, `unit_price`, `total_price`, `email`, `name`, `payment_method`, `delivery_address`, `city`, `delivery_charge`, `order_date`, `order_time`, `order_status`, `created_at`, `updated_at`) VALUES
	(7, 'Easy1660008366773', 'JMK Kryotox 205g0', '0119-4801', 'Size: S', 'Color: Red', '1', '1.00', '1', 'bannedefused@gmail.com', 'Carl Caraan', '1', 'Laguna', 'Manila', '00', '09-08-2022', '09:26:07am', 'Complete', NULL, '2022-08-21 14:05:02'),
	(8, 'Easy1661091258824', 'JMK Kryotox 205g0', '0119-4801', 'Size: M', 'Color: Red', '1', '1.00', '1', 'bannedefused@gmail.com', 'Carl Caraan', '1', 'SML', 'Laguna', '00', '21-08-2022', '10:14:19pm', 'Pending', NULL, NULL),
	(9, 'Easy1661301190798', 'JMK Kryotox 205g0aaa', '0119-4801', 'Size: S', 'Color: Red', '1', '1.00', '1', 'undefined', 'Carl Caraan', '2', 'Laguna', 'SML', '00', '24-08-2022', '08:33:11am', 'Pending', NULL, NULL);
/*!40000 ALTER TABLE `cart_orders` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.categories: ~13 rows (approximately)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`, `category_name`, `category_image`, `created_at`, `updated_at`) VALUES
	(1, 'Electronic Device', 'https://lzd-img-global.slatic.net/g/p/45192c7167f3bbe7751f658e2a36f85a.png_400x400q75.png_.webp', NULL, NULL),
	(2, 'Electronic Accessories', 'https://lzd-img-global.slatic.net/g/p/965278e6abe2f822b5e4f23a168c6a72.jpg_400x400q75.jpg_.webp', NULL, NULL),
	(3, 'TV & Home Appliances', 'https://lzd-img-global.slatic.net/g/p/22fb0272538c8fee6326583c911a5504.png_400x400q75.png_.webp', NULL, NULL),
	(4, 'Health & Beauty', 'http://127.0.0.1:8000/storage/default_image.jpg', NULL, NULL),
	(5, 'Babies & Toys', 'https://lzd-img-global.slatic.net/g/p/312d3de8e258d35d6bafcfc542a87e59.jpg_400x400q75.jpg_.webp', NULL, NULL),
	(6, 'Groceries & Pets', 'https://lzd-img-global.slatic.net/g/p/c5ee11feae308e8da1b41d8c5b8ce1b8.jpg_400x400q75.jpg_.webp', NULL, NULL),
	(7, 'Home & Living', 'https://lzd-img-global.slatic.net/g/p/5d67a73b02573c6dbb8d3cc50eefd83b.jpg_400x400q75.jpg_.webp', NULL, NULL),
	(8, 'Women\'s Fashion & Accessories', 'https://lzd-img-global.slatic.net/g/p/58a0be0f52bb84a5be47cd84bfe1fb96.jpg_400x400q75.jpg_.webp', NULL, NULL),
	(9, 'Men\'s Fashion & Accessories', 'https://lzd-img-global.slatic.net/g/p/5a9604cd6f16914a55857fac6546d4d3.jpg_400x400q75.jpg_.webp', NULL, NULL),
	(10, 'Kid\'s Fashion & Accessories', 'http://127.0.0.1:8000/storage/default_image.jpg', NULL, NULL),
	(11, 'Sports & Lifestyle', 'https://lzd-img-global.slatic.net/g/p/788f2df20fd884b4e75685db4fed20f6.jpg_400x400q75.jpg_.webp', NULL, NULL),
	(12, 'Automotive & Motorcycles', 'https://lzd-img-global.slatic.net/g/p/ef5d7850fd735701ebebffba273bb0ab.jpg_400x400q75.jpg_.webp', NULL, NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.contacts
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_time` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.contacts: ~0 rows (approximately)
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.failed_jobs: ~0 rows (approximately)
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.favourites
CREATE TABLE IF NOT EXISTS `favourites` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.favourites: ~1 rows (approximately)
/*!40000 ALTER TABLE `favourites` DISABLE KEYS */;
INSERT INTO `favourites` (`id`, `product_name`, `image`, `product_code`, `email`, `created_at`, `updated_at`) VALUES
	(21, 'JMK Kryotox 205g0', 'https://cf.shopee.ph/file/576cce38678ffddfcab138cd81521d2c', '0119-4801', 'undefined', NULL, NULL),
	(23, 'JMK Kryotox 205g0', 'https://cf.shopee.ph/file/576cce38678ffddfcab138cd81521d2c', '0119-4801', 'bannedefused@gmail.com', NULL, NULL);
/*!40000 ALTER TABLE `favourites` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.home_sliders
CREATE TABLE IF NOT EXISTS `home_sliders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `slider_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.home_sliders: ~4 rows (approximately)
/*!40000 ALTER TABLE `home_sliders` DISABLE KEYS */;
INSERT INTO `home_sliders` (`id`, `slider_image`, `created_at`, `updated_at`) VALUES
	(1, 'http://127.0.0.1:8000/storage/slider1.jpg', NULL, NULL),
	(3, 'https://icms-image.slatic.net/images/ims-web/8af2c410-406d-4945-8a69-6ac97cf78ad1.jpg', NULL, NULL),
	(4, 'https://lzd-img-global.slatic.net/g/icms/images/ims-web/421a97c3-5ecb-49c9-b381-bfbf396b49fb.jpg_2200x2200q90.jpg_.webp', NULL, NULL),
	(5, 'https://lzd-img-global.slatic.net/g/icms/images/ims-web/f76699e7-c160-4c04-9b2d-fee489e569d1.jpg_2200x2200q90.jpg_.webp', NULL, NULL);
/*!40000 ALTER TABLE `home_sliders` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.migrations: ~20 rows (approximately)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2014_10_12_000000_create_users_table', 1),
	(2, '2014_10_12_100000_create_password_resets_table', 1),
	(3, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
	(4, '2019_08_19_000000_create_failed_jobs_table', 1),
	(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
	(6, '2022_06_10_052530_create_sessions_table', 1),
	(7, '2022_06_10_072747_create_visitors_table', 2),
	(8, '2022_06_11_053503_create_contacts_table', 3),
	(9, '2022_06_12_052836_create_site_infos_table', 4),
	(10, '2022_06_14_020034_create_categories_table', 5),
	(11, '2022_06_14_024120_create_subcategories_table', 6),
	(12, '2022_06_19_063330_create_product_lists_table', 7),
	(13, '2022_07_19_055156_create_home_sliders_table', 8),
	(14, '2022_07_21_054428_create_product_details_table', 9),
	(15, '2022_07_26_064038_create_notifications_table', 10),
	(21, '2016_06_01_000001_create_oauth_auth_codes_table', 11),
	(22, '2016_06_01_000002_create_oauth_access_tokens_table', 11),
	(23, '2016_06_01_000003_create_oauth_refresh_tokens_table', 11),
	(24, '2016_06_01_000004_create_oauth_clients_table', 11),
	(25, '2016_06_01_000005_create_oauth_personal_access_clients_table', 11),
	(26, '2022_08_03_133950_create_product_reviews_table', 12),
	(27, '2022_08_04_045807_create_product_carts_table', 13),
	(28, '2022_08_05_061705_create_favourites_table', 14),
	(29, '2022_08_08_051412_create_cart_orders_table', 15);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.notifications
CREATE TABLE IF NOT EXISTS `notifications` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.notifications: ~6 rows (approximately)
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` (`id`, `title`, `message`, `date`, `created_at`, `updated_at`) VALUES
	(1, '1 Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', '07/26/22', NULL, NULL),
	(2, '2 Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', '07/26/22', NULL, NULL),
	(3, '3 Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', '07/26/22', NULL, NULL),
	(4, '4 Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', '07/26/22', NULL, NULL),
	(5, '5 Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', '07/26/22', NULL, NULL),
	(6, '6 Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', '07/26/22', NULL, NULL);
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.oauth_access_tokens
CREATE TABLE IF NOT EXISTS `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `client_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.oauth_access_tokens: ~82 rows (approximately)
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
	('0002eb8930858b8fc638be0de099344fd7262bfbbce8381199d12fa182f107f5b671b9cb0b36327c', 8, 1, 'app', '[]', 0, '2022-08-01 01:33:47', '2022-08-01 01:33:47', '2023-08-01 01:33:47'),
	('05644006b918b46d80dbfb7f67888010a46cbc86b4b1ebd498cf641fa7fc1723f06ecbf438acb01d', 6, 1, 'app', '[]', 0, '2022-07-31 23:43:35', '2022-07-31 23:43:35', '2023-07-31 23:43:35'),
	('0639f7e4acae0462710b0ba110780f571e16f85489dd34ef2737a95b0ded80c1431718ce220760a8', 8, 1, 'app', '[]', 0, '2022-08-01 00:39:49', '2022-08-01 00:39:49', '2023-08-01 00:39:49'),
	('0739acf509f25227c542f95c3f29020a3b51a0e3b658ccf852ddcace0a6bd41d980da8a1db959f99', 5, 1, 'app', '[]', 0, '2022-07-30 14:21:57', '2022-07-30 14:21:57', '2023-07-30 14:21:57'),
	('0b125be8ed5f06283c2a9ee92b198480882a443d6e94e72b05a4fcf64343d2b8c575b91e28396fae', 8, 1, 'app', '[]', 0, '2022-08-01 00:44:42', '2022-08-01 00:44:42', '2023-08-01 00:44:42'),
	('0c78d1df2464512b50b605eb40162648d8407e38e946e74152a389edc85a040a2b7f7cfba2924c20', 6, 1, 'app', '[]', 0, '2022-07-31 23:42:56', '2022-07-31 23:42:56', '2023-07-31 23:42:56'),
	('0d050a7fcab354933445278353f26fff6d5531c24671754735d4b9c8d19b76919e7ccbca114b2abe', 8, 1, 'app', '[]', 0, '2022-09-28 08:39:04', '2022-09-28 08:39:04', '2023-09-28 08:39:04'),
	('1ee40ab83c569ed5e1f8fa6e091586a91885511473e44d005be94e41fa7e3c23c325115af1ab495a', 8, 1, 'app', '[]', 0, '2022-08-01 00:17:06', '2022-08-01 00:17:06', '2023-08-01 00:17:06'),
	('247c9dadbc8604c27d17f8ed5d0e964e8c4579fbe03825a7b84cf1b0d013da0349d4814a462d0e9e', 8, 1, 'app', '[]', 0, '2022-08-01 02:22:46', '2022-08-01 02:22:46', '2023-08-01 02:22:46'),
	('26d32b8af031dacaa41da02fbfd2d721c92fe192a1a59e38e0ae29cb0e776395dbba349aa1a79a01', 8, 1, 'app', '[]', 0, '2022-08-01 00:46:56', '2022-08-01 00:46:56', '2023-08-01 00:46:56'),
	('26efae86837158bcc957059765054376e2c6bee3b1b265de8ad66f60e31134db4e38ee0970fbc37d', 8, 1, 'app', '[]', 0, '2022-08-01 01:50:56', '2022-08-01 01:50:56', '2023-08-01 01:50:56'),
	('279a2cef4655aa8098fd9477a1661b25654988b0ecfe4efd1a8e0af27e06b3b58ed24d7205449448', 8, 1, 'app', '[]', 0, '2022-08-01 01:15:29', '2022-08-01 01:15:29', '2023-08-01 01:15:29'),
	('2a1d3532a6eba2a3c800f2f0f71abcf30b1e16abd28588cb07d3a3a64e0a6efb4cfec38fd5dcc638', 8, 1, 'app', '[]', 0, '2022-08-01 01:15:14', '2022-08-01 01:15:14', '2023-08-01 01:15:14'),
	('2b114aee6b447944a06c33e1bcd67de9087b5afacb1f4940fc2efb74957f95be888ef2cf48b86992', 8, 1, 'app', '[]', 0, '2022-07-31 23:53:11', '2022-07-31 23:53:11', '2023-07-31 23:53:11'),
	('2cf02890d5d4a1ffdc19f80a7076df228cc92f204a1d7ef988923bd5254f8efeb789a0d2ddbc4444', 8, 1, 'app', '[]', 0, '2022-08-01 01:22:52', '2022-08-01 01:22:52', '2023-08-01 01:22:52'),
	('2d1cddf98171a62a49340b1f3583c223fe9be4e6aeb45082fefae322bfba28c0e369f609770dec1d', 8, 1, 'app', '[]', 0, '2022-07-31 23:50:45', '2022-07-31 23:50:45', '2023-07-31 23:50:45'),
	('32b8c5939fc49be6fc6a9b1f9a7bec85d2dbcb742065006e1b0b7cd2817ef483aaaba18ddd4a315f', 8, 1, 'app', '[]', 0, '2022-08-01 01:17:19', '2022-08-01 01:17:19', '2023-08-01 01:17:19'),
	('36178dc9b33e2e708f74f3cd6420b1383ac7fc58befe93aa2917713ec33c4bd423f65eaf2e4f9f8e', 8, 1, 'app', '[]', 0, '2022-08-01 02:27:06', '2022-08-01 02:27:06', '2023-08-01 02:27:06'),
	('3890d0db9577cd9f25e9b8028bbecfc80d2bc3bb48e85753e792f07d6fca3484bfdf8cdfef3ff371', 6, 1, 'app', '[]', 0, '2022-07-31 23:45:38', '2022-07-31 23:45:38', '2023-07-31 23:45:38'),
	('3d6b2bd0511814346c4597137cbb2ea55585539ebf3045162e5c4c6cbd6eccbf92d582fb63b72369', 8, 1, 'app', '[]', 0, '2022-08-01 02:37:33', '2022-08-01 02:37:33', '2023-08-01 02:37:33'),
	('3f10094c7d0653c238fdf23c3d2740f8f5c9cd414f70fe9d1e9a5571a8cce97867fa2a7d3528c07e', 8, 1, 'app', '[]', 0, '2022-08-01 00:13:07', '2022-08-01 00:13:07', '2023-08-01 00:13:07'),
	('3fbcb8a9cf0bca5cb6f4944473b6b9ad2c9013d09e7219d38fd907d998638d3da09708dc54978a1d', 8, 1, 'app', '[]', 0, '2022-08-01 00:01:17', '2022-08-01 00:01:17', '2023-08-01 00:01:17'),
	('482a1cfcd6ee567c8d85355f52ed7af1ee91a8780b7ff1669c9882714afc466e4b16b291f5c45bac', 8, 1, 'app', '[]', 0, '2022-08-01 02:04:44', '2022-08-01 02:04:44', '2023-08-01 02:04:44'),
	('492dc0ce11577f399369c0d9f19e7d694243eec9bc636baadb9288f688b12bddf102423561c8d8d2', 8, 1, 'app', '[]', 0, '2022-08-01 01:24:00', '2022-08-01 01:24:00', '2023-08-01 01:24:00'),
	('4aef22b73ac1cf6564d18767bbe395903458d05464a9d0d7ef0a4f74f045e1be5f160855da4846d2', 8, 1, 'app', '[]', 0, '2022-08-01 00:33:01', '2022-08-01 00:33:01', '2023-08-01 00:33:01'),
	('507f67fd11ab4d2f8246201af25ff1cc13e830ad403dbbdbd23e43385a53c4013b7a03975a5eeb7e', 8, 1, 'app', '[]', 0, '2022-08-01 01:14:06', '2022-08-01 01:14:06', '2023-08-01 01:14:06'),
	('5263fbe216bcc28fd445f0d975d2aa52109b49c9cc6df3bff7bd462167b17b1f04db2d384bd739dd', 8, 1, 'app', '[]', 0, '2022-08-01 01:07:28', '2022-08-01 01:07:28', '2023-08-01 01:07:28'),
	('55ddd14fa2e1ecfedd640246cc61a7973689d04f1073a916cc13ecf3c25fb72547f2847d514ef093', 8, 1, 'app', '[]', 0, '2022-08-01 00:38:16', '2022-08-01 00:38:16', '2023-08-01 00:38:16'),
	('5a4d2c190ce421c9c14e07f7291caf22baff3e5747a5a0e0c5f1f5747593ffbd15826400fed79a77', 8, 1, 'app', '[]', 0, '2022-08-01 00:35:09', '2022-08-01 00:35:09', '2023-08-01 00:35:09'),
	('5d40826c85f1297ed0c471d930feede18b32b9e9a0629dc6199e8894d10838578c18996e068bc4f4', 8, 1, 'app', '[]', 0, '2022-08-01 01:44:55', '2022-08-01 01:44:55', '2023-08-01 01:44:55'),
	('5dcaaeaf75b1a72131f40b448e81c2109fecbc46d08047bd910a88444f894d8b410f0c2873cdafc0', 5, 1, 'app', '[]', 0, '2022-07-31 05:38:39', '2022-07-31 05:38:39', '2023-07-31 05:38:39'),
	('6007a002248aeecb076f889f58236546d3804cd2cdc7c2088c3540e450db603642492ef350c9541b', 8, 1, 'app', '[]', 0, '2022-08-01 01:59:56', '2022-08-01 01:59:56', '2023-08-01 01:59:56'),
	('64e9d1ddf1faeafd95afee5ef1dccca42b84045462cb409f3c1b98c49fcd1311226473d17e39c023', 8, 1, 'app', '[]', 0, '2022-08-01 01:05:34', '2022-08-01 01:05:34', '2023-08-01 01:05:34'),
	('651dcd5715af0d25098b66c5b68203d71682314b7405258fac9dac95d56605efd0eff6d9e18e75f0', 8, 1, 'app', '[]', 0, '2022-08-24 00:30:55', '2022-08-24 00:30:55', '2023-08-24 00:30:55'),
	('66cf7a7154a71cda55bb796bb03ca2de1fea8d92dd15296b9bdf981c7dc094ea7f4436407f9c5ddf', 9, 1, 'app', '[]', 0, '2022-08-01 12:28:12', '2022-08-01 12:28:12', '2023-08-01 12:28:12'),
	('66f1683c11d18dcd6b5a2c190c57824a581ac7f524bcbf625e9574f0eef4c5405c42e4f788e0417b', 6, 1, 'app', '[]', 0, '2022-07-31 23:49:06', '2022-07-31 23:49:06', '2023-07-31 23:49:06'),
	('6869b0b173ad39f6a12537651596969d4a16ff5a779b1716621da19061925edc3613fe67560962a3', 6, 1, 'app', '[]', 0, '2022-07-31 23:43:16', '2022-07-31 23:43:16', '2023-07-31 23:43:16'),
	('68ac7a1c9f8ae77ce96e290a730f90f02c9383c3853cfdd94a4532a87d4b5bdc46cc7dda8d4ff478', 8, 1, 'app', '[]', 0, '2022-08-01 00:39:50', '2022-08-01 00:39:50', '2023-08-01 00:39:50'),
	('6c078e9bae5f4353c027630e40d01bf12c3d948a86fcb5adb6e7e39514e19244fccaab6c71efde64', 7, 1, 'app', '[]', 0, '2022-07-31 23:46:25', '2022-07-31 23:46:25', '2023-07-31 23:46:25'),
	('6dddcd376d4ea1785a8d2d4bbca721aa69425a3d7924a1ff167b88f28df139080d914270d2f34bc0', 8, 1, 'app', '[]', 0, '2022-08-01 00:33:16', '2022-08-01 00:33:16', '2023-08-01 00:33:16'),
	('6e6a0869944dc107eeafd16b2bcf157d4ec5b8ccfbc60f8d448a4c5e91c84458bb2189134bef1316', 8, 1, 'app', '[]', 0, '2022-08-01 01:15:53', '2022-08-01 01:15:53', '2023-08-01 01:15:53'),
	('6f0aae1ff72ead89fddaf094f2e6ed72e9336faa46656f9f877136278de762572d1ec0c780af83b0', 8, 1, 'app', '[]', 0, '2022-08-01 02:00:20', '2022-08-01 02:00:20', '2023-08-01 02:00:20'),
	('6fbeed9ca986ad14b2d5eee90727ce498e6fd3ec82130f9e3d5984ae3ff31ba6df1c1a27fb987724', 8, 1, 'app', '[]', 0, '2022-08-01 02:05:56', '2022-08-01 02:05:56', '2023-08-01 02:05:56'),
	('70d0ddc21cf972268807351afdc5588a997fb613de8d7847303b8212cb3a5001445a533dcf559744', 5, 1, 'app', '[]', 0, '2022-07-31 13:02:35', '2022-07-31 13:02:35', '2023-07-31 13:02:35'),
	('7bb5bb73ba7d482c59216e1f56cee96f6cbfa9914b65be1a3c9c9e82fc49954295fdea7aa8dc2b57', 8, 1, 'app', '[]', 0, '2022-08-01 00:09:55', '2022-08-01 00:09:55', '2023-08-01 00:09:55'),
	('7cf96f863c9b3c062deb37c9afb6aba920ec14f6b7d688125547abb276fa4d87a9f1d1479d2323c5', 8, 1, 'app', '[]', 0, '2022-08-21 14:11:46', '2022-08-21 14:11:46', '2023-08-21 14:11:46'),
	('7cfec9652a7baf2a5181e7616fe2debcb011e19d3aaef47deb5ca188bb2fae33e8ed48d8a3b863e1', 8, 1, 'app', '[]', 0, '2022-08-01 01:11:00', '2022-08-01 01:11:00', '2023-08-01 01:11:00'),
	('7d49640ba54dad768bf259790f5748ba037ad6b689ad9c3a65dbe5ecdd0b79f599fb5699382c2fbf', 8, 1, 'app', '[]', 0, '2022-08-01 01:07:13', '2022-08-01 01:07:13', '2023-08-01 01:07:13'),
	('7dd5838eff42eac9995123428f0a100de832300213c86a21970d41581061e5add47e0f71fab66c56', 8, 1, 'app', '[]', 0, '2022-08-05 00:03:18', '2022-08-05 00:03:18', '2023-08-05 00:03:18'),
	('88c14c22b975f0e9d6df337f9df25cfb5c2dcd8132ddf5d20eeccd5520fb96902d8c01aa1589dd04', 8, 1, 'app', '[]', 0, '2022-08-01 01:52:55', '2022-08-01 01:52:55', '2023-08-01 01:52:55'),
	('8a96a1011eb872882b291c4ade359f81c50fda7d162199a42075454e0ce4d19a5364aaa92b72126b', 8, 1, 'app', '[]', 0, '2022-08-10 05:12:47', '2022-08-10 05:12:47', '2023-08-10 05:12:47'),
	('8ad15736e164445c3cc5d51734bd3e67b224d7e81c2ac987d4c89324f67416d49976f74a7fac6617', 8, 1, 'app', '[]', 0, '2022-08-01 01:07:50', '2022-08-01 01:07:50', '2023-08-01 01:07:50'),
	('8f69adc201954f617461a562daf2d01ec504b47a1bb6c228aef12c9e27af76e4dbd1511b0f9b1406', 8, 1, 'app', '[]', 0, '2022-07-31 23:51:07', '2022-07-31 23:51:07', '2023-07-31 23:51:07'),
	('90e7f289070b6ddb74dd0d7206d981f0ce2a69aaa87f7f17b65c342f19b2cb6d087f34bfdf4e4786', 8, 1, 'app', '[]', 0, '2022-08-01 00:26:21', '2022-08-01 00:26:21', '2023-08-01 00:26:21'),
	('91685267536b73ef2cbb0078fcc99dfbf39572cfedeb595486b1e97a84d404d4d97abb531a425eb2', 8, 1, 'app', '[]', 0, '2022-08-01 09:47:22', '2022-08-01 09:47:22', '2023-08-01 09:47:22'),
	('917ec7c47f7311755ed7595a0ee0f6be53d9fb766692c8a5d6ce61eaeb80c23d8e106b61f9f85060', 8, 1, 'app', '[]', 0, '2022-08-01 00:28:35', '2022-08-01 00:28:35', '2023-08-01 00:28:35'),
	('92ef88480b76fcc141b605df1f670b6564d3ab22a083c0b02fca73736b6f0536f985a96a23b66352', 8, 1, 'app', '[]', 0, '2022-08-01 01:14:57', '2022-08-01 01:14:57', '2023-08-01 01:14:57'),
	('97534020cae967a8ce88eeb83ee63c2bcde1f1311b8f91f5fb90b835423e885a131176ada81c995f', 8, 1, 'app', '[]', 0, '2022-08-01 00:50:50', '2022-08-01 00:50:50', '2023-08-01 00:50:50'),
	('9b13c3e9cb23f2529c7aea95e2dc599eee74cb2330eaad739727b062a2475c5e7825eca4f87c9673', 8, 1, 'app', '[]', 0, '2022-08-01 02:24:52', '2022-08-01 02:24:52', '2023-08-01 02:24:52'),
	('9f55d8545aa3a4b4c4f26667856b9b8f62f9eba874c510e99ecbb5b41f85097961300f38e38312d6', 5, 1, 'app', '[]', 0, '2022-07-31 05:38:15', '2022-07-31 05:38:15', '2023-07-31 05:38:15'),
	('a0dc99149b1830bd23a8977e012df500c2e7be4fc7f3d6e16a9bc11ce90de4d4adab889892c710c9', 8, 1, 'app', '[]', 0, '2022-08-21 14:11:49', '2022-08-21 14:11:49', '2023-08-21 14:11:49'),
	('a1d28a9df8874e69e4bb0af51a5a2c3c7f3f34aa13a9af1fcaecb27f3307087e4269d36cc5e26205', 8, 1, 'app', '[]', 0, '2022-08-01 01:25:24', '2022-08-01 01:25:24', '2023-08-01 01:25:24'),
	('a6e5ba5341e64259c78860e6eaafdfb8656f4bd40d3d6591ff35ac69ce80536e63a67fec16345d24', 5, 1, 'app', '[]', 0, '2022-07-30 08:20:14', '2022-07-30 08:20:14', '2023-07-30 08:20:14'),
	('a6eb045b98b9118ace81038a72412b4973095be62e3fa21e04fae8f344f56af2ade56d56d0dcc873', 8, 1, 'app', '[]', 0, '2022-08-01 02:24:53', '2022-08-01 02:24:53', '2023-08-01 02:24:53'),
	('a86d209069ccabb2b256c38a95b1a51cb12861417bdd271a575831d046a3f0db15c5f6fe93e84692', 8, 1, 'app', '[]', 0, '2022-08-01 01:50:31', '2022-08-01 01:50:31', '2023-08-01 01:50:31'),
	('aaeab5315324fe8c7767a35cb13abf4276a496a44eab36578ce9918cfc24606fd35b13e14606e465', 8, 1, 'app', '[]', 0, '2022-08-01 01:49:54', '2022-08-01 01:49:54', '2023-08-01 01:49:54'),
	('ac171464ea86fb296faf85894241eff6bfaf29072976e0d029ba5f975ad59e6f661e93c08bd401f0', 8, 1, 'app', '[]', 0, '2022-08-01 02:00:25', '2022-08-01 02:00:25', '2023-08-01 02:00:25'),
	('adb8f63e16b9e7ae950d86c70f9cd9d75c95da420c1a986f3f8ff713c1443220887db8016eb7630b', 8, 1, 'app', '[]', 0, '2022-08-05 14:15:42', '2022-08-05 14:15:42', '2023-08-05 14:15:42'),
	('b1aa213261cd82409ac8c3992acf7f7225d38248e864c08051cd214648bbda03e6feda90acf2361e', 8, 1, 'app', '[]', 0, '2022-08-01 02:08:09', '2022-08-01 02:08:09', '2023-08-01 02:08:09'),
	('b20dbb0a29330d55362a7f34fcfd2a37c565a22752183630831aec3c44b314c2af61112c61d51822', 8, 1, 'app', '[]', 0, '2022-08-01 09:46:20', '2022-08-01 09:46:20', '2023-08-01 09:46:20'),
	('b38a44f67b9c9fbebc74064f24b7f4edf55b16f33ada89afa244c75d14206a98b06cbfb09d5d376f', 8, 1, 'app', '[]', 0, '2022-08-06 14:16:47', '2022-08-06 14:16:47', '2023-08-06 14:16:47'),
	('bda9cf9f3b3fd962557a27984044b838f38a4ef74803f9da0f8422d92fca0cf5fdf5f26602183acb', 8, 1, 'app', '[]', 0, '2022-08-01 00:35:37', '2022-08-01 00:35:37', '2023-08-01 00:35:37'),
	('c4aa9e36e49a66a6e20645312925fcbd1788d140a9325c88427114209c42433e6364b9230a00a4dd', 8, 1, 'app', '[]', 0, '2022-08-01 13:52:46', '2022-08-01 13:52:46', '2023-08-01 13:52:46'),
	('c5aba19eface49ddf73c302974dff546304766ef4da24744abc3628045b40ed7f2ee45a793af4cec', 8, 1, 'app', '[]', 0, '2022-08-01 01:17:49', '2022-08-01 01:17:49', '2023-08-01 01:17:49'),
	('cb9d995f52aa0c128cce64875d0a3194fb23b2a90a1ad26e1ca92ca458d11861c29ef70c96c7fd5d', 6, 1, 'app', '[]', 0, '2022-07-31 14:32:49', '2022-07-31 14:32:49', '2023-07-31 14:32:49'),
	('cbe443ee4421e08b4e204749836ab11fbb3f93614f4646c80dac3998c0edcb9e25d004bbe09c4192', 8, 1, 'app', '[]', 0, '2022-09-28 08:00:04', '2022-09-28 08:00:04', '2023-09-28 08:00:04'),
	('d53daf1736bdf3711929b0e3ed02858de2d9206753399a8e14b6f0f593407e608b081b6bad58f368', 8, 1, 'app', '[]', 0, '2022-08-01 01:58:33', '2022-08-01 01:58:33', '2023-08-01 01:58:33'),
	('d7e57cbc9e9b51ed57c7c1baf8c85997b1b80bbea4db65d670999a0e2ed32dcfa5ae2ee2f9853c75', 8, 1, 'app', '[]', 0, '2022-08-01 02:00:26', '2022-08-01 02:00:26', '2023-08-01 02:00:26'),
	('db0adf4b76e4579cd15b9a1a4f95079a40a8387d0e5666d45dc3a4637e815ed3e078f9971edd7188', 8, 1, 'app', '[]', 0, '2022-08-01 01:24:48', '2022-08-01 01:24:48', '2023-08-01 01:24:48'),
	('dcb37182ad1a2b4218ffa19631619f085f82c67a40adb5979551e20d46b6efa5067fc06be8dc3170', 8, 1, 'app', '[]', 0, '2022-08-01 02:00:26', '2022-08-01 02:00:26', '2023-08-01 02:00:26'),
	('dce01a0b093d83ba952ac1d0715440636c415df4b001d6e49f17187a3695890d1c6d1b954ac4b012', 8, 1, 'app', '[]', 0, '2022-08-01 01:22:02', '2022-08-01 01:22:02', '2023-08-01 01:22:02'),
	('dcf983119c971f427bff67f1ee0893511af176f89c284216c5bd5d28bf5826fdf35267796aab49df', 8, 1, 'app', '[]', 0, '2022-08-01 00:04:57', '2022-08-01 00:04:57', '2023-08-01 00:04:57'),
	('dda49329b892535dba002720bf0c2078aa55f83c5228900f367e3907f4f0a37707226918490ae176', 8, 1, 'app', '[]', 0, '2022-08-01 00:09:02', '2022-08-01 00:09:02', '2023-08-01 00:09:02'),
	('dda9dc7a9b4343d74591f225b86872981b3b406b4a4d16e1cbd92140ecb322b03e9a5098b9d65e6b', 8, 1, 'app', '[]', 0, '2022-08-01 01:27:32', '2022-08-01 01:27:32', '2023-08-01 01:27:32'),
	('ddde70fb9368a59160c02460f6b13ced06ba5c13b0fa35bc5ff1669f2211c607db7abeb894da2fa0', 8, 1, 'app', '[]', 0, '2022-07-31 23:53:35', '2022-07-31 23:53:35', '2023-07-31 23:53:35'),
	('decac0edfda6acb4f678836d11e501f51ed459b5bb63711d70f018bae452eea121a75a3d0d29ca3b', 8, 1, 'app', '[]', 0, '2022-08-01 00:49:55', '2022-08-01 00:49:55', '2023-08-01 00:49:55'),
	('e58e7aec7c43835869cad60e09eff059c35ba0cc227d6e834859fdbfd3b8cee9428adbee6dccc24c', 5, 1, 'app', '[]', 0, '2022-07-31 00:12:08', '2022-07-31 00:12:08', '2023-07-31 00:12:08'),
	('e6a48dc784fad1e8b1487f6e05f567bbea0a3c7cb9e2aaadeff8ca8835b1a7522a24124b77a25b7f', 8, 1, 'app', '[]', 0, '2022-08-01 00:19:39', '2022-08-01 00:19:39', '2023-08-01 00:19:39'),
	('e6c4908ec1809bc52a4bcec8fd41357c4a7bc834643b9324fc633f383ba8cce35d1efc4709150736', 8, 1, 'app', '[]', 0, '2022-08-01 01:11:56', '2022-08-01 01:11:56', '2023-08-01 01:11:56'),
	('e9be5adfb425573b11494998d5561d7f4ac31b779306aad371ce13205f4b3d188d243857fd45c2da', 5, 1, 'app', '[]', 0, '2022-07-30 08:16:40', '2022-07-30 08:16:40', '2023-07-30 08:16:40'),
	('e9d8e19b0a6d5a285710ac1a52b719ad2ae6d219d6ce4f5f4a15edb442398a8cf329a0f53251a4b3', 8, 1, 'app', '[]', 0, '2022-08-01 02:25:14', '2022-08-01 02:25:14', '2023-08-01 02:25:14'),
	('ed624c792c691cbe56073cbefab5b2d2b8b96f1249b6224c9f66b6f2bda7743fdc4c304862bed5d6', 8, 1, 'app', '[]', 0, '2022-08-01 00:36:24', '2022-08-01 00:36:24', '2023-08-01 00:36:24'),
	('ee67f2f2076a4c759dd9fc1b93de68b5921aad9469aa7b090e69f6efe0db736b01a65b1fa226705e', 5, 1, 'app', '[]', 0, '2022-07-31 05:04:38', '2022-07-31 05:04:38', '2023-07-31 05:04:38'),
	('efd4087e023abe1422d3d4cb76bcddcf2f2dbd6d9dfb28037030e58b43475f4758a931e6ca6e63ed', 8, 1, 'app', '[]', 0, '2022-08-01 02:00:27', '2022-08-01 02:00:27', '2023-08-01 02:00:27'),
	('f022c5ec705bf38a151de1e363e6e13e4c4a65d6b0af71fb907f65081e2c08dcd229d82a573982dc', 8, 1, 'app', '[]', 0, '2022-08-01 02:00:52', '2022-08-01 02:00:52', '2023-08-01 02:00:52'),
	('f1ff7fec7f4af77019c9dcf1700e94df56b499223a025a6a056ba6a1f912418a2d5821852fa2bf02', 8, 1, 'app', '[]', 0, '2022-08-01 02:04:29', '2022-08-01 02:04:29', '2023-08-01 02:04:29'),
	('f36628a62c0c383a5c27e4a45e064265b3d23f89df56ac42f8bffcb43ed2ef5e257718787906d18b', 8, 1, 'app', '[]', 0, '2022-08-01 00:58:35', '2022-08-01 00:58:35', '2023-08-01 00:58:35'),
	('fe2cfe210e988d73c023c551cc3ced97ffe89c58b02ee90517eae3b0e31f8ac97f64580a2c00a4a8', 8, 1, 'app', '[]', 0, '2022-08-01 02:00:18', '2022-08-01 02:00:18', '2023-08-01 02:00:18'),
	('ff6c23f20fb8dd7b3a81ea2e3a1f970ea708e3dbcd6b6dce17528d13104193534b875a2d77ba26b2', 8, 1, 'app', '[]', 0, '2022-08-01 02:00:27', '2022-08-01 02:00:27', '2023-08-01 02:00:27');
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.oauth_auth_codes
CREATE TABLE IF NOT EXISTS `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `client_id` bigint(20) unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.oauth_auth_codes: ~0 rows (approximately)
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.oauth_clients
CREATE TABLE IF NOT EXISTS `oauth_clients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.oauth_clients: ~2 rows (approximately)
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
	(1, NULL, 'Laravel Personal Access Client', 'Nx2OSEDQhQ8ndLxFga1jMuCXFGZaPfbigmbxxBJ1', NULL, 'http://localhost', 1, 0, 0, '2022-07-30 08:15:40', '2022-07-30 08:15:40'),
	(2, NULL, 'Laravel Password Grant Client', 'VENLhHZNHvbelrnLsi1p3NvLVtD4WJfXhfRFZLE6', 'users', 'http://localhost', 0, 1, 0, '2022-07-30 08:15:40', '2022-07-30 08:15:40');
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.oauth_personal_access_clients
CREATE TABLE IF NOT EXISTS `oauth_personal_access_clients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.oauth_personal_access_clients: ~0 rows (approximately)
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
	(1, 1, '2022-07-30 08:15:40', '2022-07-30 08:15:40');
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.oauth_refresh_tokens
CREATE TABLE IF NOT EXISTS `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.oauth_refresh_tokens: ~0 rows (approximately)
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.password_resets: ~0 rows (approximately)
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.personal_access_tokens
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.personal_access_tokens: ~0 rows (approximately)
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.product_carts
CREATE TABLE IF NOT EXISTS `product_carts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.product_carts: ~1 rows (approximately)
/*!40000 ALTER TABLE `product_carts` DISABLE KEYS */;
INSERT INTO `product_carts` (`id`, `image`, `email`, `product_name`, `product_code`, `size`, `color`, `quantity`, `unit_price`, `total_price`, `created_at`, `updated_at`) VALUES
	(3, 'https://lzd-img-global.slatic.net/g/p/44ee17a51ce42f686aafcda93e84f240.jpg_720x720q80.jpg_.webp', 'bannedefused@gmail.com', '【In Stock】KTT Kang White Switch ', '0119-4801', 'Size: M', 'Color: Red', '1', '86.81', '86.81', NULL, NULL);
/*!40000 ALTER TABLE `product_carts` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.product_details
CREATE TABLE IF NOT EXISTS `product_details` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `image_one` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_two` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_three` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seller` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_description` text COLLATE utf8mb4_unicode_ci,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `long_description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.product_details: ~1 rows (approximately)
/*!40000 ALTER TABLE `product_details` DISABLE KEYS */;
INSERT INTO `product_details` (`id`, `product_id`, `image_one`, `image_two`, `image_three`, `seller`, `short_description`, `color`, `size`, `long_description`, `created_at`, `updated_at`) VALUES
	(1, 1, 'https://laz-img-sg.alicdn.com/p/b75cb92b272c0d81f2575c22db4754b0.jpg', 'https://cdn.shopify.com/s/files/1/0275/3649/0561/products/ktt-kang-white-linear-switches-928874.jpg?v=1629500296', 'https://lzd-img-global.slatic.net/g/p/72ca3c354e49c282e61f6fe64ef47866.jpg_2200x2200q80.jpg_.webp', 'Jelly House', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Red, White, Black', 'S,M,L,XL', '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>', NULL, '2022-08-19 14:27:48');
/*!40000 ALTER TABLE `product_details` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.product_lists
CREATE TABLE IF NOT EXISTS `product_lists` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `special_price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subcategory` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remark` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `star` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.product_lists: ~20 rows (approximately)
/*!40000 ALTER TABLE `product_lists` DISABLE KEYS */;
INSERT INTO `product_lists` (`id`, `title`, `price`, `special_price`, `image`, `category`, `subcategory`, `remark`, `brand`, `star`, `product_code`, `created_at`, `updated_at`) VALUES
	(1, '【In Stock】KTT Kang White Switch ', '158.00', '86.81', 'https://lzd-img-global.slatic.net/g/p/44ee17a51ce42f686aafcda93e84f240.jpg_720x720q80.jpg_.webp', 'Electronic Device', 'Mobiles', 'SALE', 'Fekker', '4', '0119-4801', NULL, '2022-08-19 14:27:47'),
	(2, 'Spiderman Gloves', '2.00', 'na', 'https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'COLLECTION', 'Fekker', '4', '0119-4802', NULL, NULL),
	(3, 'KTT Kang', '2.00', 'na', 'https://lzd-img-global.slatic.net/g/p/44ee17a51ce42f686aafcda93e84f240.jpg_720x720q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'NEW', 'Fekker', '4', '0119-4803', NULL, NULL),
	(4, 'KTT Kang', '2.00', 'na', 'https://lzd-img-global.slatic.net/g/p/44ee17a51ce42f686aafcda93e84f240.jpg_720x720q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'NEW', 'Fekker', '4', '0119-4804', NULL, NULL),
	(5, 'KTT Kang', '2.00', 'na', 'https://lzd-img-global.slatic.net/g/p/44ee17a51ce42f686aafcda93e84f240.jpg_720x720q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'NEW', 'Fekker', '4', '0119-4805', NULL, NULL),
	(6, 'KTT Kang', '2.00', 'na', 'https://lzd-img-global.slatic.net/g/p/44ee17a51ce42f686aafcda93e84f240.jpg_720x720q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'NEW', 'Fekker', '4', '0119-4806', NULL, NULL),
	(7, 'KTT Kang', '2.00', 'na', 'https://lzd-img-global.slatic.net/g/p/44ee17a51ce42f686aafcda93e84f240.jpg_720x720q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'NEW', 'Fekker', '4', '0119-4807', NULL, NULL),
	(8, 'KTT Kang', '2.00', 'na', 'https://lzd-img-global.slatic.net/g/p/44ee17a51ce42f686aafcda93e84f240.jpg_720x720q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'NEW', 'Fekker', '4', '0119-4808', NULL, NULL),
	(9, 'KTT Kang', '2.00', '1.00', 'https://lzd-img-global.slatic.net/g/p/44ee17a51ce42f686aafcda93e84f240.jpg_720x720q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'NEW', 'Fekker', '4', '0119-4809', NULL, NULL),
	(10, 'KTT Kang', '2.00', '1.00', 'https://lzd-img-global.slatic.net/g/p/44ee17a51ce42f686aafcda93e84f240.jpg_720x720q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'NEW', 'Fekker', '4', '0119-4810', NULL, NULL),
	(11, 'Spiderman Gloves', '2.00', 'na', 'https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'COLLECTION', 'Fekker', '4', '0119-4811', NULL, NULL),
	(12, 'Spiderman Gloves', '2.00', 'na', 'https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'COLLECTION', 'Fekker', '4', '0119-4812', NULL, NULL),
	(13, 'Spiderman Gloves', '2.00', '1.00', 'https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'COLLECTION', 'Fekker', '4', '0119-4813', NULL, NULL),
	(14, 'Spiderman Gloves', '2.00', '1.00', 'https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'COLLECTION', 'Fekker', '4', '0119-4814', NULL, NULL),
	(15, 'Spiderman Gloves', '2.00', '1.00', 'https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'COLLECTION', 'Fekker', '4', '0119-4815', NULL, NULL),
	(17, 'Audioengine A5+ Wireless Powered Speaker', '25,990.00', '23,790.00', 'https://lzd-img-global.slatic.net/g/p/263d875cc64ef73636c4f277abb8c702.png_400x400q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'SALE', 'Fekker', '4', '0119-4816', NULL, NULL),
	(18, 'PAPITE 【In Stock】 Heroes Spider Man', '200.00', '124.00', 'https://lzd-img-global.slatic.net/g/p/2e50eb96f30512a009df87162f8c66a3.jpg_400x400q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'SALE', 'Fekker', '4', '0119-4817', NULL, NULL),
	(19, 'Tecware Veil 80 TKL Black 3 mode BT Wireless', '5,110.00', 'na', 'https://lzd-img-global.slatic.net/g/p/08bd22764dd0f5dcfd1ef98be484ab6e.jpg_400x400q80.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'SALE', 'Fekker', '4', '0119-4818', NULL, NULL),
	(20, 'JMK Kryotox 205g0', '5,095.00', '4,177.00', 'https://lzd-img-global.slatic.net/g/p/195d527059b2f16c748297ad55a6ef41.jpg_400x400q75.jpg_.webp', 'Sports & Lifestyle', 'Boxing', 'SALE', 'Fekker', '4', '0119-4819', NULL, NULL),
	(21, 'JMK Kryotox 205g0', '12,990.00', '9,990.00', 'https://lzd-img-global.slatic.net/g/p/c0ddf694c73b456fcfb5af75a20e2061.png_400x400q75.png_.webp', 'Sports & Lifestyle', 'Boxing', 'SALE', 'Fekker', '4', '0119-4820', NULL, NULL);
/*!40000 ALTER TABLE `product_lists` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.product_reviews
CREATE TABLE IF NOT EXISTS `product_reviews` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reviewer_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reviewer_photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reviewer_rating` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reviewer_comments` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.product_reviews: ~0 rows (approximately)
/*!40000 ALTER TABLE `product_reviews` DISABLE KEYS */;
INSERT INTO `product_reviews` (`id`, `product_code`, `product_name`, `reviewer_name`, `reviewer_photo`, `reviewer_rating`, `reviewer_comments`, `created_at`, `updated_at`) VALUES
	(5, '0119-4801', 'JMK Kryotox 205g0', 'Carl Caraan', NULL, '5', 'This is best', NULL, NULL);
/*!40000 ALTER TABLE `product_reviews` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.sessions: ~1 rows (approximately)
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
	('3NZuHWV2LBAVsXTiKv0rmyvalLuWOwyRq4KQPtuq', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36', 'YTozOntzOjk6Il9wcmV2aW91cyI7YToxOntzOjM6InVybCI7czoyNzoiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2xvZ2luIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo2OiJfdG9rZW4iO3M6NDA6InV3M2xjMlE0SG51WW40a2ZJbU1BREZvWlR3RW5QYVdBTU1tb2ttOGkiO30=', 1661093209);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.site_infos
CREATE TABLE IF NOT EXISTS `site_infos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `about` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `privacy` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `android_app_link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ios_app_link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `facebook_link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `twitter_link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `instagram_link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `copyright_text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.site_infos: ~0 rows (approximately)
/*!40000 ALTER TABLE `site_infos` DISABLE KEYS */;
INSERT INTO `site_infos` (`id`, `about`, `privacy`, `address`, `android_app_link`, `ios_app_link`, `facebook_link`, `twitter_link`, `instagram_link`, `copyright_text`, `created_at`, `updated_at`) VALUES
	(1, '<p>A 22-year-old Full Stack Web Developer based in Laguna, Philippines with background knowledge mostly in React and Laravel. Skilled in Frontend technologies such as Html, CSS, Javascript, Bootstrap, and Backend technologies such as Php, Python, NodeJs, and MySQL. Learning a variety of scripting languages and technology stacks is one of my strengths. I am also a hard worker and a team player. I am looking for a challenging opportunity that will enable me to use my skills and abilities to achieve a challenging goal.</p>', '<h4>Privacy Policy for LazapeePH</h4>\r\n<p>At Lazapee, accessible from https://lazapee-ph.netlify.app/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Lazapee and how we use it.</p>\r\n<p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>\r\n<p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Lazapee. This policy is not applicable to any information collected offline or via channels other than this website.</p>\r\n<h4>Consent</h4>\r\n<p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>\r\n<h4>Information we collect</h4>\r\n<p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>\r\n<p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>\r\n<p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>\r\n<h4>How we use your information</h4>\r\n<p>We use the information we collect in various ways, including to:</p>\r\n<ul>\r\n<li>Provide, operate, and maintain our website</li>\r\n<li>Improve, personalize, and expand our website</li>\r\n<li>Understand and analyze how you use our website</li>\r\n<li>Develop new products, services, features, and functionality</li>\r\n<li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>\r\n<li>Send you emails</li>\r\n<li>Find and prevent fraud</li>\r\n</ul>\r\n<h4>Log Files</h4>\r\n<p>Lazapee follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services\' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users\' movement on the website, and gathering demographic information.</p>\r\n<h4>Advertising Partners Privacy Policies</h4>\r\n<p>You may consult this list to find the Privacy Policy for each of the advertising partners of Lazapee.</p>\r\n<p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Lazapee, which are sent directly to users\' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>\r\n<p>Note that Lazapee has no access to or control over these cookies that are used by third-party advertisers.</p>\r\n<h4>Third Party Privacy Policies</h4>\r\n<p>Lazapee\'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.{" "}</p>\r\n<p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers\' respective websites.</p>\r\n<h4>CCPA Privacy Rights (Do Not Sell My Personal Information)</h4>\r\n<p>Under the CCPA, among other rights, California consumers have the right to:</p>\r\n<p>Request that a business that collects a consumer\'s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>\r\n<p>Request that a business delete any personal data about the consumer that a business has collected.</p>\r\n<p>Request that a business that sells a consumer\'s personal data, not sell the consumer\'s personal data.</p>\r\n<p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>\r\n<h4>GDPR Data Protection Rights</h4>\r\n<p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>\r\n<p>The right to access &acirc;&euro;&ldquo; You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>\r\n<p>The right to rectification &acirc;&euro;&ldquo; You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>\r\n<p>The right to erasure &acirc;&euro;&ldquo; You have the right to request that we erase your personal data, under certain conditions.</p>\r\n<p>The right to restrict processing &acirc;&euro;&ldquo; You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>\r\n<p>The right to object to processing &acirc;&euro;&ldquo; You have the right to object to our processing of your personal data, under certain conditions.</p>\r\n<p>The right to data portability &acirc;&euro;&ldquo; You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>\r\n<p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>\r\n<h4>Children\'s Information</h4>\r\n<p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>\r\n<p>Lazapee does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>', 'Lazada Southeast Asia', 'http://localhost:3000/android', 'http://localhost:3000/ios', 'https://www.facebook.com/', 'https://twitter.com/', 'https://www.instagram.com/', '&copy; Lazapee 2022', NULL, '2022-08-20 13:35:01');
/*!40000 ALTER TABLE `site_infos` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.subcategories
CREATE TABLE IF NOT EXISTS `subcategories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subcategory_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.subcategories: ~6 rows (approximately)
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` (`id`, `category_name`, `subcategory_name`, `created_at`, `updated_at`) VALUES
	(1, 'Electronic Device', 'Mobiles', NULL, NULL),
	(2, 'Electronic Device', 'Desktop', NULL, NULL),
	(3, 'Electronic Device', 'Laptop', NULL, NULL),
	(4, 'Sports & Lifestyle', 'Boxing', NULL, NULL),
	(5, 'Groceries & Pets', 'Dogs', NULL, '2022-08-16 07:46:28');
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_team_id` bigint(20) unsigned DEFAULT NULL,
  `profile_photo_path` varchar(2048) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.users: ~2 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `two_factor_confirmed_at`, `remember_token`, `current_team_id`, `profile_photo_path`, `created_at`, `updated_at`) VALUES
	(8, 'Admin', 'Account', 'bannedefused@gmail.com', NULL, '$2y$10$axi4hlngG1wY.GzVRZzFYeTd1cdWdeZRIQG0X3IdFAjmNkrYCOa5m', NULL, NULL, NULL, NULL, NULL, '202208130003jordi2.jpg', '2022-07-31 23:50:45', '2022-08-13 12:21:33'),
	(9, 'Carl', 'Carl', 'bannedefused1@gmail.com', NULL, '$2y$10$HVnv4DNzjpoiKkRtGd3v6ObscdmkVreZtOqr46WI2sIRUrcVPutjm', NULL, NULL, NULL, NULL, NULL, NULL, '2022-08-01 12:28:12', '2022-08-01 12:28:12');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table laravel8-react-ecommerce.visitors
CREATE TABLE IF NOT EXISTS `visitors` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `visit_time` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `visit_date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=170 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table laravel8-react-ecommerce.visitors: ~8 rows (approximately)
/*!40000 ALTER TABLE `visitors` DISABLE KEYS */;
INSERT INTO `visitors` (`id`, `ip_address`, `visit_time`, `visit_date`, `created_at`, `updated_at`) VALUES
	(159, '127.0.0.1', '04:40:42pm', '28-09-2022', NULL, NULL),
	(160, '127.0.0.1', '04:41:07pm', '28-09-2022', NULL, NULL),
	(161, '127.0.0.1', '04:44:38pm', '28-09-2022', NULL, NULL),
	(162, '127.0.0.1', '04:44:44pm', '28-09-2022', NULL, NULL),
	(163, '127.0.0.1', '04:45:39pm', '28-09-2022', NULL, NULL),
	(164, '127.0.0.1', '04:49:09pm', '28-09-2022', NULL, NULL),
	(165, '127.0.0.1', '04:49:22pm', '28-09-2022', NULL, NULL),
	(166, '127.0.0.1', '04:50:41pm', '28-09-2022', NULL, NULL),
	(167, '127.0.0.1', '04:51:14pm', '28-09-2022', NULL, NULL),
	(168, '127.0.0.1', '06:02:24pm', '30-09-2022', NULL, NULL),
	(169, '127.0.0.1', '06:10:07pm', '30-09-2022', NULL, NULL);
/*!40000 ALTER TABLE `visitors` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
