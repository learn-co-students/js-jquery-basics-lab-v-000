$(document).ready(function(){
  doMath();
});



function doMath() {
  $('button').on('click', function() {
    var number1 = $('#number1').val();
    var number2 = $('#number2').val();
    var operation = $('#operation').val();
    validate(operation, number1, number2);
  });
}

function result(operation, number1, number2) {
  var sol = eval([number1, operation, number2].join(" "));
  $('#result').replaceWith("<h2 id='result'>" + sol + "</h2>");
  return sol;
}

function validate(operation, number1, number2) {
  var isNotNum = isNaN(number1) || isNaN(number2);
  var isOp = ["+", "-", "*", "/"].indexOf(operation) > -1;
  if (isNotNum) {
    $("#result").text('Sorry, one of those is not a valid number!');
    return "Sorry, one of those is not a valid number!";
  }
  if (!isOp) {
    $("#result").text('Sorry, that is not a valid operator');
    return "Sorry, that is not a valid operator";
  }
  if (!isNotNum && isOp) {
    result(operation, number1, number2);
  }
}
