

var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');


function doMath(){
  $('#equals').on('click', function() {
    num1 = parseFloat(num1.val());
    num2 = parseFloat(num2.val());
    operator = operator.val();
    validate(operator, num1, num2);
  });
}

function validate(operator, num1, num2){
  if (isNaN(num1) || isNaN(num2)) {
     return "Sorry, one of those is not a valid number!";
  }
  else if (!["+", "-", "*", "/"].includes(operator)) {
     return "Sorry, that is not a valid operator";
  }
  else{
    result(num1, num2, operator);    
  }
}

function result(operator, num1, num2){
  return eval(num1 + operator + num2);
}



$(document).ready(function(){

doMath()

});