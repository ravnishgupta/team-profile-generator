const Employee = require('./lib/Employee');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require('inquirer');
const teamMembers = [];

const addManager = () => {
    
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
        name: 'idInput',
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
        name: 'email',
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
        name: 'officeNumber',
        message: "What is the team manager's office number? (Required)",
        validate: officeNumber => {
          if (officeNumber) {
            return true;
          } else {
            console.log("What is the team manager's office number?");
            return false;
          }
        }
      },
      {
        type: 'rawlist',
        name: 'nextStep',
        message: 'Please make a choice from the options below',
        choices: ['Add a new engineer', 'Add a new intern', 'Finish building team']
      }
    ])
    .then (memberData => {
        //teamMembers.push(memberData)
        let oMgr = new Manager(memberData.name, memberData.idInput, memberData.email, memberData.officeNumber);
        teamMembers.push (oMgr);
        switch (memberData.nextStep.toUpperCase()) {
            case 'ADD A NEW ENGINEER':
                addEngineer();
                break;
            case 'ADD A NEW INTERN':
                addIntern();
                break;
            case 'FINISH BUILDING TEAM':
                console.log(teamMembers);
                break;
        }
       }
    )
}

const addIntern = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name? (Required)",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("What is the intern's name?");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'idInput',
            message: "What is the intern's employee ID? (Required)",
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log("What is the intern's employee ID?");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: "What is the intern's email? (Required)",
            validate: email => {
              if (email) {
                return true;
              } else {
                console.log("What is the intern's email?");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'school',
            message: "What is the intern's school? (Required)",
            validate: school => {
              if (school) {
                return true;
              } else {
                console.log("What is the intern's school?");
                return false;
              }
            }
          }
     ])
     .then(internData => {
         let oIntern = new Intern(internData.name, internData.idInput, internData.email, internData.school);
         teamMembers.push(oIntern);
         presentChoices();
       }
     )
}

const addEngineer = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name? (Required)",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("What is the engineer's name?");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'idInput',
            message: "What is the engineer's employee ID? (Required)",
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log("What is the engineer's employee ID?");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email? (Required)",
            validate: email => {
              if (email) {
                return true;
              } else {
                console.log("What is the engineer's email?");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github? (Required)",
            validate: github => {
              if (github) {
                return true;
              } else {
                console.log("What is the engineer's github?");
                return false;
              }
            }
          }
     ])
     .then(engData => {
        let oEng = new Engineer(engData.name, engData.idInput, engData.email, engData.github)
        teamMembers.push (oEng);
        presentChoices();
     })
     
}

const presentChoices = () => {
    return inquirer.prompt ([
      {
        type: 'rawlist',
        name: 'newTeamMemberType',
        message: 'Please make a choice from the options below',
        choices: ['Add a new engineer', 'Add a new intern', 'Finish building team']
      }
    ])
    .then(choice => {
        switch (choice.newTeamMemberType.toUpperCase()) {
            case 'ADD A NEW ENGINEER':
                addEngineer();
                break;
            case 'ADD A NEW INTERN':
                addIntern();
                break;
            case 'FINISH BUILDING TEAM':
                console.log(teamMembers)
                break;
        }
    })
}
addManager()

