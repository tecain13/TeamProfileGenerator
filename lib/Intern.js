//Interns are employees, require same information
const Employee = require('../lib/employee.js');

//require the classes enumerated in the Employee.js file for inheritance
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        //define the role explicitly in this instance
        this.school = school;
    }

    getRole() {
        return "Intern"
    }

    getSchool() {
        return this.school
    }
}

module.exports = Intern;

// The other three classes will extend Employee.
// In addition to Employee's properties and methods, Intern will also have:
// school
// getSchool()
// getRole() // Overridden to return 'Intern'