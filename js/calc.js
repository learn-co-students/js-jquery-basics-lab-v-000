$(document).ready(function(){
  doMath();
  result();

});


var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');

function doMath(){
  $('#equals').on('click', function(){
    num1 = parseInt(num1.val());
    num2 = parseInt(num2.val());
    operator = operator.val();
    validate(operator, num1, num2);

  });
}

function validate(operator, num1, num2){
  var operators = ["+", "-", "/", "*"];
  if (($.inArray(operator, operators)) < 0){
    return "Sorry, that is not a valid operator";
  } else if (isNaN(num1) || isNaN(num2)){
    return "Sorry, one of those is not a valid number!";
  };
}

function result(operator, num1, num2){
  var num1 = parseInt(num1);
  var num2 = parseInt(num2);
  var solution;
  if (operator === "+"){
    solution = num1 + num2;
  } else if (operator === "-"){
    solution = num1 - num2;
  } else if (operator === "/"){
    solution = num1 / num2;
  } else if (operator === "*"){
    solution = num1 * num2;
  };
  $('#result').html(solution);
  return solution;
}

