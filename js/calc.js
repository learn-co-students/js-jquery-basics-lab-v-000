'use strict';
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
    validate(operator, num1, num2);
  });
}


function validate(sign, num1, num2){
  if([ '+', '-', '*', '/'].indexOf(sign) === -1){
    return "Sorry, that is not a valid operator";
  } else if(isNaN(num1) || isNaN(num2)) {
    return "Sorry, one of those is not a valid number!";
  }
  else {
    result(operator, num1, num2);
  }
}

function result(sign, num1, num2){
  var result = ''
  switch(sign) {
    case '+':
      result = num1+num2;
      break;
    case '-':
      result = num1-num2;
      break;
    case '*':
      result = num1*num2;
      break;
    case '/':
      result = num1/num2;
      break;
  }
  $('#result').append(result);
  return result;
}