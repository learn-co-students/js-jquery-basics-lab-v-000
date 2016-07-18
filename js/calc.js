$(document).ready(function(){
doMath();
});

function doMath(){
  $('#equals').on('click', function(){
    operator = $('#operation').val();
    number1 = Number($('#number1').val());
    number2 = Number($('#number2').val());
    validate(number1, operator, number2);
  })
}

function validate(operator, number1, number2) {
  if (!isNaN(number1) && !isNaN(number2)) {
    if (operator == "+" || operator == "-" || operator =="*" || operator == "/") {
      result(operator, number1, number2);
    } else {
      $("#result").html("Sorry, that is not a valid operator");
      return "Sorry, that is not a valid operator";
    }
  } else {
    $("#result").html("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  }
}


function result(operator, number1, number2){
  if (operator == "+"){
    $('#result').html(number1 + number2);
    return number1 + number2;
  } else if (operator == "-"){
    $('#result').html(number1 - number2);
    return number1 - number2;
  } else if (operator == "*"){
    $('#result').html(number1 * number2);
    return number1 * number2;
  } else if (operator == "/"){
    $('#result').html(number1 / number2);
    return number1 / number2;
  }
}
