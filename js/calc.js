$(document).ready(function(){
  doMath();
});

  var num1 = $('#number1');
  var num2 = $('#number2');
  var operator = $('#operation');
  var results = $('#result');

function doMath(){
  $('#equals').on('click', function(){
    num1 = parseInt(num1.val());
    num2 = parseInt(num2.val());
    operator = operator.val();
    validate(operator, num1, num2);
  });
}

function validate(operator, firstNumber, secondNumber) {
  if (operator === "/" || operator === "*" || operator === "+" || operator === "-") {
    if (isNaN(num1) || num1 === '' || isNaN(num2) || num2 === '' ) {
      return 'Sorry, one of those is not a valid number!'
    }
  } else {
    return "Sorry, that is not a valid operator";
  }
  result(operator, num1, num2);
}

function result(operator, num1, num2) {
  if (operator == '+'){
    results.html(num1 + num2);
    return num1 + num2;
  }
  else if (operator == '-'){
    results.html(num1 - num2);
    return num1 - num2;
  }
  else if (operator == '/'){
    results.html(num1 * num2);
    return num1 / num2;
  }
  else if (operator == '*'){
    results.html(num1 * num2);
    return num1 * num2;
  }
}
