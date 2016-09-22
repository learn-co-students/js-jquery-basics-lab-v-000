var num1 = $('#number1').val();
var num2 = $('#number2').val();
var operator = $('#operation').val();

function doMath() {
  $('#equals').on("click", function() {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    validate(operator, num1, num2);
  });
}

function validate(operator, num1, num2) {
  if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {
    if (isNaN(num1) || isNaN(num2)) {
      $("#result").text('Sorry, one of those is not a valid number!');
      return 'Sorry, one of those is not a valid number!';
    } else {
      result(operator, num1, num2);
    }
  } else {
    $('#result').text("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  }
}

function result(operator, num1, num2) {
  switch(operator) {
    case "+":
      $('result').text(num1 + num2);
      return num1 + num2;
      break;
    case "-":
      $('result').text(num1 - num2);
      return num1 - num2;
      break;
    case "*":
      $('result').text(num1 * num2);
      return num1 * num2;
      break;
    case "/":
      $('result').text(num1 / num2);
      return num1 / num2;
      break;
  }
}

$(document).ready(function() {
  doMath();
});
