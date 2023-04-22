const inquirer = require('inquirer')
const fs = require('fs');

const {Triangle, Square, Circle} = require('./shapes.js');

function promptUser() {
  inquirer
    .prompt ([
    {
    type:'input',
    message:'Please choose three letters to have your logo display', 
    name:'text',
    name: 'variables',
    validate: lettersInput => {
      if ( lettersInput.length === 3){
      return true;
      }else{
      return console.log('Please enter only three variables')
      }
    }
    },
    {
    type:'list',
    message:'Please choose one of the following shapes', 
    name:'text',
    choices: ['triangle','square', 'circle']
    },
    {
    type: 'list',
    message: 'Please choose a color for the letters',
    name: 'letters',
    choices: ['blue', 'green', 'white', 'red', 'orange', 'yellow', 'black']
    },
    {
    type: 'list',
    message: 'Please choose a backround color',
    name: 'color',
    choices: ['blue', 'green', 'white', 'red', 'orange', 'yellow', 'black']
    }
    ])
    };
    promptUser();