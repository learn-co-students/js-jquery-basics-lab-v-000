$(function(){
  doMath();

});

var firstNumber;
var secondNumber;
var operation;


function doMath(){
  $('#equals').click(function(){
    firstNumber = $("#number1").val();
    secondNumber = $("#number2").val();
    operation = $("#operation").val();

    return validate(firstNumber, secondNumber, operation);
  });
}


function validate(firstNumber, secondNumber, operation){
  var regex = /^[-+*/]+$/;
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);

  if (operation.match(regex)){

    if (isNaN(firstNumber) || firstNumber === "" || isNaN(secondNumber) || secondNumber === ""){

      $("#result").text('Sorry, one of those is not a valid number!');
      return "Sorry, one of those is not a valid number!";

    } else {
        result(firstNumber, secondNumber, operation);

      }

  } else {

      return "Sorry, that is not a valid operator";
  }
}


function result(firstNumber, secondNumber, operation){
  var calcResult;
  switch(operation){
    case "+":
      calcResult = (firstNumber + secondNumber);
      break;
    case "-":
      calcResult = (firstNumber - secondNumber);
      break;
    case "*":
      calcResult = (firstNumber * secondNumber);
      break;
    case "/":
      calcResult = (firstNumber / secondNumber);
      break;
  }
  $("#result").html(calcResult);
  return calcResult;
}
