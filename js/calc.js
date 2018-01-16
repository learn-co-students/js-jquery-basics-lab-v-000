
$(document).ready(function() {
  doMath();
});


function doMath() {
  $("button").on("click", function() {
    var number1 = +$("#number1").val();
    var number2 = +$("#number2").val();
    var operation = $("#operation").val();
    validate(operation, number1, number2);
  });
}

function validate(operator, number1, number2) {
  if (operator == '*' || operator == '/' || operator == '+' || operator == '-') {
    if ( $.isNumeric(number1) && $.isNumeric(number2) ) {
      result(operator, number1, number2);
    } else {
      $("#result").html("Sorry, one of those is not a valid number!");
      return "Sorry, one of those is not a valid number!"
    }
  } else {
     $("#result").html("Sorry, that is not a valid operator");
     return "Sorry, that is not a valid operator";
  }
}

function result(operator, number1, number2) {
  if (operator == '*' ) {
    $("#result").html(number1 * number2);
    return (number1 * number2);
  } else if (operator == '/') {
    $("#result").html(number1 / number2);
    return (number1 / number2);

  } else if (operator == '+') {
    $("#result").html(number1 + number2);
    return (number1 + number2);

  } else if (operator == '-') {
    $("#result").html(number1 - number2);
    return (number1 - number2);

  } else {
    $("#result").html("not a valid operation");
  }
}
