function doMath() {
  $('#equals').on('click', function() {
   var number1 = parseInt($('input#number1').val());
   var number2 = parseInt($('input#number2').val());
   var operator = $('input#operation').val();
   validate(operator, number1, number2);
  });
}

function validate(operator, number1, number2) {
  opArray = ["+", "-", "*", "/"];
  n = $.inArray(operator, opArray);
  if (n > opArray.count || n < 0){
    alert("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  } else if (isNaN((number1)) || isNaN((number2))) {
    alert("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  } else {
    result(operator, number1, number2);
  }
}
function result(operator, number1, number2) {
  if (operator === "*") {
    var result = ((number1) * (number2));
    $("h2#result").text(result);
    return result;
  } else if (operator === "/") {
    var result = ((number1) / (number2));
    $("h2#result").text(result);
    return result;
  } else if (operator === "+") {
    var result = ((number1) + (number2));
    $("h2#result").text(result);
    return result;
  } else if (operator === "-") {
    var result = ((number1) - (number2));
    $("h2#result").text(result);
    return result;
  }
}

$(document).ready(function(){

// call functions here
doMath();

});
