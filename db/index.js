const connection = require("./connections");
// mySQL queries go here!

class DB {
  // Keeping a reference to the connection on the class in case we need it later
  constructor(connection) {
    this.connection = connection;
  }
  getAllDepartments() {
    return this.connection.query("SELECT * FROM department");
  }
  getAllRoles() {
    return this.connection.query("SELECT * FROM role");
  }
  getAllEmployees() {
    return this.connection.query("SELECT * FROM employee");
  }

insertDepartment(department) {
  return this.connection.query("INSERT INTO department SET ?",{
    department: department,
  })
}

insertRoles(role, title, salary,department_id) {
  return this.connection.query("INSERT INTO role SET ?",{
    role: role,
    title: title,
    salary: salary,
    department_id: department_id,
  })
}


}

module.exports = new DB(connection);