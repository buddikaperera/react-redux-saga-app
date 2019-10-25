/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : react_demo

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-10-25 05:23:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `post_txt` text NOT NULL,
  `date_posted` datetime NOT NULL,
  `is_active` char(1) DEFAULT '1',
  `likes` int(4) DEFAULT NULL COMMENT '''0''',
  `dislikes` int(6) DEFAULT NULL COMMENT '''0''',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES ('40', 'We’ll assume that you have some familiarity with HTML and JavaScript, but you should be able to follow along even if you’re coming from a different programming language. We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.', '2019-10-24 12:56:23', '1', '4', '0');
INSERT INTO `posts` VALUES ('41', 'In React, function components are a simpler way to write components that only contain a render method and don’t have their own state. Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered. Function components are less tedious to write than classes, and many components can be expressed this way.', '2019-10-25 00:06:41', '1', '2', '0');
INSERT INTO `posts` VALUES ('42', 'Placing the history state into the Game component lets us remove the squares state from its child Board component. Just like we “lifted state up” from the Square component into the Board component, we are now lifting it up from the Board into the top-level Game component. This gives the Game component full control over the Board’s data, and lets it instruct the Board to render previous turns from the history.', '2019-10-25 00:07:28', '1', '1', '0');

-- ----------------------------
-- Table structure for posts_favourites
-- ----------------------------
DROP TABLE IF EXISTS `posts_favourites`;
CREATE TABLE `posts_favourites` (
  `fid` int(6) NOT NULL AUTO_INCREMENT,
  `post_id` text NOT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of posts_favourites
-- ----------------------------
INSERT INTO `posts_favourites` VALUES ('1', '33');
INSERT INTO `posts_favourites` VALUES ('2', '41');
INSERT INTO `posts_favourites` VALUES ('3', '40');
INSERT INTO `posts_favourites` VALUES ('4', '40');
INSERT INTO `posts_favourites` VALUES ('5', '33');
INSERT INTO `posts_favourites` VALUES ('6', '33');
INSERT INTO `posts_favourites` VALUES ('7', '42');
INSERT INTO `posts_favourites` VALUES ('8', '44');
INSERT INTO `posts_favourites` VALUES ('9', '45');
INSERT INTO `posts_favourites` VALUES ('10', '45');
INSERT INTO `posts_favourites` VALUES ('11', '40');
INSERT INTO `posts_favourites` VALUES ('12', '41');
INSERT INTO `posts_favourites` VALUES ('13', '41');
INSERT INTO `posts_favourites` VALUES ('14', '40');
INSERT INTO `posts_favourites` VALUES ('15', '42');
INSERT INTO `posts_favourites` VALUES ('16', '43');
