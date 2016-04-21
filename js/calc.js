var number1;
var number2;
var operation;

function doMath() {
  $('button').on('click', function(){
    number1 = $('input#number1').val();
    operation = $('input#operation') .val();
    number2 = $('input#number2').val();
    number1 = parseInt(number1, 10);
    number2 = parseInt(number2, 10); 
    validate(number1, operation, number2);
  })
}

function validate(operator, num1, num2) {
  if (isNaN(num1) || isNaN(num2)){
    return "Sorry, one of those is not a valid number!";
  } else if (['*', '/', '-', '+'].indexOf(operator) === -1){
    return "Sorry, that is not a valid operator";
  }
  $('div#result').val(result(operator, num1, num2));
}

function result(operator, num1, num2) {
  var solution;

  switch(operator) {
    case '*':
      solution = num1 * num2;
      break;
    case '/':
      solution = num1 / num2;
      break;
    case '+':
      solution = num1 + num2;
      break;
    case '-':
      solution = num1 - num2;
      break;
  }
  return solution;
}

$(document).ready(function() {
  var number1;
  var number2;
  var operation;
  doMath();
  
});