var num1 = $('#number1');
var num2 = $('#number2');
var op = $('#operation');

$(document).ready(function(){
  doMath();
});

function doMath(){
  $('#equals').on('click', function(){
    number1 = parseFloat(num1.val());
    number2 = parseFloat(num2.val());
    operator = op.val();
    validate(operator, number1, number2);
  });
}

function validate(operator, number1, number2) {
  if (isNaN(number1) || isNaN(number2) || number1 == '' || number2 == '') {
    $('#result').text('Sorry, one of those is not a valid number!');
    return 'Sorry, one of those is not a valid number!';
  } else {
    if (operator == '+' || operator == '-' || operator == '*' || operator == '/') {
      result(operator, number1, number2);
    } else {
      $('#result').text('Sorry, that is not a valid operator');
      return 'Sorry, that is not a valid operator';
    }
  }
}

function result(operator, number1, number2) {
  if (operator == '+'){
    $('#result').text(number1 + number2);
    return number1 + number2;
  }
  else if (operator == '-'){
    $('#result').text(number1 - number2);
    return number1 - number2;
  }
  else if (operator == '*'){
    $('#result').text(number1 * number2);
    return number1 * number2;
  }
  else if (operator == '/'){
    $('#result').text(number1 / number2);
    return number1 / number2;
  }
}
