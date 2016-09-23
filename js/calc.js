var number1 = $('#number1');
var number2 = $('#number2');
var operation = $('#operation');

$(document).ready(function() {
  doMath();
});

function doMath() {
  $('#equals').on('click', function() {
    n1 = parseFloat(number1.val());
    n2 = parseFloat(number2.val());
    op = operation.val();
    validate(op, n1, n2);
  });
}

function validate(op, n1, n2) {
  if (!n1 || !n2 || isNaN(n1) || isNaN(n2)) {
    $('#result').text('Sorry, one of those is not a valid number!');
    return 'Sorry, one of those is not a valid number!';
  } else if (!op || !(op === '+' || op === '-' || op === '*' || op === '/')) {
    $('#result').text('Sorry, that is not a valid operator');
    return 'Sorry, that is not a valid operator';
  } else {
    result(op, n1, n2);
  }
}

function result(op, n1, n2) {
  var result;
  switch (op) {
    case '-':
    result = n1 - n2;
    break;
    case '*':
    result = n1 * n2;
    break;
    case '/':
    result = n1 / n2;
    break;
    default: // addition
    result = n1 + n2;
  }
  $('#result').html(result);
  return result;
}