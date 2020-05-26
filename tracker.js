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
        choices: [
            {
                name: "Add departments",
                value: "addDepartments"
            },
            {
                name: "Add roles",
                value: "addRoles"
            },
            {
                name: "Add employees",
                value: "addEmployees"
            },

            {
                name: "View departments",
                value: "viewDepartments"
            },
            {
                name: "View roles",
                value: "viewRoles"
            },
            {
                name: "View employees",
                value: "viewEmployees"
            },
            {
                name: "Exit",
                value: "exit"
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
        case "exit":
            quit();
    }
    console.log(loadMainPrompts);
}

// ADD: DEPARTMENT | ROLES | EMPLOYEE 

async function addDepartments(){
    let {department} = await prompt (
        [
            {
                name: "Department",
                type: "input",
                message: "Please type the department you would like to add:",
            },
            
        ]
    )
        await db.insertDepartment(department);
        console.log("Your department was created successfully!");
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