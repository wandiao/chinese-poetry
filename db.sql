CREATE DATABASE IF NOT EXISTS poetry_story DEFAULT CHARSET utf8mb4;

USE poetry_story;

SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `poems`;
CREATE TABLE `poems` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `dynasty` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '词所属朝代（S-宋代, T-唐代）',
  `author` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `poems_author`;
CREATE TABLE `poems_author` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro` text COLLATE utf8mb4_unicode_ci,
  `short_intro` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dynasty` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '作者所属朝代（T-唐代,S-宋代）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `poetry`;
CREATE TABLE `poetry` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `yunlv_rule` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `dynasty` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '诗所属朝代（S-宋代, T-唐代）',
  `author` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `poetry_author`;
CREATE TABLE `poetry_author` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro` text COLLATE utf8mb4_unicode_ci,
  `dynasty` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '作者所属朝代（T-唐代,S-宋代）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;