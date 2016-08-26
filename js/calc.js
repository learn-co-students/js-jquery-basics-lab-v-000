$(document).ready(function(){
  doMath();
})

var firstN = $('#number1');
var secondN = $('#number2');
var operator = $('#operation');

function doMath() {
  $('#equals').on('click', function(){
    validate(operator, firstN, secondN);
  })
}

function validate(operator, firstN, secondN){
  if(isNaN(firstN) || isNaN(secondN) || firstN === '' || secondN === ''){
    return "Sorry, one of those is not a valid number!";
  } else if (["+", "-", "*", "/"].indexOf(operator) === -1){
    return "Sorry, that is not a valid operator";
  } else {
      result(firstN, secondN, operator);
    }
  }

function result(operator, firstN, secondN) {
  if (operator === '-') {
    $('#result').append(firstN - secondN);
    return firstN - secondN;
  } else if (operator === '+') {
    $('#result').append(firstN + secondN);
    return firstN + secondN;
  } else if (operator === '*') {
    $('#result').append(firstN * secondN);
    return firstN * secondN;
  } else if (operator === '/') {
    $('#result').append(firstN / secondN);
    return firstN / secondN;
  }
}
