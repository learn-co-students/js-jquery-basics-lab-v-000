function doMath(){
  $('#equals').on('click', function(){
    var num1 = parseInt($('input#number1').val());
    var num2 = parseInt($('input#number2').val());
    var operator = $('input#operation').val();
    validate(operator, num1, num2);
  })  
}

function validate(op, n1, n2){
  var operators = ["+", "-", "*", "/"];
  var presence = $.inArray(op, operators);
  if(presence === -1 || presence > operators.length){
    return alert("That is not a valid operator");
  }
  else if(!$.isNumeric(n1) || !$.isNumeric(n2)){
    return alert("Please enter two valid numbers");
  }
  else{
    result(op, n1, n2);
  }
}

function result(op, n1, n2){
  var result;
  switch(op){
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      result = n1 / n2;
      break;
  }
  $("h2#result").text(result);
  return result;
}

$(document).ready(function(){
  doMath();
});