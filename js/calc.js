var input1, input2, operation;

function doMath() {
  $('#equals').on('click', function() {
    input1 = parseInt($('#number1').val());
    input2 = parseInt($('#number2').val());
    operation = $('#operation').val();
    if (typeof validate(operation, input1, input2) !== 'string') {
      result(operation, input1, input2);
    }
  });
}

function validate(operator, num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return "Sorry, one of those is not a valid number!";
  }
  if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
    return "Sorry, that is not a valid operator";
  }
}

function result(operator, num1, num2) {
  switch(operation) {
    case '+':
      $('#result').html(num1+num2);
      return num1+num2;
      break;
    case '-':
      $('#result').html(num1-num2);
      return num1-num2;
      break;
    case '*':
      $('#result').html(num1*num2);
      return num1*num2;
      break;
    case '/':
      $('#result').html(num1/num2);
      return num1/num2;
      break;
  }
}

$(document).ready(function() {
  doMath();
});