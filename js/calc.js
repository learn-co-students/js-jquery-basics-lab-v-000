'use strict';

$( document ).ready(function() {
  var num1 = parseInt($('#number1').val());
  var num2 = parseInt($('#number2').val());
  var op1 = $('#operation').val();
  doMath();

});

var num1 = parseInt($('#number1').val());
var num2 = parseInt($('#number2').val());
var op1 = $('#operation').val();


function doMath() {
  $('#equals').on('click', function() {
    switch (op1) {
      case "+":
        return num1 + num2;
        break;
      case "-":
        return num1 - num2;
        break;
      case "*":
        return num1 * num2;
        break;
      case "/":
        return num1 / num2;
        break;
    }
  })
}

function validate(op1,num1,num2) {
  if (isNaN(num1) || isNaN(num2) ){
    return "Sorry, one of those is not a valid number!"
  }

  if (op1 != "+" || op1 != "-" || op1 != "*" || op1 != "/") {
    return "Sorry, that is not a valid operator"
  }
}
doMath();

function result(op1,num1,num2) {
return num1 + num2;
}
