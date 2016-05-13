var num1, num2, operand;

function doMath(){
  $('#equals').on("click", function(){
    num1 = $('#number1').val();
    num2 = $('#number2').val();
    operand = $('#operation').val();

    validate(operand, num1, num2);
  });
}

function validate(operator, num1, num2){
  if(isNaN(num1) || isNaN(num2)){
    $("#result").html("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  } else if(/[\+\-\/\*]/.test(operator)){
    result(operator, num1, num2);
  } else {
    $("#result").html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  }
}

function result(operator, num1, num2){
  var answer;

  switch(operator){
    case '+':
      answer = parseFloat(num1 + num2);
      break;
    case '-':
      answer = parseFloat(num1 - num2);
      break;
    case '/':
      answer = parseFloat(num1 / num2);
      console.log(answer);
      break;
    case '*':
      answer = parseFloat(num1 * num2);
      break;
    default :
      $("#result").html("Sorry, that is not a valid operator");
      answer = "Sorry, that is not a valid operator";
      break;
  } 
  $("#result").html(answer);
  return answer;
}

$(document).ready(function(){
  doMath();
});