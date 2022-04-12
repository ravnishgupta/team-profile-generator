const Employee = require('./lib/Employee');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt ([
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("What is the team manager's name?");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's employee ID? (Required)",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("What is the team manager's employee ID?");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's email? (Required)",
        validate: email => {
          if (email) {
            return true;
          } else {
            console.log("What is the team manager's email?");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's office number? (Required)",
        validate: officeNumber => {
          if (officeNumber) {
            return true;
          } else {
            console.log("What is the team manager's office number?");
            return false;
          }
        }
      }

    ])
}


// const employee = new Employee('Ravnish Gupta', 123, 'email@gmail.com');
// const manager = new Manager('manager', 'mng12', 'mng@gmail.com', 12);
// const intern = new Intern('intern', 'int123', 'int@email.com', 'NYU')

// console.log(employee.getEmail())
// console.log(manager.getOfficeNumber());
// console.log(intern.getSchool())
// console.log(intern.getRole(),manager.getRole(), employee.getRole(),)

