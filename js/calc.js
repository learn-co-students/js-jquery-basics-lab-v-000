var num1 = NaN;
var num2 = NaN;
var op = null;

function doMath() {
  $("button#equals").click(function() {
    num1 = $("input#number1").val();
    num2 = $("input#number2").val();
    op = $("input#operation").val();
    validate(op, num1, num2);
  });
}


function validate(op, num1, num2) {
  var operators = ["+", "-", "*", "/"];
  if (!(operators.includes(op))) {
    $("#result").html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";

  } else if ((num1 == "") || (num2 == "")) {
    $("#result").html("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";

  } else if (isNaN(Number(num1)) || isNaN(Number(num2))) { 
    $("#result").html("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";

  } else {
    val = result(op, num1, num2);
    return val;
  }
}


function result(op, num1, num2) {
  ans = (eval(num1 + op + num2));
  $("#result").html(ans);
  return ans;
}


$(document).ready(function() {
  doMath();

});