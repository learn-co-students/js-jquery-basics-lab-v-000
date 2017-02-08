'use strict';

$(document).ready(function(){
  doMath();
})

var num1, num2, ope;

function doMath() {
  $('button#equals').on('click', function(){
    num1 = Number($('input#number1').val());
    num2 = Number($('input#number2').val());
    ope = $('input#operation').val();
    if (validate(ope,num1,num2)) {
      $('h2#result').html(result(ope,num1,num2));
    }
  });
}

function validate(ope, num1, num2) {
  if (!Number(num1) || !Number(num2)) {
    return "Sorry, one of those is not a valid number!";
  } else if (!ope.match(/^[\+|\*|\-|\/]$/g)) {
    return "Sorry, that is not a valid operator";
  } else {
    return true;
  }
}

function result(ope, num1, num2) {
  switch (ope) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
  }
}
