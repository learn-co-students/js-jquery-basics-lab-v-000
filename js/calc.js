function doMath() {
  $('#equals').on('click', function() {
    var num1 = parseInt($('#number1').val(), 10);
    var operator = $('#operation').val();
    var num2 = parseInt($('#number2').val(), 10);
    validate(operator, num1, num2);
  });
}

function validate(operator, num1, num2) {
  const validOperators = [ "+", "-", "*", "/"]

  if (validOperators.indexOf(operator) === -1) {
    $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  }

  if (isNaN(num1) || num1 === '' || isNaN(num2) || num2 === '') {
    $("#result").text('Sorry, one of those is not a valid number!');
    return "Sorry, one of those is not a valid number!";
  }
  result(operator, num1, num2);
}

function result(operator, num1, num2) {
  var answer = eval(num1 + operator + num2)
  $('#result').html(answer)
  return answer;
}

$(document).ready(function() {
  doMath();
})
