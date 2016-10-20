var num1 = $('#number1');
var num2 = $('#number2');
var oper = $('#operation');

function doMath() {
  $('#equals').on('click', function() {
    num1 = parseInt(num1.val());
    num2 = parseInt(num2.val());
    oper = oper.val();

    validate(oper, num1, num2);
  })
}

function validate(oper, num1, num2) {
  if (isNaN(num1) || num1 === '' || isNaN(num2) || num2 === '') {
    return "Sorry, one of those is not a valid number!";
  }
  else if (["+", "-", "*", "/"].indexOf(oper) === -1) {
    return "Sorry, that is not a valid operator";
  }
  else {
    result(num1, oper, num2);
  }
}

function result(oper, num1, num2 ) {
  var answer = eval(num1 + oper + num2);
  $('#result').html(answer);
  return answer;
}

$(document).ready(function(){

doMath();

});
