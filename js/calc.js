//var num1 = NaN;
//var num2 = NaN;
//var op = null;

function doMath() {
  $("#equals").on("click", function() {
    num1 = parseFloat($("#number1").val());
    num2 = parseFloat($("#number2").val());
    op = $("#operation").val();
    validate(op, num1, num2);
  });
}


function validate(op, num1, num2) {
  var operators = ["+", "-", "*", "/"];

  if (!(operators.includes(op))) {
    $("#result").text("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";

  } else if ( (num1 == "") || (num2 == "") || (isNaN(num1)) || (isNaN(num2)) ) {
    $("#result").text("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";

  } else {
    result(op, num1, num2);
  }
}

/*
function result(op, num1, num2) {
  ans = (eval(num1 + op + num2));
  $("#result").text(ans);
  return ans;
}
*/


  function result(operation, number1, number2) {

    switch(operation) {

      case '+': $result.text(number1 + number2); 

        return number1 + number2;

        break;

      case '-': $result.text(number1 - number2); 

      return number1 - number2;

        break;

      case '*': $result.text(number1 * number2); 

      return number1 * number2;

        break;

      case '/': $result.text(number1 / number2); 

      return number1 / number2;

        break;

      default : $result.text('Sorry, that is not a valid operator');

        return 'Sorry, that is not a valid operator'        

    }

  }

$(document).ready(function() {
  var num1 = NaN;
  var num2 = NaN;
  var op = null;
  doMath();

});

