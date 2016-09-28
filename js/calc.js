function doMath() {
  $('button#equals').on('click', function() { 
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var operator = $('#operation').val();

    validate(operator, number1, number2);
  });
}

function validate(operator, number1, number2) {
  validOperators = ['+', '-', '*', '/'];

  if ( isNaN(number1) || isNaN(number2) ) {
    return $('#result').text("Sorry, one of those is not a valid number!")
  }
  if ( !validOperators.includes(operator) ) {
    return $('#result').text("Sorry, that is not a valid operator");
  }
  result(operator, number1, number2);
}

function result(operator, number1, number2) {
  var answer = eval(number1 + operator + number2);
  $('#result').text(answer);
}

$(document).ready(function() {
  doMath();
});