// Import packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');



// // team profiles
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('.lib/Intern');


// Team members array
 const teamMembers  = [];

// question prompts
const managerQuestions = () => { 
    return inquirer.prompt([ 
    {   type: 'input',
        name: 'welcome',
        message: 'Welcome. Press return to begin building your roster.'
    },             
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the manager's badge ID number"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email address",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the manager's office number"
    }
    ])
    .then(answers => {
        const {name, id, email, officeNumber} = answers;
        const manager = new Manager (name, id, email, officeNumber);
        teamMembers.push(manager)
       
    })
};

const employeeQuestions = () => {
    return inquirer.prompt([
         {
            type: 'list',
            name: 'additions',
            message: 'Would you like to add an employee?',
            choices: ['Yes', 'No']
         },    
        {
            type: 'list',
            name: 'role',
            message: "what is this employee's job title?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is this employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is their badge ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter their email address"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is their GitHub username?"
        },
        {
            type: 'confirmation',
            name: 'confirmNewEmployee',
            message: 'Would you like to add another employee?',
            choices: ['Yes', 'No']
        },
    ])
    .then(newEmployee => {
        const { role, name, id, email, github} = newEmployee;
        let employee = new Employee (role, name, id, email, github);

        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);
            console.log(employee)

        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, github);

            console.log(employee)
        }
    
        teamMembers.push(newEmployee);
        
        if (confirmNewEmployee === 'yes') {
            return employeeQuestions(teamMembers);
        } else {
            return teamMembers;
        }
        
    })
};
 

// create HTML using fs - file system
const writeToFile = data => {
fs.writeFile('./dist/index.html', data, err => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("Roster created in dist folder.")
    }

    }
    
)}


managerQuestions()
  .then(employeeQuestions)
  .then(teamMembers => {
    return generateHTML(teamMembers);
  })
  .then(pageHTML => {
    return writeToFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });


