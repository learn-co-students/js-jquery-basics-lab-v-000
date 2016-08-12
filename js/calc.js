$(document).ready(function(){

  doMath();

});
var number1       = NaN,
    number2       = NaN,
    operation     = null

function doMath() {
  $('#equals').on("click", function(){
    number1 = parseFloat($('#number1').val());
    number2 = parseFloat($('#number2').val());
    operator = $('#operation').val();
    validate(number1, number2, operator);
  });
}

  function validate(operator, number1, number2) {
    if ( operator == "+" || operator == "-" || operator == "/" || operator == "*" ){
      if  (isNaN(number1) || number1 === '' || isNaN(number2) || number2 === '' ){
        $('#result').text("Sorry, one of those is not a valid number!");
        return "Sorry, one of those is not a valid number!";
        }
        else {
            result(operator, number1, number2);
          }
        }
    else {
        $('#result').text("Sorry, that is not a valid operator");
        return "Sorry, that is not a valid operator";
      }
  }

  function result(operator, number1, number2) {
    switch(operator){
      case "+": $('#result').text(number1 + number2);
                return number1 + number2;
                 break;
      case "-": $('#result').text(number1 - number2);
                return number1 - number2;
                break;
      case "*": $('#result').text(number1 * number2);
                return number1 * number2;
                break;
      case "/": $('#result').text(number1 / number2);
                return number1 / number2;
                break;
      default: $('#result').text("Sorry, that is not a valid operator");
    }
  }
