$(document).ready(function(){
  doMath();
});

var number1 = $('#number1'),
    number2 = $('#number2'),
    operator = $('#operation');



function doMath() {
  $('#equals').click(function(){
    number1 = parseFloat(number1.val());
    number2 = parseFloat(number2.val());
    operator = operator.val();
    validate(operator, number1, number2);
  });
}


function validate(operator, number1, number2) {
  if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {
    if (isNaN(number1) || number1 === '' || isNaN(number2) || number2 === '') {
      $('#result').text('Sorry, one of those is not a vlid number!');

      return 'Sorry, one of those is not a vlid number!';
    }
    else {
      result(operator, number1, number2);
    }
  }
  else {
    $('#result').text('Sorry, that is not a valid operator');
    return 'Sorry, that is not a valid operator';
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
