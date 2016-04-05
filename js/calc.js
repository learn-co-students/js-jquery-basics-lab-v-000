"use strict";

$(document).ready(function(){

// call functions here

doMath();

});


var firstNumber = $("#number1");
var operator = $("#operation");
var secondNumber = $("number2");


function doMath() {
  $('#equals').on('click', function() {
    firstNumber = parseInt(number1.val());
    secondNumber = parseInt(number1.val());
    operator = operator.val();
    validate(firstNumber, operator, secondNumber);
  });
}

function validate(operator, firstNumber, secondNumber) {
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return "Sorry, one of those is not a valid number!";
  } else if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {
    return result(firstNumber, operator, secondNumber);
  } else {
    return "Sorry, that is not a valid operator";
  }
}

function result(operator, firstNumber, secondNumber) {
  var result = eval(firstNumber + operator + secondNumber);
  $("#result").val(result);
  return result;
}
