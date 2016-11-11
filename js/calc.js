function doMath() {
  $('#equals').on('click', function() {
    var number1 = $('#number1').val();
    var number2 = $('#number2').val();
    var operator = $('#operation').val();
    validate(operator, number1, number2);
  });
}

function validate(operator, number1, number2) {
  if (!isNaN(number1) && !isNaN(number2)) {
    if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {
      result(operator, number1, number2);
    } else {
      return "Sorry, that is not a valid operator";
    }
  } else {
    return "Sorry, one of those is not a valid number!";
  }
}

// function result(operator, number1, number2) {
//   var answer = eval(number1 + operator + number2);
//   $("#result").val(answer);
//   return answer;
// }

function result(operator, number1, number2) {
  if (operator === "+") {
    $('#result').append(number1 + number2);
    return number1 + number2;
  } else if (operator === "-") {
    $('#result').append(number1 + number2);
    return number1 - number;
  } else if (operator === "*") {
    $('#result').append(number1 + number2);
    return number1 * number2;
  } else if (operator === "/") {
    $('#result').append(number1 + number2);
    return number1 / number2;
  }
}

$(document).ready(function() {
  doMath();
  validate();
  result();
})
