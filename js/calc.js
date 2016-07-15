var operators = {
   '+': function(a, b){ return a+b},
   '-': function(a, b){ return a-b},
   '*': function(a, b){ return a*b},
   '/': function(a, b){ return a/b}
}

function doMath() {
  $('#equals').on("click", function() {
    var num1 = $('#number1').val() , num2 = $('#number2').val(), operator = $('#operation').val();

    if (validate(operator, num1, num2) == true) {
       $("#result").text(function(){
         result(operator, firstNum, secondNum);
       });
     } else {
       $(".errors").append(validate(num1, num2, operator));
     }
  });
}

function validate(operator, num1, num2) {
  // use isNaN
  if (!(operator in operators)) {
    return "Sorry, that is not a valid operator";
  } else if(isNaN(num1) || isNaN(num2)) {
    return "Sorry, one of those is not a valid number!";
  } else {
    result(operator, num1, num2);
  }
}

function result(operator, num1, num2) {
  return operators[operator](num1, num2);
}

$(document).ready(function(){
  // call functions here
  doMath();
});