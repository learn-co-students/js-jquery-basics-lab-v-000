$(document).ready(function(){
  doMath();
});

var number1 = $('#number1');
var number2 = $('#number2');
var operation = $('#operation');

function doMath() {
  $('#equals').on('click', function(){
    number1 = parseFloat(number1.val());
    number2 = parseFloat(number2.val());
    operation = operation.val();
    validate(operation, number1, number2);
    $('#result').html(result(operation, number1, number2));
  });
}

function validate(operation, number1, number2){
  var operations = ['+', '-', '*', '/'];
  if (operations.indexOf(operation) == -1) {
    return "Sorry, that is not a valid operator";
  }
  if (isNaN(number1) || isNaN(number2)){
    return "Sorry, one of those is not a valid number!";
  }
}

function result(operation, number1, number2){
    var result = 0;
    if (operation == "+") {
      result = number1 + number2;
    } else if (operation == "-") {
      result = number1 - number2;
    } else if (operation == "/") {
      result = number1 / number2;
    } else {
      result = number1 * number2;
    }
    return result;
}



