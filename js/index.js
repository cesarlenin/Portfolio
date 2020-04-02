'use strict';



function handleNav(){
  $('nav').on('click','.icon', function (event){
    event.preventDefault();
    var x = document.getElementById('myLinks');
    if (x.className === 'links') {
      x.className += ' open';
    } else {
      x.className = 'links';
    }
  });
}

function render(){
  $('main').html(choiceTemplate());
}

function handlePorfolio () {
  handleNav();
  render();
}

$(handlePorfolio);