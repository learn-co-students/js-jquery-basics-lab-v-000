$(document).ready(function(){
  doMath();
});

var operators = ["+", "-", "*", "/"];

function validate(operator, firstNum, secondNum) {
  if (isNaN(firstNum) || isNaN(secondNum)) {
    $('#result').text("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  } else if (!operators.includes(operator)) { // this is what passed (operator != "+" || operator != "-" || operator != "*" || operator != "/") {
    $('#result').text("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  } else {
    result(operator, firstNum, secondNum);
  }
}

function result(operator, firstNum, secondNum) {
  switch (operator) {
    case("+"): $('#result').text(firstNum + secondNum);
      return firstNum + secondNum;
    case("-"): $('#result').text(firstNum - secondNum);
      return firstNum - secondNum;
    case("*"): $('#result').text(firstNum * secondNum);
      return firstNum * secondNum;
    case("/"): $('#result').text(firstNum / secondNum);
      return firstNum / secondNum;
    default: $('#result').text("Sorry, that is not a valid operator"); // Could have used this fi the tests weren't so bad
  }
}

function doMath() {
  $('#equals').on('click', function(){
    var operator = $('#operation').val(),
        firstNum = parseInt($('#number1').val()),
        secondNum = parseInt($('#number2').val());
    validate(operator, firstNum, secondNum);
  });
}
