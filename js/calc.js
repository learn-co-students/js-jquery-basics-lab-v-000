$(document).ready(function(){
  console.log("DOM is ready")
  doMath();
});

var num1;
var num2;
var operand;

function doMath() {
  $('button#equals').on('click', function() {
    num1 = parseFloat($('input#number1').val());
    num2 = parseFloat($('input#number2').val());
    operand = $('input#operation').val();
    console.log('equals clicked');
    validate(operand, num1, num2);
  });
}

function validate(operand, num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return 'Sorry, one of those is not a valid number!';
  } else if (operand == "+" || operand == "-" || operand == "*" || operand == "/") {
    return result(operand, num1, num2);
  } else {
    return 'Sorry, that is not a valid operator';
  }
}

function result(operand, num1, num2) {
  var result = eval(num1 + operand + num2);
  $('h2#result').html(result);
  return result;
}
