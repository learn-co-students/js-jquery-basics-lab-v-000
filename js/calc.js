$(document).ready(function(){
  doMath();
});

var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');


function doMath(op,num1,num2){
  $('#equals').on('click', function(){
     number1 =  parseInt(num1.val());
     number2 =  parseInt(num2.val());
     operation =  op;
    validate(op,num1,num2)
  })
}

function validate(op,num1,num2){
  if (op == "+" || op == "-" || op == "*" || op == "/") {
    //if nums are not proper number or if they are empty strings
    // give notice
    if (isNaN(num1) || num1 ==='' || isNaN(num2) || num2 ==='' ){
      $('#result').html("Sorry, one of those is not a valid number!")
      return "Sorry, one of those is not a valid number!"
    } else {
      // run the operation and give result
      result(op,num1,num2)
    }
  } else {
    $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator"
  }
}

function result(op,num1,num2){
  if (op == "+") {
    $('#result').html(num1 + num2);
    return num1 + num2;
  } else if (op == "-"){
    $('#result').html(num1 - num2);
    return num1 - num2;
  } else if (op == "*"){
    $('#result').html(num1 * num2);
    return num1 * num2;
  } else if (op == "/"){
    $('#result').html(num1 / num2);
    return num1 / num2;
  }
}
