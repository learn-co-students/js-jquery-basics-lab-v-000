$(document).ready(function() {
  doMath();
});

function doMath() {
  $('button').on('click', function() {
    var number1 = parseInt($('#number1').val());
    var operation = $('#operation').val();
    var number2 = parseInt($('#number2').val());
    validate(operation, number1, number2);
  });
}

function validate(operator, number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    return "Sorry, one of those is not a valid number!";
  }
  if (operator != "+" || operator != "-" || operator != "*" || operator != "/") {
    return "Sorry, that is not a valid operator";
  }
  result(operator, number1, number2);  
}

function result(operator, number1, number2) {
  if (operator == '+') {
    $('#result').html(number1 + number2);
    return number1 + number2;
  }
  else if (operator == '-') {
    $('#result').html(number1 - number2);
    return number1 - number2;
  }
  else if (operator == '*') {
    $('#result').html(number1 * number2);
    return number1 * number2;
  }
  else if (operator == '/') {
    $('#result').html(number1 / number2);
    return number1 / number2;
  }
}