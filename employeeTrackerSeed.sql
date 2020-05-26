-- ==== EMPLOYEE =====
USE employee_db;

INSERT INTO
    department (name)
VALUES
    ('Sales'),
    ('Developer'),
    ('Web Experience'),
    ('Marketing');

INSERT INTO
    role (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Developer', 150000, 2),
    ('Software Developer', 120000, 2),
    ('Web Experience Manager', 160000, 3),
    ('UI Designer', 125000, 3),
    ('Marketing Team Lead', 250000, 4),
    ('Online Marketer', 190000, 4);

INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Jane', 'Doe', 1, NULL),
    ('Bruce', 'Chan', 2, 1),
    ('Katie', 'Rodgers', 3, NULL),
    ('Curtis', 'Reed', 4, 3),
    ('Scott', 'McCall', 5, NULL),
    ('Malia', 'Tate', 6, 5),
    ('Stiles', 'Stilinski', 7, NULL),
    ('Tom', 'Ford', 8, 7);