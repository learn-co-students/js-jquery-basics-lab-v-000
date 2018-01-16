'use strict';

function doMath() {
  var read_num1,
      read_num2,
      read_op;

  $('button#equals').click(function() {
    read_op = $('#operation').val();
    read_num1 = parseFloat( $('#number1').val() );
    read_num2 = parseFloat( $('#number2').val() );
    validate(read_op, read_num1, read_num2);
  });
}

function validate(operator, num1, num2) {
  var message_invalid_num = "Sorry, one of those is not a valid number!";
  var message_invalid_op = "Sorry, that is not a valid operator";

  if (isNaN(num1) || num1 === '' || isNaN(num2) || num2 === '') {
    alert(message_invalid_num);
    return message_invalid_num;
  }
  else if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
    alert(message_invalid_op);
    return message_invalid_op;
  }
  else {
    result(operator, num1, num2);
  }
}

function result(operator, num1, num2) {
  var result_send = 0;

  switch (operator) {
    case "+":
      result_send = num1 + num2;
      $('#result').text(result_send);
      return result_send;
      break;
    case "-":
      result_send = num1 - num2;
      $('#result').text(result_send);
      return result_send;
      break;
    case "*":
      result_send = num1 * num2;
      $('#result').text(result_send);
      return result_send;
      break;
    case "/":
      result_send = num1 / num2;
      $('#result').text(result_send);
      return result_send;
      break;
  }
}

$(document).ready(function(){
  doMath();
});