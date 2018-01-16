
function doMath(){
  $('button#equals').on("click", function(){
    var num1 = Number($('input#number1').val());
    var num2 = Number($('input#number2').val());
    var operator = $('input#operation').val();
    validate(operator, num1, num2);
  });
}

function validate(operator, firstNumber, secondNumber){
  if (operator != ("+" || "-" || "*" || "/"))
    return "Sorry, that is not a valid operator";
  else if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return "Sorry, one of those is not a valid number!";
  }
  else {
    result(operator, firstNumber, secondNumber);
  }
}

function result(operator, firstNumber, secondNumber){
  var result = eval(firstNumber + operator + secondNumber);
  $('h2#result').append(result);
  return result;
}



$(document).ready(function(){

  doMath();


});