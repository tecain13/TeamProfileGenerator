//Interns are employees, require same information
const Employee = require('../lib/employee.js');

//require the classes enumerated in the Employee.js file for inheritance
class Intern extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.role = "Intern";
        //define the role explicitly in this instance
        this.school = school;
    }

    getSchool() {
        return this.School
    }
}

module.exports = Intern;

// The other three classes will extend Employee.
// In addition to Employee's properties and methods, Intern will also have:
// school
// getSchool()
// getRole() // Overridden to return 'Intern'