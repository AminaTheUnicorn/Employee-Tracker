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
  getAllEmployee() {
    return this.connection.query("SELECT * FROM employee");
  }





}

module.exports = new DB(connection);