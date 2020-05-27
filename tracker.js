const {
    prompt
} = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

init();

function init() {
    const logoText = logo({
        name: "Employee Tracker"
    }).render();
    console.log(logoText);
    loadMainPrompts();
}

async function loadMainPrompts() {
    const {
        choice
    } = await prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do:",
        choices: [{
                name: "Add Departments",
                value: "addDepartments"
            },
            {
                name: "Add Roles",
                value: "addRoles"
            },
            {
                name: "Add Employees",
                value: "addEmployees"
            },
            {
                name: "View Department",
                value: "viewDepartments"
            },
            {
                name: "View Roles",
                value: "viewRoles",
            },
            {
                name: "View Employees",
                value: "viewEmployees"
            },
            {
                name: "Exit",
                value: "quit"
            }
        ]
    });

    switch (choice) {
        case "addDepartments":
            return addDepartments();
        case "addRoles":
            return addRoles();
        case "addEmployees":
            return addEmployees();

        case "viewDepartments":
            return showDepartments();
        case "viewRoles":
            return showRoles();
        case "viewEmployees":
            return showEmployees();
        case "quit":
            quit();
    }
    console.log(loadMainPrompts);
}


// ADD: DEPARTMENT | ROLES | EMPLOYEE 

async function addDepartments(){
    const department = await prompt (
        [
            {
                name: "Department",
                type: "input",
                message: "Please type the department you would like to add:",
            },
            
        ]
    )
        await db.insertDepartment(department);
        console.log("Department successfully added!");
        loadMainPrompts();
}

async function addRoles(){
    const role = await prompt (
        [
            {
                name: "role",
                value: role,
                type: "input",
                message: "Please type of role would you like to add:",
            },
            {
                name: "title",
                value: title,
                type: "input",
                message: "Please type the title would you like to add:",
            },
            {
                name: "salary",
                value: salary,
                type: "input",
                message: "Please type the salary would you like to add:",
            },
            {
                name: "department id",
                value: department_id,
                type: "input",
                message: "Please type the department idwould you like to add:",
            }
            
        ]
    )
        await db.insertRoles(role, title, salary, department_id);
        console.log("Department successfully added!");
        loadMainPrompts();
}

async function addEmployees(){
    const employee = await prompt (
        [
            {
                name: "first_name",
                value: first_name,
                type: "input",
                message: "Please enter first name:",
            },
            {
                name: "last_name",
                value: last_name,
                type: "input",
                message: "Please enter last name:",
            },
            {
                name: "role_id",
                value: role_id,
                type: "input",
                message: "Please enter id:",
            },
            {
                name: "manager_id",
                value: manager_id,
                type: "input",
                message: "Please enter manager id:",
            },
        ]
    )
        await db.insertEmployee(employee);
        console.log("Employee successfully added!");
        loadMainPrompts();
}


// VIEW: DEPARTMENT | ROLES | EMPLOYEE 

async function showDepartments() {
    const departments = await db.getAllDepartments();
    console.log("/n");
    console.table(departments);
    loadMainPrompts();
}

async function showRoles() {
    const roles = await db.getAllRoles();
    console.log("/n");
    console.table(roles);
    loadMainPrompts();
}

async function showEmployees() {
    const employees = await db.getAllEmployees();
    console.log("/n");
    console.table(employees);
    loadMainPrompts();
}


function quit() {
    console.log("Good-bye!");
    process.exit();
}
