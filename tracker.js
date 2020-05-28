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
            break;
        case "addRoles":
            return addRoles();
            break;
        case "addEmployees":
            return addEmployees();
            break;

        case "viewDepartments":
            return showDepartments();
            break;
        case "viewRoles":
            return showRoles();
            break;
        case "viewEmployees":
            return showEmployees();
            break;
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
                name: "name",
                type: "input",
                message: "Please type the department you would like to add:",
            },
            
        ]
    );
        await db.insertDepartment(department);
        console.log("Department successfully added!");
        loadMainPrompts();
}

async function addRoles(){
    let {title, salary, department_id} = await prompt (
        [
          
            {
                name: "title",
                type: "input",
                message: "Please type the title would you like to add:",
            },
            {
                name: "salary", 
                type: "input",
                message: "Please type the salary would you like to add:",
            },
            {
                name: "department_id",
                type: "input",
                message: "Please type the department would you like to add:",
            }
            
        ]
    )
    await console.log(title, salary, department_id)
        await db.insertRoles(title, salary, department_id);
        console.log("Department successfully added!");
        loadMainPrompts();
}

async function addEmployees(){
    let {first_name, last_name, role_id, manager_id} = await prompt (
        [
            {
                name: "first_name",
                type: "input",
                message: "Please enter first name:",
            },
            {
                name: "last_name",
                type: "input",
                message: "Please enter last name:",
            },
            {
                name: "role_id",
                type: "input",
                message: "Please enter id:",
            },
            {
                name: "manager_id",
                type: "input",
                message: "Please enter manager id:",
            },
        ]
    )
        await db.insertEmployee(first_name, last_name, role_id, manager_id);
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
