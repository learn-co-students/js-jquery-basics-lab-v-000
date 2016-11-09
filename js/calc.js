$(document).ready(function() {
  doMath();
});

function doMath() {
  $('#equals').on('click', function() {
    var n1 = parseFloat($('input#number1').val());
    var n2 = parseFloat($('input#number2').val());
    var operator = $('input#operation').val();
    validate(operator, n1, n2);
  });
}

function validate(operator, n1, n2) {
  if (isNaN(n1) || isNaN(n2)) {
    $('h2#result').html("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  }
  else {
    if (operator == '+' || operator == '-' || operator == '*' || operator == '/') {
      result(operator, n1, n2);
    }
    else {
      $('h2#result').html("Sorry, that is not a valid operator");
      return "Sorry, that is not a valid operator";
    }
  }
}

function result(operator, n1, n2) {
  if (operator == '+') {
    $('#result').html(n1 + n2);
    return n1 + n2;
  }
  else if (operator == '-') {
    $('#result').html(n1 - n2);
    return n1 - n2;
  }
  else if (operator == '*') {
    $('#result').html(n1 * n2);
    return n1 * n2;
  }
  else if (operator == '/') {
    $('#result').html(n1 / n2);
    return n1 / n2;
  }
}