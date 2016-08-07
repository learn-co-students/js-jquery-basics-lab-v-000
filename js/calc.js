$(document).ready(function(){

  doMath();

});

function doMath() {
  $('#equals').on('click', function() {
    var operator = $('#operation').val();
    var num1 = parseFloat($('#number1').val());
    var num2 = parseFloat($('#number2').val());

    validate(operator, num1, num2);
  });
}

function validate(operator, num1, num2) {
  debugger;
    if (isNaN(num1) || isNaN(num2)) {
      return console.log("Sorry, one of those is not a valid number!");
    }

    else if (operator != '+' || operator != '-' || operator != '*' || operator != '/') {
      return $('#result').text("Sorry, that is not a valid operator")"Sorry, that is not a valid operator";
    }
    else {
      result(operator, num1, num2);
    }
}

function result(operator, num1, num2) {
  if (operator == '*') {
    var result = num1 * num2;
    $('#result').text(result);
  }

  else if (operator == '/') {
    var result = num1 / num2;
    $('#result').html(result);
  }

  else if (operator == '-') {
    var result = num1 - num2;
    $('#result').html(result);
  }

  else if (operator == '+') {
    var result = num1 + num2;
    $('#result').html(result);
  }

  return result;
}
