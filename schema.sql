DROP DATABASE IF EXISTS portfolio ;
CREATE DATABASE portfolio ;
USE portfolio ;

CREATE TABLE projects (
  id int NOT NULL AUTO_INCREMENT,
  projectName VARCHAR (40),
  projectPics NVARCHAR (100),
  projectDescription VARCHAR (1000),
  projectGithub VARCHAR (1000),
  PRIMARY KEY (id)
);

