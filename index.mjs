import inquirer from 'inquirer';
import fs from 'fs';
import {Employee, Engineer, Intern, Manager} from './lib/classes.mjs';
import {fillPage} from './src/webpage.mjs';

var staff = [];

getManager();

function getManager() {
    inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter Team Manager Name',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter Team Manager ID',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter Team Manager Email Address',
    },
    {
      type: 'input',
      name: 'officeNum',
      message: 'Enter Your Office Number',
    },
    {
      type: 'list',
      name: 'addstaff',
      message: 'Select a role to add a staff member',
      choices: ["Engineer","Intern","Finish"],
        },
    ]).then((answers) => {
    let newManager = Object.create(Manager);
        newManager.setInfo(answers.name, answers.id, answers.email);
        newManager.setOffice(answers.officeNum);
        newManager.setRole();
        newManager.setCard();
        staff.push(newManager);

    if(answers.addstaff == "Finish"){
               console.log(staff);
                return(makePage(staff));

} else{
    answers.addstaff == "Engineer" ? getEngineer() : getIntern();
    }
});
}

function getEngineer() {
     inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter name of engineer',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter employee ID',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter employee email address',
    },
    {
      type: 'input',
      name: 'github',
      message: `Enter link to employee's github`,
    },
    {
      type: 'list',
      name: 'addstaff',
      message: 'Select a role to add a staff member',
      choices: ["Engineer","Intern","Finish"],
        },
    ]).then((answers) => {
    let newEngineer = Object.create(Engineer);
        newEngineer.setInfo(answers.name, answers.id, answers.email);
        newEngineer.setGit(answers.github);
        newEngineer.setRole();
        newEngineer.setCard();
        staff.push(newEngineer);

    if(answers.addstaff == "Finish"){
            console.log(staff);
             return(makePage(staff));
} else{
    answers.addstaff == "Engineer" ? getEngineer() : getIntern();
    }
});
}

function getIntern() {
     inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter name of intern',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter employee ID',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter employee email address',
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter name of school attended',
    },
    {
      type: 'list',
      name: 'addstaff',
      message: 'Select a role to add a staff member',
      choices: ["Engineer","Intern","Finish"],
        },
    ]).then((answers) => {
    let newIntern = Object.create(Intern);
        newIntern.setInfo(answers.name, answers.id, answers.email);
        newIntern.setSchool(answers.school);
        newIntern.setRole();
        newIntern.setCard();
        staff.push(newIntern);

    if(answers.addstaff == "Finish"){
               console.log(staff);
                return(makePage(staff));

} else{
    answers.addstaff == "Engineer" ? getEngineer() : getIntern();
    }
});
}

function makePage(staff){
fs.writeFile('index.html', fillPage(staff), (err) => err ? console.log(err) : console.log('success!'));
}
