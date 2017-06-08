'use strict';

var correct = 0;

function yesQuestions(answer){

  if (answer.toUpperCase() === 'YES' || answer.toUpperCase() === 'Y') {
    alert('Correct! High five buddy!');
    correct ++;
    console.log(correct);
  } else {
    alert('Nope!');
  }
};

function noQuestions(answer){

  if (answer.toUpperCase() === 'NO' || answer.toUpperCase() === 'N'){
    alert('Correct! High five buddy!');
    correct ++;
    console.log(correct);
  } else {
    alert('Nope!');
  }
};
yesQuestions(prompt('Do I have siblings? Answer yes or no, y or n'));
yesQuestions(prompt('Is crimson my favorite color? Answer yes or no, y or n'));
noQuestions(prompt('Did I eat Oatmel for breafast on Tuesday? Answer yes or no, y or n'));
noQuestions(prompt('Is Pikachu my highest level Pokemon in Pokemon Crystal? Answer yes or no, y or n'));
yesQuestions(prompt('Is Ashley Graham my celebrity crush? Answer yes or no, y or n'));

/* if else code Questions 1 - 5
var question1 = prompt('Do I have siblings? Answer yes or no, y or n');

if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y') {
  alert('Correct! High five buddy!');
  correct ++;
  console.log(correct);
} else {
  alert('I thought you were my friend :(');
};
var question2 = prompt('Is crimson my favorite color? Answer yes or no, y or n');

if (question2.toUpperCase() === 'YES' || question2.toUpperCase() === 'Y') {
  alert('Correct! I bleed Crimson. GO COUGS!');
  correct ++;
  console.log(correct);
} else {
  alert('I thought you were my friend :(');
};

var question3 = prompt('Did I eat Oatmel for breafast on Tuesday? Answer yes or no, y or n');

if (question3.toUpperCase() === 'NO' || question3.toUpperCase() === 'N') {
  alert('Correct! I ate donuts!');
  correct ++;
  console.log(correct);
} else {
  alert('I thought you were my friend :(');
};

var question4 = prompt('Is Pikachu my highest level Pokemon in Pokemon Crystal? Answer yes or no, y or n');

if (question4.toUpperCase() === 'NO' || question4.toUpperCase() === 'N') {
  alert('Correct! Nidorino is my highest level Pokemon! Until I find a moon stone...');
  correct ++;
  console.log(correct);
} else {
  alert('I thought you were my friend :(');
};

var question5 = prompt('Is Ashley Graham my celebrity crush? Answer yes or no, y or n');

if (question5.toUpperCase() === 'YES' || question5.toUpperCase() === 'Y') {
  alert('Correct! She is very beautiful!');
  correct ++;
  console.log(correct);
} else {
  alert('I thought you were my friend :(');
};
*/

var question6 = prompt('How many Spotify playlists have I created so far?');
// make it random for stretch goal

for (var i = 0; i < 3; i ++) {
  while (!question6) {
    question6 = prompt('Try again...');
  }
  if (question6 == 16) {
    alert('Dude! You know me so well!');
    correct ++;
    console.log(correct);
    break;
  } else if (question6 < 16){
    question6 = prompt('Too Low! Guess again?');
  } else (question6 > 16);
  question6 = prompt('Too High! Guess again?');
};

//var guess = 6;
var question7 = prompt('Name one band/artist I saw on Memorial Day Weekend at Sasquatch.');
var bands = ['Chance The Rapper', 'Phantogram', 'The Shins', 'SISTERS', 'Chicano Batman', 'Boogie'];
// while loop
for (var i = 0; i < 5; i ++) {
//while (!question7) {
//question7 = prompt('Try again...')
//};
  if (question7 = bands.indexOf(question7)) {
    console.log(bands);
    alert('Correct! The bands I saw were: Chance The Rapper, Phantogram, The Shins, SISTERS, Chicano Batman, and Boogie.');
    //guess = 0;
    correct ++;
    console.log(correct);
    break;
//break;
  //} while (!question7) {
    //prompt('I thought you were my friend... Try Again?');
  } else {
    prompt('I thought you were my friend... Try Again?');
    //guess --;
  }
};

//Questions 1 - 7 document write Answers print out
document.write('<h2> Do I have siblings? Yes!</h2>');
document.write('<h2>Is crimson my favorite color? Yes!</h2>');
document.write('<h2>Did I eat Oatmel for breafast on Tuesday? No!</h2>');
document.write('<h2>Is Pikachu my highest level Pokemon in Pokemon Crystal? No!</h2>');
document.write('<h2>Is Ashley Graham my celebrity crush? Yes!</h2>');
document.write('<h2> I created 16 playlists.</h2>');
document.write('<h2>The bands I saw were: Chance The Rapper, Phantogram, The Shins, SISTERS, Chicano Batman, and Boogie!</h2>');
// Total correct document write print out
document.write('<h1> You got ' + correct + ' correct out of 7!</h1>');
var outcome = question1.length + question2.length + question3.length + question4.length + question5.length + question6.length + question7.length;
// for fun outcome of my feelings to user
if (outcome > 12) {
  document.write('You are my friend!');
} else {
  document.write('I hate you.');
};
