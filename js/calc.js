'use strict';

$(document).ready(function() {
  doMath();
});


var x = $('#number1');
var y = $('#number2');
var operation = $('#operation');

function doMath() {
  $('#equals').on("click", function() {
    x = parseFloat(x.val());
    y = parseFloat(y.val());
    operation = operation.val();
    validate(operation,x ,y ); 
  })

}

function validate(operation, x, y) {
  if (operation == "+" || operation == "-" || operation == "*" || operation == "/") {
    if (isNaN(x) || x === "" || isNaN(y) || y === "") {
      $('#result').html("Sorry, one of those is not a valid number!");
      return "Sorry, one of those is not a valid number!";
    }
    else {
      result(operation, x, y);
    }
  }
  else {
    $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  }

}

function result(operation, x ,y) {
  switch(operation) {
    case "+":
      $('#result').html(x + y);
      return x + y;
    case "-":
      $('#result').html(x - y);
      return x - y;
    case "*":
      $('#result').html(x * y);
      return x * y;
    case "/":
      $('#result').html(x / y);
      return x / y;
  }
}




