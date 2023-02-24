# ************************************************************
# Sequel Ace SQL dump
# Version 20046
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: localhost (MySQL 8.0.32)
# Database: harrydb
# Generation Time: 2023-02-22 18:12:01 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table characters
# ------------------------------------------------------------

DROP TABLE IF EXISTS `characters`;

CREATE TABLE `characters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(150) DEFAULT NULL,
  `lastname` varchar(150) DEFAULT NULL,
  `imageUrl` text,
  `houses_id` int NOT NULL,
  PRIMARY KEY (`id`,`houses_id`),
  KEY `fk_characters_houses_idx` (`houses_id`),
  CONSTRAINT `fk_characters_houses` FOREIGN KEY (`houses_id`) REFERENCES `houses` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;

INSERT INTO `characters` (`id`, `firstname`, `lastname`, `imageUrl`, `houses_id`)
VALUES
	(1,'Harry','Potter','https://ec56229aec51f1baff1d-185c3068e22352c56024573e929788ff.ssl.cf1.rackcdn.com/attachments/large/8/0/6/004913806.jpg',1),
	(2,'draco','malfoy','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7_RZbaIJm7xcksTJllCDSSUvbb5boWTD_g&usqp=CAU',2),
	(3,'Hermione','granger','https://anaelledigloria.fr/wp-content/uploads/2023/02/Hermione-1-768x1024.jpg',1),
	(4,'Ron','wisley','https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ron_Weasley_poster.jpg/220px-Ron_Weasley_poster.jpg',1),
	(5,'samy','malfoy','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7_RZbaIJm7xcksTJllCDSSUvbb5boWTD_g&usqp=CAU',2);

/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table characters_has_spells
# ------------------------------------------------------------

DROP TABLE IF EXISTS `characters_has_spells`;

CREATE TABLE `characters_has_spells` (
  `characters_id` int NOT NULL,
  `spells_id` int NOT NULL,
  PRIMARY KEY (`characters_id`,`spells_id`),
  KEY `fk_characters_has_spells_spells1_idx` (`spells_id`),
  KEY `fk_characters_has_spells_characters1_idx` (`characters_id`),
  CONSTRAINT `fk_characters_has_spells_characters1` FOREIGN KEY (`characters_id`) REFERENCES `characters` (`id`),
  CONSTRAINT `fk_characters_has_spells_spells1` FOREIGN KEY (`spells_id`) REFERENCES `spells` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;



# Dump of table houses
# ------------------------------------------------------------

DROP TABLE IF EXISTS `houses`;

CREATE TABLE `houses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `houseName` varchar(100) DEFAULT NULL,
  `housePoint` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

LOCK TABLES `houses` WRITE;
/*!40000 ALTER TABLE `houses` DISABLE KEYS */;

INSERT INTO `houses` (`id`, `houseName`, `housePoint`)
VALUES
	(1,'Griffondor',NULL),
	(2,'Serpentard',NULL),
	(3,'poufsouffle',NULL),
	(4,'Serdaigle',NULL);

/*!40000 ALTER TABLE `houses` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table spells
# ------------------------------------------------------------

DROP TABLE IF EXISTS `spells`;

CREATE TABLE `spells` (
  `id` int NOT NULL AUTO_INCREMENT,
  `spellName` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;



# Dump of table spellType
# ------------------------------------------------------------

DROP TABLE IF EXISTS `spellType`;

CREATE TABLE `spellType` (
  `id` int NOT NULL AUTO_INCREMENT,
  `typeName` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;



# Dump of table spellType_has_spells
# ------------------------------------------------------------

DROP TABLE IF EXISTS `spellType_has_spells`;

CREATE TABLE `spellType_has_spells` (
  `spellType_id` int NOT NULL,
  `spells_id` int NOT NULL,
  PRIMARY KEY (`spellType_id`,`spells_id`),
  KEY `fk_spellType_has_spells_spells1_idx` (`spells_id`),
  KEY `fk_spellType_has_spells_spellType1_idx` (`spellType_id`),
  CONSTRAINT `fk_spellType_has_spells_spells1` FOREIGN KEY (`spells_id`) REFERENCES `spells` (`id`),
  CONSTRAINT `fk_spellType_has_spells_spellType1` FOREIGN KEY (`spellType_id`) REFERENCES `spellType` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
