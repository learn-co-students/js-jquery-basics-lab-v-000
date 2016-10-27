function result(operator, firstNumber, secondNumber) {
  switch(operator) {
    case "+": return (firstNumber + secondNumber);
    case "-": return (firstNumber - secondNumber);
    case "*": return (firstNumber * secondNumber);
    case "/": return (firstNumber / secondNumber);
  }
}

function validate(operator, firstNumber, secondNumber) {
  if(isNaN(firstNumber) || isNaN(secondNumber)) {
    return "Sorry, one of those is not a valid number!";
  } else if (operator != "+" || operator != "-" || operator != "*" || operator != "/") {
    return "Sorry, that is not a valid operator";
  }
}

function doMath() {
  $('button#equals').on('click', function() {
    operator = $('input#operation').val();
    firstNumber = parseInt($('input#number1').val());
    secondNumber = parseInt($('input#number2').val());
    $('h2#result').text(result(operator, firstNumber, secondNumber));
  });
}

doMath();
