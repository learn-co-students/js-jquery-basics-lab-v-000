'use strict';

$(document).ready(function() {
 

   doMath();
}); 

function doMath() {

 
  $('#equals').on('click', function() {
      var f = $('#operation').val();
  var numb1 = $('#number1').val();
  var numb2 = $('#number2').val();
     
      return validate(f, numb1, numb2)

    }
 
  );


}


function validate(operator, num1, num2) {
 
  var operators = ["+", "-", "*", "/"];
  if (!operators.includes(operator)) {
    console.log('operator')
    $('#result').text('Sorry, that is not a valid operator')
    return "Sorry, that is not a valid operator";
  }
  else if (isNaN(num1)) {
    $('#result').text('Sorry, one of those is not a valid number!')
    return "Sorry, one of those is not a valid number!";
  }
  else if (isNaN(num2)) {
     $('#result').text('Sorry, one of those is not a valid number!')
    return "Sorry, one of those is not a valid number!";
  }
  else {
     $('#result').text(result(operator, num1, num2))
    return result(operator, num1, num2)
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




