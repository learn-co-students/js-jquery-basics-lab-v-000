'use strict';



var num1 = $('#number1');
var num2 = $('#number2');
var op = $('#operation');


function result (op, num1, num2) {
  return eval(num1 + op + num2);
}
function validate(op, num1, num2) {
  if (op == '*' || op == '/' ||op == '+' ||op == '-') {

    if($.isNumeric(num1) && $.isNumeric(num2)) {
      return result(op, num1, num2);
    } else {
      $("#result").html("Sorry, one of those is not a valid number!");
      return "Sorry, one of those is not a valid number!";
    }
    
  } else {
    $("#result").html("Sorry, that is not a valid operator");
      return "Sorry, that is not a valid operator";
  }

}

function doMath() {
  $('#equals').on('click', function() {
    num1 = parseFloat(num1.val());
    num2 = parseFloat(num2.val());
    op = op.val();
    validate(op, num1, num2);
  });
}

$(document).ready(function(){


  doMath();

});