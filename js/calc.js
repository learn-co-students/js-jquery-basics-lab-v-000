function doMath() {
  $("#equals").on('click', function() {
    var one = parseInt($("#number1").val());
    var two = parseInt($("#number2").val());
    var operator = $("#operation").val();
    validate(operator, one, two);
  })
}

function validate(operator, one, two) {
  if (!isNaN(one) && !isNaN(two)) {
    if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {
      result(operator, one, two);
    } else {
      return "Sorry, that is not a valid operator";
    } 
  } else {
      return "Sorry, one of those is not a valid number!";
  }
}

function result(operator, one, two) {
  var answer = eval(one + operator + two);
  $("#result").text(answer);
  return answer;
}

$(document).ready(function() {
  doMath();
  validate();
  result();
})