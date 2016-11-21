var num1;
var num2;
var operation;

function doMath() {
  $('#equals').on('click', function() {
    num1 = Number($('#number1').val());
    num2 = Number($('#number2').val());
    operation = $('#operation').val()
  });
}

function validate(op, n1, n2) {
  valid_ops = ["+", "-", "*", "/"];
  if ($.inArray(op, valid_ops) == -1) {
    return 'Sorry, that is not a valid operator'
  } else if (typeof(n1) != 'number' || typeof(n2) != 'number') {
    return 'Sorry, one of those is not a valid number!'
  } else {
    return 
  }
}

function result(op, n1, n2) {
  switch (op) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    case '/':
      return n1 / n2;
  }
}