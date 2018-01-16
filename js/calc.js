$(document).ready(function(){

  doMath();

});

function doMath() {
  $('#equals').on('click', function() {
    var number1 = $('#number1');
    var number2 = $('#number2');
    var operation = $('#operation');

    number1 = parseFloat(number1.val());
    number2 = parseFloat(number2.val());
    operation = operation.val();

    validate(operation, number1, number2);
  });
}

function validate(operation, number1, number2) {
  if(operation == '+' || operation == '-' || operation == '*' || operation == '/') {
    if(isNaN(number1) || number1 == '' || isNaN(number2) || number2 == '') {
      alert( "Sorry, one of those is not a valid number!")
      return "Sorry, one of those is not a valid number!"
    } else {
      result(operation, number1, number2);
    }
  }
  else {
    alert("Sorry, that is not a valid operator. \n Try one of these: + - * /")
    return "Sorry, that is not a valid operator";
  }
}

function result(operation, number1, number2){
  if(operation == '+') {
    $('#result').html(number1 + number2);
    return number1 + number2;

  } else if(operation == '-') {
    $('#result').html(number1 - number2);
    return number1 - number2;

  } else if(operation == '*') {
    $('#result').html(number1 * number2);
    return number1 * number2;

  } else if(operation == '/') {
    $('#result').html(number1 / number2);
    return number1 / number2;
  }
}