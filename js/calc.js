
$(document).ready(function(){
  doMath()
});

function result(operation, number1, number2) {
  switch (operation) {
  case "+":
    answer = number1 + number2;
    break;
  case "-":
    answer = number1 - number2;
    break;
  case "*":
    answer = number1 * number2;
    break;
  case "/":
    answer = number1 / number2;
    break;                
  }

  return answer;
}

function validate(operation, number1, number2) {
  operators = ["+", "-", "*", "/"];

  if (operators.indexOf(operation) === -1) {
    $("#result").html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  }
  else if (isNaN(number1) || isNaN(number2)) {
    $("#result").html("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  }

  $("#result").html(result(operation, number1, number2));
}

function doMath() {
  $("#equals").on("click", function(e){
    number1   = parseInt($("#number1").val());
    number2   = parseInt($("#number2").val());
    operation = $("#operation").val();

    validate(operation, number1, number2);

  });
}


