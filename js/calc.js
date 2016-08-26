var numberOne = $("#number1")
var numberTwo = $("#number2")
var operation = $("#operation")

$(document).ready(function(){
  doMath();
});

function doMath() {
  $("#equals").on("click", function() {
    numberOne = parseInt(numberOne.val());
    numberTwo = parseInt(numberTwo.val());
    operation = operation.val()
    validate(operation, numberOne, numberTwo)
  })
}

function validate(operator, number1, number2) {
  if (isNaN(number1) || isNaN(number2) || number1 == '' || number2 == '') {
    $('#result').text('Sorry, one of those is not a valid number!');
    return 'Sorry, one of those is not a valid number!';
  } else {
    if (operator == '+' || operator == '-' || operator == '*' || operator == '/') {
      result(operator, number1, number2);
    } else {
      $('#result').text('Sorry, that is not a valid operator');
      return 'Sorry, that is not a valid operator';
    }
  }
}

function result(operation, numberOne, numberTwo) {
  if (operation === "+") {
    $("#result").append(numberOne + numberTwo);
    return numberOne + numberTwo;
  } else if (operation === "-") {
    $("#result").append(numberOne - numberTwo);
    return numberOne - numberTwo
  } else if (operation === "*") {
    $("#result").append(numberOne * numberTwo);
    return numberOne * numberTwo
  } else {
    $("#result").append(numberOne / numberTwo);
    return numberOne / numberTwo
  }
}