function doMath() {
  $('#equals').on("click", function() {
    //bind the operator and two numbers to variables     
    var number1 = $('#number1').val(); 
    var operation = $('#operation').val(); 
    var number2 = $('#number2').val(); 
    validate(operation, number1, number2); 
  }); 
}

function validate(operation, num1, num2){
  if (validateOperation(operation) == false) {
    message = "Sorry, that is not a valid operator"; 
    alert(message); 
    return message; 
  } else if (!validateNumber(num1) || !validateNumber(num2)) {
    message = "Sorry, one of those is not a valid number!"; 
    alert(message); 
    return message; 
  } else {
    result(operator, num1, num2);  
    return; 
  }
}

function validateOperation(operation) {
  return operation.match(/[\/\+\-\*]/) ? true : false; 
}

function validateNumber(input){
  return isNaN(input) ? false : true;  
}

function result(operator, num1, num2) {
  var result = eval(num1 + operator + num2); 
  $('#result').append(result); 
  return result; 
}

$(document).ready(function() {
  doMath(); 
}); 
