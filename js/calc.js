var num1 = Math.abs($('input#number1').val());
var num2 = Math.abs($('input#number2').val());
var operator = $('input#operation').val();

function doMath() {
  $('button#equals').on("click", function(){
    validate(operator, num1, num2);
  }) 

}

function validate(operator, num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return "Sorry, one of those is not a valid number!";}
  else if (operator !== "+" || operator !== "-" || operator !== "*" || operator !== "/") {
    return "Sorry, that is not a valid operator";}
  else {
    result(operator, num1, num2);}
  }



function result(operator, num1, num2) {
  if (operator === "+") {
      var answer = num1 + num2;
    }
  else if (operator === "-") {
      var answer = num1 - num2;
    }
  else if (operator === "*") {
      var answer = num1 * num2;
    }
  else if (operator === "/") {
      var answer = num1 / num2;
    }
  $('h2#result').text(answer);
  return answer
}

$(document).ready(function(){
  doMath();
});
