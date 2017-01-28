function doMath() {
  $("button#equals").click(function() {
    num1 = Number($("input#number1").val());
    num2 = Number($("input#number2").val());
    op = $("input#operation").val();
    validates(op, num1, num2);
  });
}


function validates(op, num1, num2) {
  var operators = ["+", "-", "*", "/"];
  if (!(operators.includes(op))) {
    alert("Sorry, that is not a valid operator");
  } else if (isNaN(num1) || isNaN(num2)) { 
      alert("Sorry, one of those is not a valid number!");
  } else {
    result(op, num1, num2);
  }
}


function result(op, num1, num2) {
  ans = (eval(num1 + op + num2));
  $("#result").html(ans);
}


$(document).ready(function() {
  doMath();
});