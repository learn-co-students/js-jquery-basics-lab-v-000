var num1 = NaN;
var num2 = NaN;
var op = null;
var operators = [];
var ans = null;

function doMath() {
  $("#equals").on("click", function() {
    num1 = parseFloat($("#number1").val());
    num2 = parseFloat($("#number2").val());
    op = $("#operation").val();
    validate(op, num1, num2);
  });
}


// function validate(op, num1, num2) { //Original version, not sure what the issue is.
//   var operators = ["+", "-", "*", "/"];

//   if ( (isNaN(num1)) || (isNaN(num2)) ) {
//     $("#result").text("Sorry, one of those is not a valid number!");
//     return "Sorry, one of those is not a valid number!";

//   } else if (!(operators.includes(op))) {
//     $("#result").text("Sorry, that is not a valid operator");
//     return "Sorry, that is not a valid operator";

//   } else {
//     result(op, num1, num2);
//   }
// }

function validate(operator, num1, num2) { // Official solution
  debugger;
  if (operator == "+" || operator == "-" || operator == "*" || operator == "/"){
    if (isNaN(num1) || num1 === '' || isNaN(num2) || num2 === '' ){
      $("#result").text('Sorry, one of those is not a valid number!');
      return 'Sorry, one of those is not a valid number!'
    }
    else {
      result(operator, num1, num2);
    }
  }
  else {
    $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator"
  }
}


function result(op, num1, num2) {
  ans = (eval(num1 + op + num2));
  $("#result").text(ans);
  return ans;
}



$(document).ready(function() {
  var num1 = NaN;
  var num2 = NaN;
  var op = null;
  var operators = [];
  var ans = null;
  doMath();

});
