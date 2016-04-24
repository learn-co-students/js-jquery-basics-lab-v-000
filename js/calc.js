$(document).ready(function() {
    var operation;
    var numberOne;
    var numberTwo;
    doMath();
});

var operation;
var numberOne;
var numberTwo;

function doMath(){
  $('#equals').on('click', function(){
    numberOne = Math.floor($('#number1').val());
    numberTwo = Math.floor($('#number2').val());
    operation = $('#operation').val();
    validate(operation, numberOne, numberTwo);
  });
}

function validate(operation, numberOne, numberTwo){
  if(isNaN(numberOne) || isNaN(numberTwo)){
    alert("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  }else if($.inArray(operation, ["*","+","/","-"]) === -1){
    alert("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  }else{
    result(operation, numberOne, numberTwo);
   }
  }

function result(operation, numberOne, numberTwo){
  if(operation=== "+"){
    $('#result').text(numberOne + numberTwo);
    return  numberOne + numberTwo;
  }else if(operation === "-"){
    $('#result').text(numberOne - numberTwo);
    return  numberOne - numberTwo;
  }else if(operation === "*"){
    $('#result').text(numberOne * numberTwo);
    return  numberOne * numberTwo;
  }else if(operation === "/"){
    $('#result').text(numberOne / numberTwo);
    return  numberOne / numberTwo;
  }
}
