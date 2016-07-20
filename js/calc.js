'use strict';

function doMath() {
  var f = $('#operation')[0].value;
  var numb1 = $('#number1')[0].value;
  var numb2 = $('#number2')[0].value;
  $('#equals').on('click', function(f, numb1, numb2) {
    if (validate(f, numb1, numb2) !== true) {
      return validate(f, numb1, numb2)

    }
    else {
      $('#result').val(result(f, numb1, numb2))
    }
  });


}


function validate(operator, num1, num2) {
  var f = operator;
  var numb1 = num1
  var numb2 = num2
  var operators = ["+", "-", "*", "/"];
  if (!operators.includes(f)) {
    return "Sorry, that is not a valid operator";
  }
  else if (isNaN(numb1)) {
    return "Sorry, one of those is not a valid number!";
  }
  else if (isNaN(numb2)) {
    return "Sorry, one of those is not a valid number!";
  }
  else {
    return true
  }
  


}


function result(operator, num1, num2) {
  var f = operator;
  var numb1 = parseInt(num1);
  var numb2 = parseInt(num2);
  if (operator === '+'){
  return numb1 + numb2
  }
  else if (operator === '-') {
    return numb1 - numb2
  }
  else if (operator === '*') {
    return numb1 * numb2
  }
  else if (operator === '/') {
    return numb1 % numb2
  }

}




$(document).ready(function() {
 

   doMath();
}); 
