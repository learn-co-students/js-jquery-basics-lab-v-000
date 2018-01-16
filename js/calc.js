$(document).ready(function(){
  doMath();
});

function doMath(){
  $('#equals').on("click", function(){
    var firstNumber = parseInt($('#number1').val());
    var operation = $('#operation').val();
    var secondNumber = parseInt($('#number2').val());
    validate(operation, firstNumber, secondNumber);
  })
}

function validate(operation, firstNumber, secondNumber){
  if((isNaN(firstNumber)) || (isNaN(secondNumber))){
    return "Sorry, one of those is not a valid number!";
  }
    else if (!operation.match(/[\/\+\-\*]/)){
      return "Sorry, that is not a valid operator";
    }
    else
    { 
      result(operation, firstNumber, secondNumber);
    }
}



function result(operation, firstNumber, secondNumber){
  var total = eval(firstNumber + operation + secondNumber);
    $('#result').text(total);
    return total;
  } 






