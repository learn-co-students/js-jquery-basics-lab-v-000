function doMath() {
  $('#equals').on('click', function () {
    // validate math operation here
    if(validate(operator, operand1, operand2)) {
      result(operator, operand1, operand2)
    }
  });
}

function validate(operator, operand1, operand2) {
  // if((operator == '+' || operator == "-" || operator == "*" || operator == "/") && !(isNaN(operand1 && operand2))) {
  //   return true;
  // } else if (isNaN(operand1, operand2)) {
  //   return "Sorry, that is not a valid operator";
  // }

  if (!isNaN(operand1) && !isNaN(operand2)) {
    if (operator == "+" || operator == "-" || operator =="*" || operator == "/") {
      result(operator, operand1, operand2);
    } else {
      $("#result").html("Sorry, that is not a valid operator");
      return "Sorry, that is not a valid operator";
    }
  } else {
    $("#result").html("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  }

}

function result(operator, operand1, operand2) {
  // var result;
  // if(operator == "+") {
  //   result = operand1 + operand2;
  // } else if (operator == "-") {
  //   result = operand1 - operand2;
  // } else if (operator == "*") {
  //   result = operand1 * operand2;
  // } else {
  //   result = operand1 / operand2;
  // }

  if (operator == "+"){
    $('#result').html(operand1 + operand2);
    return operand1 + operand2;
  } else if (operator == "-"){
    $('#result').html(operand1 - operand2);
    return operand1 - operand2;
  } else if (operator == "*"){
    $('#result').html(operand1 * operand2);
    return operand1 * operand2;
  } else if (operator == "/"){
    $('#result').html(operand1 / operand2);
    return operand1 / operand2;
  }

}
