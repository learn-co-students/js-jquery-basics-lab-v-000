var operators = {
   '+': function(a, b){ return a+b},
   '-': function(a, b){ return a-b},
   '*': function(a, b){ return a*b},
   '/': function(a, b){ return a/b}
}

$(document).ready(function(){
  // call functions here
  this.doMath();
});

function doMath() {
  $('#equals').on("click", function() {
    var num1 = $('#number1').val() , num2 = $('#number2').val(), operator = $('#operation').val();
    validate(num1, num2, operator);
  })
}

function validate(operator, num1, num2) {
  // use isNaN
  if (!operator in operators) {
    alert("Sorry, that is not a valid operator");
  } else if(isNaN(num1) && isNaN(num2)) {
    alert("Sorry, one of those is not a valid number!");
  } else {
    result();
  }
}

function result(operator, num1, num2) {
  // why is operators[operator] not a function because the validate is not returning what expected
  return operators[operator](num1, num2);
}