'use strick';

$(document).ready(function(){
  doMath();
});

function doMath() {
  $('#equals').on('click', function() {
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var operation = $('#operation').val();
  });
}

function validate(operator, number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    return "Sorry, one of those is not a valid number!";
  } 
  else if (operator == "+" && operator == "-" && operator == "*" && operator == "/") {
    return result(number1, operator, number2);
  } 
  else {
    return "Sorry, that is not a valid operator";
  }
}

function result(operator, number1, number2) {
  if (operator == "*") {
    return number1 * number2;
  }
  else if (operator == "-") {
    return number1 - number2;
  }
  else if (operator == "/") {
    return number1 / number2;
  }
  else if (operator == "+") {
    return number1 + number2;
  }
}