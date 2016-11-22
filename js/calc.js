// $(document).ready(function(){
//
//
//   doMath();
//
// });
//
//   var firstNumber = $('#number1');
//   var secondNumber = $('#number2');
//   var operator = $('#operation');
//

function doMath() {
  $('#equals').on("click", function() {
    var firstNumber = parseFloat($('#number1'));
    var secondNumber = parseFloat($('#number2'));
    var operator = $('#operation');
    validate(operator, firstNumber, secondNumber)
  })
}

function validate(operator, firstNumber, secondNumber) {
  if (operator != "+" && operator != "-" && operator != "*" && operator != "/") {
    // $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator"
  } else { if (isNaN(firstNumber) || isNaN(secondNumber)) {
    //  $('#result').html("Sorry, that is not a valid operator");
    return 'Sorry, one of those is not a valid number!'
    }
  }
  result(operator, firstNumber, secondNumber)
}

function result(operator, firstNumber, secondNumber) {
  if (operator == '+') {
    // $('#result').html(firstNumber + secondNumber);
    return firstNumber + secondNumber;
  }
  else if (operator == '-') {
    // $('#result').html(firstNumber - secondNumber);
    return firstNumber - secondNumber;
  }
  else if (operator == '*') {
    // $('#result').html(firstNumber * secondNumber);
    return firstNumber * secondNumber;
  }
  else if (operator == '/') {
    // $('#result').html(firstNumber / secondNumber);
    return firstNumber / secondNumber;
  }
}
