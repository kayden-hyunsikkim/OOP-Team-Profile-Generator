const fs = require('fs');
const inquirer = require('inquirer');
const Teammember = require('./utils/generateTeammember.js');
const Managerclass = require('./Lib/manager.js');
const Engineerclass = require('./Lib/engineer.js');
const Internclass = require('./Lib/Intern.js');


function showingMsg() {
    console.log('Welcome to the team generator!\nUse "npm run reset" to reset the dist/folder\n\nPlease build your team ');
}

const Managerquestions = [
    "What is the team manager's name?",
    "What is the team manager's id?",
    "What is the team manager's email?",
    "What is the team manager's office number?",
    "Which type of team member would you like to add?"
];

const [Mquestion1, Mquestion2, Mquestion3, Mquestion4, Mquestion5] = Managerquestions;

const Engineerquestions = [
    "What is the Engineer's name?",
    "What is the Engineer's id?",
    "What is the Engineer's email?",
    "What is the Engineer's Github username?",
    "Which type of team member would you like to add?"
];

const [Equestion1, Equestion2, Equestion3, Equestion4, Equestion5] = Engineerquestions;

const Internquestions = [
    "What is the Intern's name?",
    "What is the Intern's id?",
    "What is the Intern's email?",
    "What is the Intern's school?",
    "Which type of team member would you like to add?"
];

const [Iquestion1, Iquestion2, Iquestion3, Iquestion4, Iquestion5] = Internquestions;

let datas = [];


function initManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: Mquestion1,
            },
            {
                type: 'input',
                name: 'id',
                message: Mquestion2,
            },

            {
                type: 'input',
                message: Mquestion3,
                name: 'email',
            },
            {
                type: 'input',
                message: Mquestion4,
                name: 'officenumber',
            },
            {
                type: 'list',
                name: "choosingrole",
                message: Mquestion5,
                choices: ["Engineer", 'Intern', "I don't want to add more team member"],
            },

        ])
        .then(function (data) {         
            let managerdata = new Managerclass.Manager (
                data.name,
                data.id,
                data.email,
                data.officenumber
            )
            console.log(managerdata);
            datas.push(managerdata);
            ifstatement(data);
        })

}

function Engineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: Equestion1,
            },
            {
                type: 'input',
                name: 'id',
                message: Equestion2,
            },

            {
                type: 'input',
                message: Equestion3,
                name: 'email',
            },
            {
                type: 'input',
                name: 'Github',
                message: Equestion4,
            },
            {
                type: 'list',
                name: "choosingrole",
                message: Equestion5,
                choices: ["Engineer", 'Intern', "I don't want to add more team member"],
            }])
        .then(function (data) {
            let engineerdata = new Engineerclass.Engineer (
                data.name,
                data.id,
                data.email,
                data.Github
            )
            console.log(engineerdata);
            datas.push(engineerdata);
            ifstatement(data);

        })
}

function Intern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: Iquestion1,
            },
            {
                type: 'input',
                name: 'id',
                message: Iquestion2,
            },

            {
                type: 'input',
                message: Iquestion3,
                name: 'email',
            },
            {
                type: 'input',
                name: 'school',
                message: Iquestion4,
            },
            {
                type: 'list',
                name: "choosingrole",
                message: Iquestion5,
                choices: ["Engineer", 'Intern', "I don't want to add more team member"],
            }])
        .then(function (data) {
            let Interndata = new Internclass.Intern (
                data.name,
                data.id,
                data.email,
                data.school
            )
            console.log(Interndata);
            datas.push(Interndata);
            ifstatement(data);

        })

}


function ifstatement(data) {
    if (data.choosingrole === "Engineer") {
        Engineer();
    } else if (data.choosingrole === "Intern") {
        Intern();
    } else {
        console.log(datas);
        writeToFile(datas);
        return;
    }

}

async function writeToFile(data) {
    try {
        Teammember.generateTeammember(data);
    } catch (err) {
        console.log('Error appending data to file', err);
    }
}

// Run application
showingMsg();
initManager();