$(document).ready(function() {
  doMath();
});


function doMath() {
  $('#equals').on('click', function() {
    var num1 = $('#number1').val();
    num1 = parseInt(num1)
    var operator = $('#operation').val();
    var num2 = $('#number2').val();
    num2 = parseInt(num2)
    validate(operator, num1, num2)
  });
}

function validate(operator, num1, num2) {
  var validOperators = ["*", "/", "+", "-"];
  if (!(validOperators.indexOf(operator) >= 0)) {
    $('#result').text("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    $('#result').text("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  } else {
    result(operator, num1, num2);
  };
}

function result(operator, num1, num2) {
  var array = [num1, operator, num2];
  var newArray = array.join(" ");
  $('#result').html(eval(newArray));
  return eval(newArray);
}