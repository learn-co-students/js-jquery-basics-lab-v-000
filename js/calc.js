function doMath(){
  $('#equals').on("click", function(){
    var number1 = Number($('#number1').val());
    var number2 = Number($('#number2').val());
    var operator = $('input#operation').val();
    validate(operator, number1, number2);
  })
}

function validate(operator, number1, number2){
  if (isNaN(number1) || isNaN(number2)){
    $('#result').text("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  }
  if (["+", "-", "*", "/"].indexOf(operator) === -1){
    $('#result').text("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  }
  result(operator, number1, number2);
}

function result(operator, number1, number2){
  var solution = eval(number1 + operator + number2);
  $('#result').val(solution);
  return solution;
}

$(document).ready(function(){
  doMath();
});
