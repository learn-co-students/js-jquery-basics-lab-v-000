$(document).ready(function(){
  doMath();
});

var number1 = $('#number1');
var number2 = $('#number2');
var operation = $('#operation');

function doMath() {
  $('button').on('click', function() {
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    validate(number1, number2, operation);
  });
}

function result(num1, num2, operation) {
  var sol = eval([num1, operation, num2].join(" "));
  $('#result').replaceWith("<h2 id='result'>" + sol + "</h2>");
  return sol;
}

function validate(number1, number2, operation) {
  var isNum = !isNaN(parseFloat(number1)) && !isNaN(parseFloat(number2));
  if (!isNum) {
    $("#result").text('Sorry, one of those is not a valid number!');
    return "Sorry, one of those is not a valid number!";
  }
  var isOp = ["+", "-", "*", "/"].indexOf(operation) > -1;
  if (!isOp) {
    $("#result").text('Sorry, that is not a valid operator');
    return "Sorry, that is not a valid operator";
  }
  if (isNum && isOp) {
    result(number1, number2, operation);
  }
}
