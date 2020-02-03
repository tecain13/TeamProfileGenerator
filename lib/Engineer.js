//Engineers are employees, require same information
const Employee = require('../lib/employee.js');

//require the classes enumerated in the Employee.js file for inheritance
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.role = "Engineer";
        //define the role explicitly in this instance
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;


// The other three classes will extend Employee.
// In addition to Employee's properties and methods, Engineer will also have:
// github  // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'