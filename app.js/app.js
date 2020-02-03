const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const GenerateHTML = require("./templates/generateHTML.js");
const fs = require("fs");


const teamArray = [];
let teamHTML = "";

init();


function init() {

    let check = "Yes";
    do {
        try {
            let { name } = await inputName();
            let { id } = await inputId();
            let { email } = await inputEmail();
            let { role } = await inputRole();

            let supplementalInfo;

            if (role === "Manager") {
                let supplementalInfo = await inputOffice();
                let manager = new Manager(name, id, email, supplementalInfo.office)
                teamArray.push(manager);
            }

            else if (role === "Engineer") {

                let supplementalInfo = await inputUsername();
                let engineer = new Engineer(name, id, email, supplementalInfo.username);
                teamArray.push(engineer);
            }

            else if (role === "Intern") {
                let supplementalInfo = await inputSchool();
                let intern = new Intern(name, id, email, supplementalInfo.school);
                teamArray.push(intern);
            }

            check = await addEmployee();

        }

        catch (err) {
            console.log(err);
        }

    } while (check.additionalEmployee === "Yes");
    iterateArray(teamArray);
    createHTML(teamHTML);
};


function inputName() {
    const name = inquirer.prompt([{
        type: "input",
        message: "Please enter the employee's full name.",
        name: "name"
    }])

    return name;
}

function inputID() {
    const ID = inquirer.prompt([{
        type: "input",
        message: "Please enter the employee's ID number.",
        name: "id"
    }])

    return ID;
};

function inputEmail() {
    const email = inquirer.prompt([{
        type: "input",
        message: "Please enter the employee's email.",
        name: "email"
    }])

    return email;
};

function inputRole() {
    const role = inquirer.prompt([{
        type: "list",
        message: "Please select the employee's role.",
        name: "role",
        choices: ['Manager', 'Engineer', 'Intern']
    }])

    return role;
};

function inputOffice() {
    const office = inquirer.prompt([{
        type: "input",
        message: "Please enter the employee's office number/location.",
        name: "office",
    }])

    return office;
};

function inputUsername() {
    const username = inquirer.prompt([{
        type: "input",
        message: "Please enter the employee's Github username.",
        name: "office",
    }])

    return username;
};

function inputSchool() {
    const username = inquirer.prompt([{
        type: "input",
        message: "Please enter the employee's school/university.",
        name: "school",
    }])

    return school;
};


function additionalEmployee() {
    const otherEmployee = inquirer.prompt([{
        type: "list",
        message: "Would you like to add another another employee?",
        name = 'otheremployee',
        choices: ['Yes', 'No']
    }]);

    return additionalEmployee;
}

function iterateArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let employeeHTML = GenerateHTML.createMessage(arr[i]);
        teamHTML += employeeHTML;
    }
};

function generatePage(html) {
    let finalHTML = GenerateHTML.createMainHTML(html);
    fs.writeFile("./output/TeamQuickView.html", finalHTML, function (err) {
        if (err) {
            return console.log(err);

        }
        console.log("Successfully created your team html!")
    });
}




