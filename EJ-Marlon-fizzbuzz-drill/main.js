'use strict';

function fizzBuzz(num){

  if(num % 15 === 0){
    return 'fizzbuzz';
  }
  if(num % 5 === 0){
    return 'buzz';
  }
  if(num % 3 === 0){
    return 'fizz';
  }
  return num;
}

function handleHTML(fizzResult){
  let fizzClass = '';
  if(typeof fizzClass === 'string'){
    fizzClass = fizzResult;
  }
  return `<div class = 'fizz-buzz-item ${fizzClass}'><span>${fizzResult}</span></div>`;
}

function handleSubmit(){
  $('#number-chooser').on('submit', event => {
    event.preventDefault();
    let array = [];
    let count = $('#number-choice').val()
    for(let i = 1; i <= count; i++){
      array.push(fizzBuzz(i));
    }
    let arrayHTML = array.map(event => handleHTML(event));
    $('.js-results').html(arrayHTML);
    console.log(arrayHTML);
  });
  
}

$(handleSubmit);