$(document).ready(function () {
  doMath();
});

function doMath(){
  $('#equals').on('click', function() {
    var num1 = parseInt($('#number1').val())
        num2 = parseInt($('#number2').val()),
        operation = $('#operation').val();
        validate(num1, num2, operand);
  })
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
