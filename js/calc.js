$(document).ready(function(){
  doMath();
});

var num1 = $('#number1');
var num2 = $('#number2');
var op = $('#operation');

function doMath() {
  $('#equals').on('click', function() {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    validate(op, num1, num2);
  });
}

function validate(operator, first, second) {
  if (isNaN(first) || isNaN(second)) {
    return "Sorry, one of those is not a valid number!";
  } else if (operator != '+' || operator != '-' || operator != '*' || operator != '/') {
    return "Sorry, that is not a valid operator";
  } else {
    return result(operator, first, second);
  }
}

function result(operator, first, second) {
  return eval(first + operator + second);
}
