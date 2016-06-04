function doMath() {
  $('#equals').on('click', function() {
    var num1 = $("input#number1").val();
    var num2 = $("input#number2").val();
    var operation = $("input#operation").val();
    validate(operation, number1, number2);
  });
}

function validate(operator, number1, number2) {
  if (operator !== "*" && operator !== "/" && operator !== "+" && operator !== "-") {
    return "Sorry, that is not a valid operator";
  } else if (isNaN(parseInt(number1)) || isNaN(parseInt(number2))) {
    return "Sorry, one of those is not a valid number!";
  } else {
    result(operator, number1, number2);
  }
}

function result(operator, number1, number2) {
  if (operator === "*") {
    var result = (parseInt(number1) * parseInt(number2));
    $("h2#result").text(result);
    return result;
  } else if (operator === "/") {
    var result = (parseInt(number1) / parseInt(number2));
    $("h2#result").text(result);
    return result;
  } else if (operator === "+") {
    var result = (parseInt(number1) + parseInt(number2));
    $("h2#result").text(result);
    return result;
  } else if (operator === "-") {
    var result = (parseInt(number1) - parseInt(number2));
    $("h2#result").text(result);
    return result;
  }
}

$(document).ready(function() {
  doMath();
});