const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

//inquirer will go here

init();

// Display logo text, load main prompts
function init() {
  const logoText = logo({ name: "Employee Tracker" }).render();

  console.log(logoText);

  loadMainPrompts();
}


async function loadMainPrompts() {
  const { choice } = await prompt({
    name: "choice",
    type: "list",
    message: "Would you like to:",
    choices: ["View departments", "View roles", "View employees",
      "Update employee", "Update roles", "Add departments",
      "Add roles", "Add employees"],
  });



switch (choice) {

  case "viewDepartments":
    return viewDepartments();
  case "viewRoles":
    return viewRoles();
  case "viewEmployees":
    return viewEmployees();
  case "EXIT":
    quit();
  }
}
async function viewDepartments() {
  const departments = await db.getAllDepartments();

  console.log("\n");

  console.table(departments);

  loadMainPrompts();
}


function quit() {
  console.log("Goodbye!");
  process.exit();
}
