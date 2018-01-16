$(document).ready(function() {
  console.log("DOM is ready")
  doMath;
});

var num1;
var num2;
var operation;

function doMath() {
  $('button#equals').on('click', function() {
    num1 = parseFloat($('#number1').val());
    num2 = parseFloat($('#number2').val());
    operation = $('#operation').val();
    
    validate(num1, num2, operation);

  });
}

function validate(operation, num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return "Sorry, one of those is not a valid number!";
  } else if (operation == "+" || operation == "-" || operation == "*" || operation == "/") {
    return result(num1, num2, operation);
  } else {
    return "Sorry, that is not a valid operator";
  }
}

function result(operation, num1, num2) {
  var result = eval(num1 + operation + num2);
  $("h2#result").html(result);
  return result;
}