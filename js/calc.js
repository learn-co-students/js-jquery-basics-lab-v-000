$(document).ready(function() {
  doMath();
});

var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');

function doMath() {
  $('#equals').on('click', function() {
    num1 = parseFloat(num1.val());
    num2 = parseFloat(num2.val());
    operator = operator.val();
    validate(operator, num1, num2);
  });
}

function validate(operator, num1, num2) {
  if(operator == "+" || operator == "-" ||operator == "*" ||operator == "/") {
    if(isNaN(num1) || isNaN(num2)) {
      $('#result').text("Sorry, one of those is not a valid number!");
      return 'Sorry, one of those is not a valid number!'
    }
    else {
      result(operator, num1, num2);
    }
  }
  else {
    $('#result').text("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator"
  }
};

function result(operator, num1, num2) {
  switch(operator) {
    case "+":
      var answer = num1 + num2;
      break;
    case "-":
      var answer = num1 - num2;
      break;
    case "*":
      var answer = num1 * num2;
      break;
    case "/":
      var answer = num1 / num2;
      break;
  }
  $('#result').html(answer);
  return answer;
};