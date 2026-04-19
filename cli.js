#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

import {createRequire} from 'module';
import readlineSync from 'readline-sync';
import { read } from 'fs';

console.log('Welcome to the Quiz');

let username = readlineSync.question("What's your Name: \n");

console.log(`Hello  ${ username}  , Let's Play the Quiz!!`);
console.log('Rules & Instructions: ');
console.log(`1 ${username} , There are 10 Questions on India and all are Compulsory.`);
console.log('2. You will get 2 points on each Right Answer.');
console.log('3. One Point will be deducted if the Answer is Wrong.');
console.log('4. In MCQ based questions you have to type the Serial Number / Index Value.');

let score = 0;



var mcqList = [
  {
    array : ['cancer', 'scorpio', 'pisces', 'leo'],
    question : 'What is the fifth sign of the zodiac?  ',
    answer : 'leo'
  },
  {
    array : ['Kerala', 'Madras', 'Bangalore', 'New Delhi'],
    question : 'The Indian Institute of Science is located at ',
    answer : 'Bangalore'
  },
  {
    array : ['Dugong', 'skipper', 'joyce', 'black barbie'],
    question : ' what is the name of barbies little sister?',
    answer : 'skipper'
  },
   {
    array : ['New Delhi', 'Hyderabad', 'russia', 'Mumbai'],
    question : 'which contry is the largest in the world?',
    answer : 'russia'
  },
  {
    array : ['sheep', 'Dog', 'cow', 'chicken'],
    question : 'What was the first animal to ever be cloned? ',
    answer : 'sheep'
  },
  {
    array : ['bible', 'harrypotter', 'the badlands', 'Khushwant Singh'],
    question : "According to Guinness World Records, what's the best-selling book of all time?  ",
    answer : 'bible'
  },
];


    function quizMcq(listOfAnswers,question,answer){
    let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);

    if(listOfAnswers[userAnswer] === answer){
    console.log(chalk.green(`🥳🥳🥳  good work ${answer} is correct.`));
    score = score + 2;
  }else{
    console.log('You are Wrong.');
    console.log(chalk.red(`💀💀💀 sorry, The Correct Answer is: ${answer}`));
    score = score - 1;
  }

  if(score < 0){
    score = 0;
  }
  console.log(chalk.yellow(`Score is: ${score}`));
 
}

for(var i = 0;i < mcqList.length; i++){
  console.log('\n');
  quizMcq(mcqList[i].array,mcqList[i].question,mcqList[i].answer);
  console.log('*******************************');
}

console.log('\n');
console.log(`Your Total Score is: ${score}`);










