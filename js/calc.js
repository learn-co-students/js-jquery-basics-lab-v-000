


$(document).ready(function(){
  doMath();
});

var num1;
var num2;
var op;

function doMath(){
  $('button#equals').on('click', function(){
    num1 = parseFloat($('input#number1').val());
    num2 = parseFloat($('input#number2').val());
    op = $('input#operation').val();
    validate(op, num1, num2);
  });
}


function validate(op, num1, num2){
  if (!op.match(/[-+*\/]/)){
    return "Sorry, that is not a valid operator";
  }else if (!isNaN(num1) && !isNaN(num2)){
    result(op, num1, num2);
  }else{
    return "Sorry, one of those is not a valid number!";
  }
}

function result(op, num1, num2){
  var solution = varOperator(op, num1, num2);
  $('#result').text(solution);
  return solution;
}

function varOperator(op, num1, num2) {
  switch(op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
} 