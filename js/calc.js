
function doMath() {

  $('#equals').on('click', function () {
    var num1 = Number($('#number1').val());
    var num2 = Number($('#number2').val());
    var oper = $('#operation').val();
    validate(oper, num1, num2);
  });
}

function validate(operator, number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    alert("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  } else if (operator !== "+" && operator !== "/" && operator !== "*" && operator !== "-" ) {
    alert("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  } else {
    result(operator, number1, number2);
  }
}


function result(operator, number1, number2) {
  if (operator === '+') {
    $('#result').text(number1 + number2);
    return number1 + number2;
  } else if (operator === '-') {
    $('#result').text(number1 - number2);
    return number1 - number2;
  } else if (operator === '/') {
    $('#result').text(number1 / number2);
    return number1 / number2;
  } else {
    $('#result').text(number1 * number2);
    return number1 * number2;
  }
}


$(document).ready(function(){
  var num1 = Number($('#number1').val());
  var num2 = Number($('#number2').val());
  var oper = $('#operation').val();
// call functions here
  doMath();

});
