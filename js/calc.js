function doMath(){
  $('#equals').on("click", function(){
    var num1 = parseFloat($('#number1').val());
    var operator = $('input#operation').val();
    var num2 = parseFloat($('#number2').val());
    validate(operator, num1, num2);
  })
}

function validate(operator, num1, num2){
  if (isNaN(num1) || isNaN(num2)){
    $('#result').text("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  }
  if (["+", "-", "*", "/"].indexOf(operator) === -1){
    $('#result').text("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  }
  result(operator, num1, num2);
}

function result(operator, num1, num2){
  var solution = eval(num1 + operator + num2);
  $('#result').text(solution);
  return solution;
}

$(document).ready(function(){
  doMath();
});