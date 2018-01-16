$(document).ready(function(){

  doMath();

});

var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');


function doMath(){
  $('#equals').on('click', function(){
    num1 = parseFloat(num1.val());
    num2 = parseFloat(num2.val());
    operator = operator.val();
    result(operator, num1, num2);
  });
}  

function validate(operator, num1, num2) {
  if(operator !== '*' && operator !== '+' && operator !== '/' && operator !== '-') {
    return "Sorry, that is not a valid operator";
  } else if(isNaN(num1) || isNaN(num2)) {
    return "Sorry, one of those is not a valid number!";
  } else {
    return true;
  }
}

function result(operator, num1, num2) {
  var answer = 0;
  if (validate(operator, num1, num2) != true) {
    answer = validate(operator, num1, num2);
  } else if(operator == "+") {
    answer = num1 + num2;
  } else if(operator == "-") {
    answer = num1 - num2;
  } else if(operator == "/") {
    answer = num1 / num2;
  } else {
    answer = num1 * num2;
  }
  $('#result').html(answer);
  return answer;
}