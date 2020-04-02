'use strict';

function myFunction() {
  var x = document.getElementById('myLinks');
  if (x.className === 'links') {
    x.className += ' open';
  } else {
    x.className = 'links';
  }
}