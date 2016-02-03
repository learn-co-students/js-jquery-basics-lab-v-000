
$(document).ready(function() {

doMath();

});

var n1 = $('input#number1');
var n2 = $('input#number2');
var op = $('#operation');


function doMath() {
  $('button#equals').on('click', function() {
    var number1 = parseFloat(n1.val());
    var number2 = parseFloat(n2.val());
    var operator = op;
    validate(number1,operator,number2);
  });
}

function validate(operator,number1,number2) {
  if ( operator == "+" || operator == "-" || operator == "/" || operator == "*") {
    if ( isNaN(number1) || number1 === '' || isNaN(number2) || number2 == '' ) {
      $('#result').val("Sorry, that is not a valid number!");
      return "Sorry, one of those is not a valid number!"
    }
    else {
      return "Sorry, that is not a valid operator";
    }
  }
  else {
    return "Sorry, that is not a valid operator";
  }
}

function result(operator,num1,num2) {
  return eval(num1.toString() + operator + num2.toString());
}


