doMath();

$(document).ready(function(){

});

var num1;
var num2;
var operator;

function doMath() {
  $('button#equals').on("click", function() {
    num1 = parseInt($('input#number1').val());
    num2 = parseInt($('input#number2').val());
    operator = $('input#operation').val();
    validate(operator, num1, num2);
  });
}

function validate(operator, num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) {
    if (operator == "+" || operator == "-" || operator == "/" || operator == "*") {
      result(operator, num1, num2);
    } else {
      return("Sorry, that is not a valid operator");
    }
  } else {
    return "Sorry, one of those is not a valid number!";
  }
}

function result(operator, num1, num2) {
  var answer = eval(num1 + operator + num2);
  $('#result').text(answer);
  return answer;
}
