$(document).ready(function(){
  doMath();
});

var firstNumber = $('#number1');
var operator = $('#operation');
var secondNumber = $('#number2');

function doMath() {
  $('#equals').on('click', function() {
    // var number1 = $(':input:#number1').val();
    firstNumber = parseInt(firstNumber.val());
    operator = operator.val();
    secondNumber = parseInt(secondNumber.val());
    validate(operator, firstNumber, secondNumber);
  })
}

function validate(operator, firstNumber, secondNumber) {
  if (operator === "/" || operator === "*" || operator === "+" || operator === "-") {
    if (isNaN(firstNumber) || firstNumber === '' || isNaN(secondNumber) || secondNumber === '' ) {
      return 'Sorry, one of those is not a valid number!'
    }
  } else {
    return "Sorry, that is not a valid operator";
  }
  result(operator, firstNumber, secondNumber);
}

function result(operator, firstNumber, secondNumber) {
  if (operator === "+") {
    $('#result').append(firstNumber + secondNumber);
    return firstNumber + secondNumber;
  } else if (operator === "-") {
    $('#result').append(firstNumber + secondNumber);
    return firstnumber - secondNumber;
  } else if (operator === "/") {
    $('#result').append(firstNumber + secondNumber);
    return firstnumber / secondNumber;
  } else if (operator === "*") {
    $('#result').append(firstNumber + secondNumber);
    return firstnumber * secondNumber;
  }
}
