$(document).ready(function(){

  doMath();
  validate();
  result();

});

var one;
var operator;
var two;

function doMath() {
  $('#equals').on('click', function() {
    var one = parseInt($('#number1').val());
    var operator = parseInt($('#operation').val());
    var two = parseInt($('#number2').val());
    validate(operator, one, two);
  })
}

function validate(operator, one, two) {
  if (!isNaN(one) && !isNaN(two)) {
    if (operator == "+" || operator == "-" || operator == "/" || operator == "*") {
      result(operator, one, two)
    }
    else {
      return("Sorry, that is not a valid operator");
    }
  } else {
      return("Sorry, one of those is not a valid number!");
    }
  }

function result(operator, one, two) {
  var result = eval(one + operator + two);
  $('#result').html(result);
  return result;
}
