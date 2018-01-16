

function doMath() {
  $('button#equals').on('click', function() {
    var number1 = parseInt($('input#number1').val());
    var number2 = parseInt($('input#number2').val());
    var operator = $('input#operation').val();
  });
}

function validate(operator, number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    return "Sorry, one of those is not a valid number!";
  }

  if (operator != "*" &&operator != "+" && operator != "-" && operator != "/" ) {
    return "Sorry, that is not a valid operator";
  }
}

function result(operator, number1, number2) {
  if (operator == "*") {
    return number1 * number2;
  } else if (operator == '+') {
    return number1 + number2;
  } else if (operator == '-') {
    return number1 - number2;
  } else if (operator == '/') {
    return number1/number2;
  }
}
