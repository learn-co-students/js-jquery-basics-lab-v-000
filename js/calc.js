$(document).ready(function(){

  doMath();

});

function doMath() {
  $('#equals').on('click', function() {
    var operator = $('#operation').val();
    var num1 = Number($('#number1').val());
    var num2 = Number($('#number2').val());

    validate(operator, num1, num2);
  })
}

function validate(operator, num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      return console.log("Sorry, one of those is not a valid number!");
    }

    if (operator != '+' || operator != '-' || operator != '*' || operator != '/') {
      return "Sorry, that is not a valid operator";
    }

    result(operator, num1, num2);
}

function result(operator, num1, num2) {
  if (operator == '*') {
    var result = num1 * num2;
  }

  if (operator == '/') {
    var result = num1 / num2;
  }

  if (operator == '-') {
    var result = num1 - num2;
  }

  if (operator == '+') {
    var result = num1 + num2;
  }

  return result;
  $('#result').html(result);

}
