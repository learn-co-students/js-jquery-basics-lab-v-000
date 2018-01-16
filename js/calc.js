
var number1 = $('#number1');
var number2 = $('#number2');
var operator = $('#operation');

function doMath() {
  $('#equals').on('click', function() {
    number1 = parseFloat(number1.val());
    number2 = parseFloat(number2.val());
    operator = operator.val();
    validate(operator, number1, number2);
  })
}

function validate(operator, number1, number2) {
  if(isNaN(number1) || isNaN(number2)) {
    return 'Sorry, one of those is not a valid number!';
  } else if(operator != '+' && operator != '-' && operator != '*' && operator != '/'){
    return 'Sorry, that is not a valid operator';
  }
}

function result(operator, number1, number2) {
  if(operator === '+') {
    result = number1 + number2;
  } else if(operator === "-") {
    result = number1 - number2;
  } else if(operator === '*') {
    result = number1 * number2;
  } else if(operator === '/') {
    result = number1 / number2;
  }
  $('#result').html = result;
  return result;
}

$(document).ready(function(){
  
});
