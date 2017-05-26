'use strict';

var question1 = prompt('Do I have siblings? Answer YES or NO');

if (question1.toUpperCase() === 'YES') {
  console.log('Correct! High five buddy!');
} else {
  console.log('I thought you were my friend :(');
};
var question2 = prompt('Is crimson my favorite color? Answer YES or NO');

if (question2.toUpperCase() === 'YES') {
  console.log('Correct! I bleed Crimson. GO COUGS!');
} else {
  console.log('I thought you were my friend :(');
};

var question3 = prompt('Did I eat Oatmel for breafast on Tuesday? Answer YES or NO');

if (question3.toUpperCase() === 'NO') {
  console.log('Correct! I ate donuts!');
} else {
  console.log('I thought you were my friend :(');
};

var question4 = prompt('Is Pikachu my highest level Pokemon in Pokemon Crystal? Answer YES or NO');

if (question4.toUpperCase() === 'NO') {
  console.log('Correct! Nidorino is my highest level Pokemon! Until I find a moon stone...');
} else {
  console.log('I thought you were my friend :(');
};

var question5 = prompt('Is Ashley Graham my celebrity crush? Answer YES or NO');

if (question5.toUpperCase() === 'YES') {
  console.log('Correct! She is very beautiful!');
} else {
  console.log('I thought you were my friend :(');
};

var outcome = question1.length + question2.length + question3.length + question4.length + question5.length

if (outcome > 12) {
  document.write('You are friend!');
} else {
document.write('I hate you.');
};
