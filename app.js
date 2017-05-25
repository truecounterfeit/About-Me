'use strict';

var confirmed = confirm('Are you ready to rumble!?');

if (confirmed === true) {
  console.log('The user is ready!');
} else {
  console.log('The user said they were not ready... but we\'re going to start anyway.');
}
