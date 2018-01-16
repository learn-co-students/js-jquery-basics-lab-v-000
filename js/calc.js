var number1;
var operation;
var number2;

//functions here
function doMath() {
  $('#equals').on('click', function(key) {
      number1 = $('#number1').val();
      operation = $('#operation').val();
      number2 = $('#number2').val();
      validate(operation, number1, number2);
  })
}

function validate(operation, number1, number2) {
  if(isNaN(number1) || isNaN(number2)) {
    return "Sorry, one of those is not a valid number!";
  } else if((operation === '+' || operation === '-' || operation === '/' || operation === '*')) {
    result(operation, number1, number2);
  } else {
    return "Sorry, that is not a valid operator";
  }
}

function result(operation, number1, number2) {
  var answer = eval(number1 + operation + number2);
  $('#result').html(answer);
  return answer;
}

$(document).ready(function() {
  //calls here
  doMath();
})
