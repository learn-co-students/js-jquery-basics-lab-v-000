$(document).ready(function() {
  doMath();
});

var firstNumber = $('#number1');
var secondNumber = $('#number2');
var mathOperator = $('#operation');

function doMath() {
  $('#equals').on('click', function() {
      firstNumber = parseFloat(firstNumber.val());
      secondNumber = parseFloat(secondNumber.val());
      mathOperator = mathOperator.val();
      validate(mathOperator, firstNumber, secondNumber);
    }); 
}

function validate(mathOperator, firstNumber, secondNumber) {
  if (mathOperator=="+" || mathOperator=="-" || mathOperator=="*" || mathOperator=="/") {
    if (isNaN(firstNumber) || firstNumber ==="" || isNaN(secondNumber) || secondNumber ==="") {
      $('#result').html("Sorry, one of those is not a valid number!");
      return "Sorry, one of those is not a valid number!";
      alert("Sorry, one of those is not a valid number!");
    } else {
      result(mathOperator, firstNumber, secondNumber);
    }
  } else {//if invalid operator
    $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
    alert("Sorry, that is not a valid operator");
  }
}

function result(mathOperator, firstNumber, secondNumber) {
  if (mathOperator == "+") {
    $('#result').html(firstNumber + secondNumber);
    return firstNumber + secondNumber;
  } else if (mathOperator == "-") {
    $('#result').html(firstNumber - secondNumber);
    return firstNumber - secondNumber;
  } else if (mathOperator == "*") {
    $('#result').html(firstNumber * secondNumber);
    return firstNumber * secondNumber;
  } else {
    $('#result').html(firstNumber / secondNumber);
    return firstNumber / secondNumber;
  }
}
