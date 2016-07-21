$(document).ready(function () {
  doMath();
});

function doMath() {
  $('#equals').on('click', function () {
    var number1 = $('#number1').val(),
        number2 = $('#number2').val(),
        operand = $('#operation').val();

    validate(number1, number2, operand);
  });
}

function validate(operand, num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return "Sorry, one of those is not a valid number!";
  } else if (["+", "-", "*", "/"].indexOf(operand) === -1) {
    return "Sorry, that is not a valid operator";
  } else {
    result(number1, number2, operand);
  }
}

function result(operand, num1, num2) {
  var result = eval(num1 + operand + num2);
  $('#result').html(result);
  return result;
}
