$(document).ready(function(){

  doMath();

});

var num1;
var num2;
var operator;

function doMath() {
  $('button#equals').on("click", function() {
    num1 = parseFloat($('input#number1').val());
    num2 = parseFloat($('input#number2').val());
    operator = $('input#operation').val();
  });
  validate(operator, num1, num2);
}

function validate(operator, num1, num2) {
  // if (typeof num1 && typeof num2) == "number")
  if (isNaN(num1) == false && isNaN(num2) == false) {
    switch(operator) {
      case "+":
        result(operator, num1, num2);
      case "-":
        result(operator, num1, num2);
      case "/":
        result(operator, num1, num2);
      case "*":
        result(operator, num1, num2);
      default:
        return "Sorry, that is not a valid operator";
        break;
    }
  } else {
    return "Sorry, one of those is not a valid number!";
  }
}

function result(operator, num1, num2) {
  var result = eval(num1 + operator + num2);
  $('#result').html(result);
  return result;
}
