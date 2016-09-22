var number1;
var number2;
var operation;

function doMath() {
  $('#equals').on('click', function() {
    console.log("I was clicked");
    operation = $('#operation').val();
    number1 = parseInt($('#number1').val());
    number2 = parseInt($('#number2').val());
    validate(operation, number1, number2);
  })
}

function validate(operation, number1, number2) {
  // check that number inputs are infact numbers
  if(!$.isNumeric(number1) || !$.isNumeric(number2)) {
    $('#result').text("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  }
  // check if the operator is + - / *
  else if (operation !== "+" && operation !== "-" && operation !== "/" && operation !== "*" ) {
    $('#result').text("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  }
  else {
    result(operation, number1, number2);
  }
}

function result(operation, number1, number2) {
  if (operation == '+'){
    $('#result').html(number1 + number2);
    return number1 + number2;
  }
  else if (operation == '-'){
    $('#result').html(number1 - number2);
    return number1 - number2;
  }
  else if (operation == '*'){
    $('#result').html(number1 * number2);
    return number1 * number2;
  }
  else if (operation == '/'){
    $('#result').html(number1 * number2);
    return number1 / number2;
  }
}

doMath();
