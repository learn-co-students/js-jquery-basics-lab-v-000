function doMath() {
  $('#equals').on('click', function() {
    var num1 = parseInt($('#number1').val())
    var num2 = parseInt($('#number2').val())
    var oper = $('#operation').val()

    validate(oper, num1, num2);
  })
}

function validate(oper, num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    // alert("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  } else if (["+", "-", "*", "/"].indexOf(oper) === -1) {
    // alert("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  } else {
    result(num1, oper, num2);
  }
}

function result(oper, num1, num2 ) {
  var answer = eval(num1 + oper + num2);
  $('#result').html(answer);
  return answer;
}

$(document).ready(function(){

// doMath();

});
