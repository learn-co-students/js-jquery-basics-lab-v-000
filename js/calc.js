
function doMath() {
  $('#equals').on('click', function() {
    operator = $('#operation').val();
    num1 = Number($('#number1').val());
    num2 = Number($('#number2').val());
    validate(operator, num1, num2);
  });
}

function validate(operator, num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) {
    if (operator == "+" || operator == "-" || operator =="*" || operator == "/") {
      result(operator, num1, num2);
    } else {
      $("#result").html("Sorry, that is not a valid operator");
      return "Sorry, that is not a valid operator";
    }
  } else {
    $("#result").html("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  }
}

function result(operator, num1, num2) {
  var calc = new Number;
  if (operator === "+") {
    calc = num1 + num2;
  } else if(operator === "-") {
    calc = num1 - num2;
  } else if(operator === "*") {
    calc = num1 * num2;
  } else if(operator === "/") {
    calc = num1 / num2;
  }
  $("#result").html(calc);
  return calc;

}
$(document).ready(function() {
  doMath();
});
