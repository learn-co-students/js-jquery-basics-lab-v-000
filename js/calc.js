'use strict';

function doMath() {
  var num1,
      num2,
      op;

  $('#equals').click(function() {
    op = $('#operation').vail();
    num1 = parseFloat($('#number1').val());
    num2 = parseFloat($('#number2').val());
    validate(op, num1, num2);
  });
}

function validate(operator, num1, num2) {
  var msg_inv_num = "Sorry, one of those is not a valid number!";
  var msg_inv_op = "Sorry, that is not a valid operator";

  if (isNaN(num1) || num1 === '' || isNaN(num2) || num2 === '') {
    alert(msg_inv_num);
    return msg_inv_num;
  }
  else if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
    alert(msg_inv_op);
    return msg_inv_op;
  }
  else {
    result(operator, num1, num2);
  }
}

function result(operator, num1, num2) {
  var result = 0;

  switch(operator) {
    case "+":
      result = num1 + num2;
      $('#result').text(result);
      return result;
      break;
    case "-":
      result = num1 - num2;
      $('#result').text(result);
      return result;
      break;
    case "*":
      result = num1 * num2;
      $('#result').text(result);
      return result;
      break;
    case "/":
      result = num1 / num2;
      $('#result').text(result);
      return result;
      break;
  }
}

$(document).ready(function() {
  doMath();
});
