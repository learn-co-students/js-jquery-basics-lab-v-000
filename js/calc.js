
$(document).ready(function() {
  doMath();
});

function doMath() {
  $('#equals').on('click', function() {
    var number1 = parseFloat($('#number1').val());
    var number2 = parseFloat($('#number2').val());
    var operator = $('#operation').val();
    validate(operator, number1, number2);
  });
};

function validate(operator, number1, number2) {
  if (!isNaN(number1) && !isNaN(number2)) {
    if (operator == '+' || operator == '-' || operator == '/' || operator == '*') {
      result(operator, number1, number2);
    } else {
      return "Sorry, that is not a valid operator";
    }
  } else {
    return "Sorry, one of those is not a valid number!";
  }
};

function result(operator, number1, number2) {
  var result = eval(number1 + operator + number2);
  $('#result').text(result);
  return result;
}
