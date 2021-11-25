CREATE DATABASE IF NOT EXISTS `Trafico` DEFAULT CHARACTER SET utf8;

USE `Trafico`;

DROP TABLE IF EXISTS `Budgets`;
CREATE TABLE `Budgets` (
  `id` int(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `message` varchar(500) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;