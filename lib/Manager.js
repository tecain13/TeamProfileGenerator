//Managers are employees, require same information
const Employee = require('../lib/employee.js');

//require the classes enumerated in the Employee.js file for inheritance
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = "Manager";
        //define the role explicitly in this instance
        this.officeNumber = officeNumber
    };

    getRole() {
        return this.role
    }

    getOfficeNumber() {
        return this.officeNumber
    }


}

module.exports = Manager;


// The other three classes will extend Employee.
// In addition to Employee's properties and methods, Manager will also have:
// officeNumber
// getRole() // Overridden to return 'Manager'