$(document).ready(function() {
  doMath();
});

var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');

function doMath() {
  $("#equals").on("click", function() {
    num1 = parseInt($('#number1').val());
    operator = $('#operation').val();
    num2 = parseInt($('#number2').val());
    validate(operator, num1, num2);
  })
}

function validate(operator, num1, num2) {
  if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
    if ( isNaN(num1) || isNaN(num2) ) {
      $("#result").text("Sorry, one of those is not a valid number!");
      return 'Sorry, one of those is not a valid number!';
    } else {
      result(operator, num1, num2);
    }
  }

  else {
    $("#result").text("Sorry, that is not a valid operator");
    return 'Sorry, that is not a valid operator';
  }
}

function result(operator, num1, num2) {
  if (operator === "+") {
    $("#result").html(num1 + num2);
    return num1 + num2;
  } else if (operator === "-") {
    $("#result").html(num1 - num2);
    return num1 - num2;
  } else if (opertor === "*") {
    $("#result").html(num1 * num2);
    return num1 * num2;
  } else {
    $("#result").html(num1 / num2);
    return num1 / num2;
  }
}
