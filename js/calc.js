var calcItems = {};

function doMath() {
  $('button').on('click', function() {

    calcItems.operator = $('#operation').val();
    calcItems.firstNum = parseInt($('#number1').val());
    calcItems.secondNum = parseInt($('#number2').val());

    var errorMessage = validate(calcItems.operator, calcItems.firstNum, calcItems.secondNum);
    if (errorMessage) {
      alert(errorMessage);
    }
    result(calcItems.operator, calcItems.firstNum, calcItems.secondNum);
  });
}

function validate(operator, num1, num2) {
  if (operator === '*' || operator === '/' || operator === '+' || operator === '-') {
    if (isNaN(num1) || isNaN(num2)) {
      return "Sorry, one of those is not a valid number!";
    }
  } else {
    return "Sorry, that is not a valid operator";
  }
  return false;
}

function result(operator, num1, num2) {
  var calc = num1 + operator + num2;
  $('#result').text(eval(calc));
  return eval(calc);
}


$(document).ready(function() {
  doMath();
});
