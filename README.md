# Team Profile Generator - CLI Application
​
## Overview
​
The purpose of this application is to provide a quick way to print reports on the composition of personnel/teams. It solicits information in the form of a command line interface using node.js, compiles the information, and outputs an html page. 
​
### Links

Github repo: https://github.com/tecain13/TeamProfileGenerator
​
### Problem
​
Currently there is not a quick way to consolidate contact information about your work team members if management spontaneously requests a report. A user would likely have to search their email and copy and paste the information into a singular document before submitting to management.
​
### Solution
​This CLI application prompts the user to type in responses about a specific employee, differentiate their role, and consolidate all of their contact information in one place. Once the user completes entering information for the team, the application automatically populates an html webpage which can be shared with management.

## Tech and Features Used
​
* Bootstrap
* Javascript
* ES6
* Github API
* Node.js
* NPM Modules: Inquirer, Jest
​
## How to use
​The user should navigate to the folder of the application, npm install, and npm run test to ensure all tests pass before utilizing the app. Once all tests pass, call node.js on the app.js file in your terminal, respond to all prompts until your team's information is complete, then check the output directory for your html page. 
​
## Technical Overview

Functional application.

GitHub repository with a unique name and a README describing the project.

User can use the CLI to generate an HTML page that displays information about their team.

All tests must pass.

Classes
The project must have the these classes: Employee, Manager, Engineer,
Intern. The tests for these classes in the tests directory must all pass.
The first class is an Employee parent class with the following properties and
methods:

name
id
title
getName()
getId()
getEmail()
getRole() // Returns 'Employee'

The other three classes will extend Employee.
In addition to Employee's properties and methods, Manager will also have:

officeNumber
getRole() // Overridden to return 'Manager'

In addition to Employee's properties and methods, Engineer will also have:

github  // GitHub username
getGithub()
getRole() // Overridden to return 'Engineer'

In addition to Employee's properties and methods, Intern will also have:
school
getSchool()
getRole() // Overridden to return 'Intern'

User input
The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

Roster output
The project must generate a team.html page in the output directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

Name
Role
ID
Role-specific property (School, link to GitHub profile, or office number)