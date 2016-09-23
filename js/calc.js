$(document).ready(function() {
  doMath();
  result();
});

var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');

function doMath(){
  $('#equals').on('click', function() {
    num1 = parseInt(num1.val());
    num2 = parseInt(num2.val());
    operator = operator.val();
    validate(operator, num1, num2);
  });
}

function validate(operator, firstNum, secondNum){
  var operatorArray = ["+", "-", "/", "*"];
  if (($.inArray(operator, operatorArray)) < 0) {
    return "Sorry, that is not a valid operator";
  } else if (isNaN(firstNum) || isNaN(secondNum)) {
    return "Sorry, one of those is not a valid number!";
  };
}

function result(operator, firstNum, secondNum){
  var numOne = parseInt(firstNum);
  var numTwo = parseInt(secondNum);
  var solution;
  switch(operator) {
    case "+":
      solution = numOne + numTwo;
      break;
    case "-":
      solution = numOne - numTwo;
      break;
    case "/":
      solution = numOne / numTwo;
      break;
    case "*":
      solution = numOne * numTwo;
      break;
  }

  $('#result').html(solution);
  return solution;
}

