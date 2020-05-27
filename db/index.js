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
  return this.connection.query("INSERT INTO department SET ?", department);

}

insertRoles(role) {
    return this.connection.query("INSERT INTO role SET ?", {
      role: title, 
      role: salary, 
      role: department_id})
  }

  insertEmployee(first_name, last_name,role_id, manager_id) {
    return this.connection.query("INSERT INTO employee SET ?",{
        first_name: first_name, 
        last_name: last_name,
        role_id: role_id, 
        manager_id: manager_id
    })
  
  }
  

}

module.exports = new DB(connection);