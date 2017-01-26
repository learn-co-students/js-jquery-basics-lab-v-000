$(document).ready(function() {

  doMath();
});

var operator = $('#operation');
var num1 = $('#number1');
var num2 = $('#number2');

function doMath() {
  $('#equals').on('click', function() {
    num1 = parseFloat(num1.val());
    operator = operator.val();
    num2 = parseFloat(num2.val());
    validate(operator, num1, num2);
  });
}

function validate(operator, num1, num2) {
  if (operator == '+' || operator == '-' || operator == '*' || operator == '/') {
    if (isNaN(num1) || num1 === '' || num2 === '' || isNaN(num2)) {
      $("#result").text('Sorry, one of those is not a valid number!');
      return "Sorry, one of those is not a valid number!";
    } else {
      result (operator, num1, num2);
    }
  }
  else {
    $("#result").text('Sorry, one of those is not a valid number!');
    return "Sorry, that is not a valid operator"
  }
}

function result(operator, num1, num2) {
  if (operator == '/') {
    $('#result').html(num1 / num2);
    return num1 / num2;
  } else if (operator == '+') {
    $('#result').html(num1 + num2);
    return num1 + num2;
  } else if (operator == '-') {
    $('#result').html(num1 - num2);
    return num1 - num2;
  } else {
    $('#result').html(num1 * num2);
    return num1 * num2;
  }
}
