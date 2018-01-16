function doMath() {
  $("#equals").on('click', function () {
    var operand1 = parseFloat($("#number1").val()),
        operand2 = parseFloat($("#number2").val()),
        operator = $("#operation").val();

    validate(operator, operand1, operand2);
  });
};

function result(operator, n1, n2) {
  switch (operator) {
    case '+':
      $("#result").html(n1 + n2);
      return n1 + n2;
    case '-':
      $("#result").html(n1 - n2);
      return n1 - n2;
    case '*':
      $("#result").html(n1 * n2);
      return n1 * n2;
    case '/':
      $("#result").html(n1 / n2);
      return n1 / n2;
  }
}

function validate(operator, n1, n2) {
  var validOperators = ["+", "-", "*", "/"];
  var testOperator = $.inArray(operator, validOperators);

  if (testOperator !== -1) {
    if (isNaN(n1) || n1 === "" || isNaN(n2) || n2 === "") {
      $("#result").html("Sorry, one of those is not a valid number!");
      return "Sorry, one of those is not a valid number!";
    } else {
      result(operator, n1, n2);
    }
  } else {
    $("#result").html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  }

}

$(document).on('ready', function () {
  doMath();
});
