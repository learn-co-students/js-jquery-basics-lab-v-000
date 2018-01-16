var num1;
var num2;
var operator;
var validOperators = ['+','-','*','/'];

function doMath(){
  $('#equals').on("click", function(){
    num1 = $('#number1').val(); num1.trim(); parseFloat(num1);
    num2 = $('#number2').val(); num2.trim(); parseFloat(num2);
    operator = $('operation').val(); operator.trim();
    validate(operator, num1, num2);
  });
}

function validate(operator, num1, num2){
  if (validOperators.indexOf(operator) < 0) {
    debugger;
    return "Sorry, that is not a valid operator";
  }
  else if(isNaN(num1) === true || num1.length === 0 || isNaN(num2) === true || num2.length === 0){
   return "Sorry, one of those is not a valid number!";
  }
  else{
    result(operator, num1, num2);
  }
}

function result(operator, num1, num2){
  switch(operator){
    case '+':
      $("#result").append(num1 + num2);
      return num1 + num2;
    case '-':
      $("#result").append(num1 - num2);
      return num1-num2;
    case '*':
      $("#result").append(num1 * num2);
      return num1*num2;
    case '/':
      $("#result").append(num1 / num2);
      return num1/num2;
  }
}

  

$(document).ready(function(){
  doMath();
});

