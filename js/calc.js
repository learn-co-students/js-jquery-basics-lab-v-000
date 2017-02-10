$(document).ready(function() {
  doMath();
});

var num1 = $('number1');
var num2 = $('number2');
var operator = $('#operation');

function doMath() {
  $("#equals").on("click", function() {
    num1 = parseInt($("#number1").val(), 10);
    num2 = parseInt($("#number2").val(), 10);
    operator = operator.val();
    validate(operator, num1, num2);
  });
}

function validate(operator, num1, num2) {
  if (isNaN(num1) || num1 === "" || isNaN(num2) || num2 === "") {
    $("#result").text("Sorry, one of those is not a valid number!");
    return 'Sorry, one of those is not a valid number!'
  } else if (/.[\+\-\*\/]/.test(operator) === false) {
    $("#result").text("Sorry, that is not a valid operator");
    return 'Sorry, that is not a valid operator'
  } else {
    result(operator, number1, number2);
  }
}

function result(operator, number1, number2) {

}

