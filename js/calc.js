
$(document).ready(function() {

  doMath();

});

function doMath() {

  $('#equals').on('click', function() {
    var result = validate($('#number1').val(), $('#number2').val(), $('#operation').val());
    $('#result').val(result)
    return;
  });
}

function validate(operation, firstNum, secondNum) {
  if (isNaN(firstNum) || isNaN(secondNum)) {
    return "Sorry, one of those is not a valid number!";
  } else if (operation !== "+" && operation !== "-" && operation != "/" && operation != "*") {
    return "Sorry, that is not a valid operator";
  } else {
    return result(operation, parseFloat(firstNum), parseFloat(secondNum));
  }
}


function result(operation, firstNum, secondNum) {
  switch (operation) {
    case "+":
      return firstNum + secondNum;
      break;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum * secondNum;
    default:
      return "Sorry, that is not a valid operator";
  }
}
