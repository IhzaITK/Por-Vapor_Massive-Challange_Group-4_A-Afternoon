-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (12,'/uploads/1717572053824.png','1000000','vape1','vape1','Pod',12),(13,'/uploads/1717572076508.png','1000000','vape2','vape2','Pod',10),(14,'/uploads/1717572106659.png','30000','vape3','vape3','Pod',13),(15,'/uploads/1717572129702.png','100000','liquid','liquid','Liquid',10),(16,'/uploads/1717572223146.png','2000000','vape5','vape5','Liquid',23),(17,'/uploads/1717576991289.png','2000000','vape6','vape','Pod',200),(18,'/uploads/1717633652294.png','1000','vape8','vape8','Catridge',1000),(20,'/uploads/1718169941036.png','35000','catrdige','catridge','Catridge',12),(21,'/uploads/1718175952944.png','100000','Liquid ceri','Liquid cheri','Liquid',12),(22,'/uploads/1718177057146.png','35000','coil2','coil','Coil',10);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('user','admin') DEFAULT 'user',
  `email` varchar(255) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'test','$2b$10$7TzTiz6SzI45irpLq5GI6.ewX3W/L.RCrrH1mKyWme2TZJGy1Mt.K','admin',NULL,NULL,'2024-06-04 09:01:09','2024-06-04 17:01:28',NULL,NULL),(5,'ihza','$2b$10$bvY76UnS6q3ddK/fM69HoO9tKM1b7Z3Isax3PTEzndz2wfx/TXjb6','admin','admin@gmail.com',NULL,'2024-06-04 09:01:09','2024-06-12 15:10:17',NULL,NULL),(6,'serli','$2b$10$8rvfuvRIeZnXbb3LjtDKLOA.aCG7p4lnRLGDbVoWuljSY1FRGdmra','user',NULL,NULL,'2024-06-04 09:01:09','2024-06-04 17:01:28',NULL,NULL),(8,'rio','$2b$10$5lE6LHogdvbjfmJRknU4H.59RoeS2HdS2xfEzRU2UWeQlprwJEopq','user','test@gmail.com',NULL,'2024-06-04 09:01:09','2024-06-04 17:09:31',NULL,NULL),(9,'ihza23','$2b$10$zLl0XSj9key2J3BXyTvSCOjmzJK5UqBXfR6o.mOooKaeigZ4H/pYy','user','kirizika7@gmail.com','2001-08-04','2024-06-04 09:32:13','2024-06-04 17:32:13',NULL,NULL),(10,'Shiratsui31','$2b$10$Wb6BEYWQ7P1ERYvv4WEEqOPcQUm1g6D.gUnTH6JM33ZPDG0cDgSEq','user','kirizika51@gmail.com',NULL,'2024-06-04 09:44:39','2024-06-04 17:44:39',NULL,NULL),(11,'ada','$2b$10$eyXC.2OZN.qBFM/ThdxZh.jYNeDZXvJlmgPVBjb/VovQ883hEZc1S','user','123@gmail.com',NULL,'2024-06-04 12:59:17','2024-06-04 20:59:17',NULL,NULL),(12,'ihza','$2b$10$sKqelxKz3TX8mWHxy7cvAuFBmYf/s8NMiAZVlQgV/PgOBwLMAvsyK','user','tes23131@gmail.com',NULL,'2024-06-05 07:11:45','2024-06-05 15:11:45',NULL,NULL),(13,'intan','$2b$10$RAlZCE2cZGu89H0qbbVhAuwaZrUnDW8EO/HO8A.nl8IeZte1UjNmW','user','intan@gmail.com',NULL,'2024-06-05 07:19:22','2024-06-05 15:19:22',NULL,NULL),(14,'ihza','$2b$10$NQqAKUU6UbDW1PV/PhVgkePLr6Tf8vCY/wVFS00kcVSxFEHiWAmc2','user','ihza23@gmail.com',NULL,'2024-06-05 08:39:43','2024-06-05 16:39:43',NULL,NULL),(19,'dimas','$2b$10$CEDxBNiSCi/41OKf7YtfVuQtk/lwoAtK8bRNX8vg9bvo9W33F4X0y','user','dimas@gm.com',NULL,'2024-06-12 07:21:30','2024-06-12 15:21:30',NULL,NULL),(20,'ihza','$2b$10$T1Efd41afxXpuA5ut4APk.ZFtiNsSMsMtzFUBUZQp0sHw.1f721oO','user','ihza@gmail.com',NULL,'2024-07-01 12:42:28','2024-07-01 20:42:28',NULL,NULL),(21,'ihza','$2b$10$hWEMtwgYGb23GMpK1/BX5eJXBOFFBQ08due0TWMndYVHmT8srndoq','user','ihza@gmail.com',NULL,'2024-07-01 12:42:47','2024-07-01 20:42:47',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-03 15:49:22
