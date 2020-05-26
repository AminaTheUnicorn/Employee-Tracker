DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);
 
 CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (30) NULL,
    salary DECIMAL (10,2) NULL,
    department_id INT (10) NULL,
    PRIMARY KEY (id)
); 

CREATE TABLE department(
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(30) NULL,
   PRIMARY KEY (id)
);


-- ==== ALTER TABLE ====


-- constraint fk_role FOREIGN KEY(role_id) REFERENCES roles (roles_id);
 
-- alter table employee
-- ADD FOREIGN KEY(manager_id)
-- REFERENCES roles (roles_id);

-- alter table roles
-- ADD FOREIGN KEY(department_id) 
-- REFERENCES department (departmentName_id);