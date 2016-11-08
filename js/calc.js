$(document).ready(function(){
  doMath();
});



function doMath(){
  $("#equals").on("click", function(){
    var input1 = $("#number1").val();
    var operator = $("#operation").val();
    var input2 = $("#number2").val();
    input1 = parseInt(input1);
    input2 = parseInt(input2);
    validate(operator, input1, input2);
  });
}

function validate(operator, number1, number2){
  if (operator == "+" || operator == "-" || operator == "*" || operator == "/"){
    if (isNaN(number1) || isNaN(number2)){
      return "Sorry, one of those is not a valid number!";
    }
    else {
      result(operator, number1, number2);
    }
  }
  else {
    return 'Sorry, that is not a valid operator';
  }
}

function result(operator, number1, number2){
  var result = eval(number1 + operator + number2);
  console.log(result);
  $('#result').append(result);
  return result
}
