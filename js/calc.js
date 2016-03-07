function result(op, n1, n2) {
  switch (op) {
    case "+":
      var ans = n1 + n2;
      break;
    case "-":
      var ans = n1 - n2;
      break;
    case "*":
      var ans = n1 * n2;
      break;
    case "/":
      var ans = n1 / n2;
      break;
  }

  $('#result').append(ans);
  return ans;
}

function validate(op, n1, n2) {
  var operators = ["+", "-", "*", "/"];

  if (isNaN(n1) || isNaN(n2)) {
    alert("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  } else if (operators.indexOf(op) === -1) {
    alert("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  } else {
    result(op, n1, n2);
  }

}

function doMath() {
  $('#equals').on('click', function() {
    var num1 = parseInt($('#number1').val()),
      num2 = $('#number2').val(),
      op = $('#operation').val();

      validate(op, num1, num2);
  });
}
