function result(operator, num1, num2) {
  return eval(num1 + operator + num2);
}

function validate(operator, num1, num2) {
  var num1 = num1;
  var operator = operator;
  var num2 = num2;
  var operatorMatch = /[+\-*/]/

  if (!operatorMatch.test(operator)) {
    return "Sorry, that is not a valid operator";
  } else if (isNaN(num1) || isNaN(num2)) {
   return "Sorry, one of those is not a valid number!";
 } else {
   return result(operator, num1, num2)
 }
}

function doMath() {
  $('#equals').on('click', function() {
    var operator = $('#operation').val();
    var num1 = $('#number1').val();
    var num2 = $('#number2').val();
    var result = validate(operator, num1, num2)
    $('#result').text(result);
  });
}

$(document).ready(function() {
  doMath()
});
