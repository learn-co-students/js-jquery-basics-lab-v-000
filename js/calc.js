$(document).ready(function(){
  doMath();
});

var number1 = $('#number1');
var number2 = $('#number2');
var operation = $('#operation');

function doMath(){
  $('#equals').on('click', function(){
    number1 = parseFloat(number1.val());
    number2 = parseFloat(number2.val());
    operation = operation.val();
    validate(operation, number1, number2);
  });
}

function validate(operation, number1, number2) {
  if (isNaN(number1) || number1 === '' || isNaN(number2) || number2 === '' ){
    $("#result").text('Sorry, one of those is not a valid number!');
    return 'Sorry, one of those is not a valid number!'
  }
  else{
    if (operation == "+" || operation == "-" || operation == "*" || operation == "/"){
      result(operation, number1, number2);
    }
    else{
      $('#result').html("Sorry, that is not a valid operator");
      return "Sorry, that is not a valid operator"
    }
  }
}

function result(operation, number1, number2) {
  switch(operation){
    case "+":
      $('#result').html(number1 + number2);
      return number1 + number2;
    case "-":
      $('#result').html(number1 - number2);
      return number1 - number2;
    case "*":
      $('#result').html(number1 * number2);
      return number1 * number2;
    case "/":
      $('#result').html(number1 / number2);
      return number1 / number2;
    default:
      $('#result').html("Sorry, that is not a valid operator");
      return "Sorry, that is not a valid operator"
  }
}
