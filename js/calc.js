$(document).ready(function(){

  doMath();

});

var num1 = $("#number1");
var num2 = $("#number2");
var operator = $("#operation");

function doMath() {
  $("button#equals").on('click', function() {
    num1 = parseFloat(num1.val());
    num2 = parseFloat(num2.val());
    operator = operator.val();
    validate(operator, num1, num2);
  });
}

function validate(operator, num1, num2) {
  if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
    $("#result").text("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  } else if (operator !== "+" && operator !== "/" && operator !== "*" && operator !== "-" ) {
    $("#result").text("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  } else {
    result(operator, num1, num2);
  }
}

function result(operator, num1, num2) {
  if (operator === "+") {
    $("#result").text(num1 + num2)
    return num1 + num2
  } else if (operator === "-") {
    $("#result").text(num1 - num2)
    return num1 - num2
  } else if (operator === "*") {
    $("#result").text(num1 * num2)
    return num1 * num2
  } else {
    $("#result").text(num1 / num2)
    return num1 / num2
}
}