function doMath() {
  $('#equals').on('click', function() {
    number1 = $('#number1').val();
    number2 = $('#number2').val();
    operator = $('#operation').val();
    validate(operator, number1, number2);
    result(operator, Number(number1), Number(number2));
  });
}

function validate(operator, number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    return 'Sorry, one of those is not a valid number!';
  }
  if (!(operator === '+' || operator === '-' || operator === '*' || operator === '/')) {
    return 'Sorry, that is not a valid operator'
  }
}

function result(operator, number1, number2) {
  var operators = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { return a / b },
  };

  var op = operator;
  var mathResult = (operators[op](number1, number2));
  document.getElementById('result').innerHTML = mathResult;
  return mathResult;
}

$(document).ready(function() {
  var number1, number2, operator;
  validate($('#operator'), $('#number1'), $('#number2'));
  doMath();
});
