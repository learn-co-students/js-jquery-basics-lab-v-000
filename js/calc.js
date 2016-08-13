$(document).ready(function () {
   doMath();
 });

function doMath() {
  $('#equals').on('click', function() {
    var num1 = parseFloat($('number1').val());
    var num2 = parseFloat($('number2').val());
    var operation = $('#operation').val();
    validate(num1, num2, operation);
  })
}

function validate(operation, num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return "Sorry, one of those is not a valid number!";
  }
  else if (["+", "-", "*", "/"].indexOf(operation) === -1) {
    return "Sorry, that is not a valid operator";
  }
  else {
    result(operation, num1, num2);
  }
}

function result(operation, num1, num2) {
  switch(operation) {
    case '+':
      var result = num1 + num2;
      $("#result").text(result); break;
    case '-':
      var result = num1 - num2; 
      $("#result").text(result); break;
    case '*':
      var result = num1 * num2;
      $("#result").text(result); break;
    case '/':
      var result = num1 / num2;
      $("#result").text(result); break;
  }
  return result;
}