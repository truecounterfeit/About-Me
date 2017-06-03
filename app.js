'use strict';

var question1 = prompt('Do I have siblings? Answer yes or no, y or n');

if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y') {
  alert('Correct! High five buddy!');
} else {
  alert('I thought you were my friend :(');
};
var question2 = prompt('Is crimson my favorite color? Answer yes or no, y or n');

if (question2.toUpperCase() === 'YES' || question2.toUpperCase() === 'Y') {
  alert('Correct! I bleed Crimson. GO COUGS!');
} else {
  alert('I thought you were my friend :(');
};

var question3 = prompt('Did I eat Oatmel for breafast on Tuesday? Answer yes or no, y or n');

if (question3.toUpperCase() === 'NO' || question3.toUpperCase() === 'N') {
  alert('Correct! I ate donuts!');
} else {
  alert('I thought you were my friend :(');
};

var question4 = prompt('Is Pikachu my highest level Pokemon in Pokemon Crystal? Answer yes or no, y or n');

if (question4.toUpperCase() === 'NO' || question4.toUpperCase() === 'N') {
  alert('Correct! Nidorino is my highest level Pokemon! Until I find a moon stone...');
} else {
  alert('I thought you were my friend :(');
};

var question5 = prompt('Is Ashley Graham my celebrity crush? Answer yes or no, y or n');

if (question5.toUpperCase() === 'YES' || question5.toUpperCase() === 'Y') {
  alert('Correct! She is very beautiful!');
} else {
  alert('I thought you were my friend :(');
};

document.write('<h2> Do I have siblings? Yes!</h2>');
document.write('<h2>Is crimson my favorite color? Yes!</h2>');
document.write('<h2>Did I eat Oatmel for breafast on Tuesday? No!</h2>');
document.write('<h2>Is Pikachu my highest level Pokemon in Pokemon Crystal? No!</h2>');
document.write('<h2>Is Ashley Graham my celebrity crush? Yes!</h2>');
document.write('<h1> </h1>');
document.write('<h1>How well did you do: </h1>');

var outcome = question1.length + question2.length + question3.length + question4.length + question5.length;

if (outcome > 12) {
  document.write('You are my friend!');
} else {
  document.write('I hate you.');
};
