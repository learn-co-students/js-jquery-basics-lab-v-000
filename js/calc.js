function doMath() {
  $('#equals').on("click", function() {
    var x = $('#number1').val()
    var y = $('#number2').val()
    var operator = $('#operation').val()
  });
}

function validate(operator, x, y) {
  if (isNaN(x) || isNaN(y)) {
    return ("Sorry, one of those is not a valid number!");
  }
  if ('operator' === '+') {

  } else if ('operator' === '-') {

  } else if ('operator' === '/') {

  } else if ('operator' === '*') {

  } else {
    return ("Sorry, that is not a valid operator");
  }
}


function result(operator, x, y) {
  var result = new String
  if (operator == '+') {
    result = (x + y);
  } else if (operator == '-') {
    result = (x - y);
  } else if (operator == '/') {
    result = (x / y);
  } else if (operator == '*') {
    result = (x * y);
  }
  $('#result').text(result);
  return result;

}

$(document).ready(function() {
  var x = $('#number1').val()
  var y = $('#number2').val()
  var operator = $('#operation').val()
  var result = []
  doMath();
});
