function validate(operator, num1, num2) {
  var num1 = num1;
  var operator = operator;
  var num2 = num2;
  var operatorMatch = /[+\-*/]/

  if (!operatorMatch.test(operator)) {
    return "Sorry, that is not a valid operator";
  } else if (isNaN(num1) || isNaN(num2)) {
   return "Sorry, one of those is not a valid number!";
  }
}



$(document).ready(function() {
  doMath()
});
