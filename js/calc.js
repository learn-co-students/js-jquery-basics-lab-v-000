$(document).ready(function(){
  doMath();
});

var number1 = $('#number1');
var number2 = $('#number2');
var operator = $('#operation');


function doMath() {
  $('#equals').on("click", function() {
     number1 = parseFloat(number1.val());
     number2 = parseFloat(number2.val());
     operator = operator.val();
     validate(operator, number1, number2);
   });
  }


    function validate(operator, number1, number2) {
     if(operator == '+' || operator == '-' || operator == '*' || operator == '/' ) {
       if(isNaN(number1) || isNaN(number2)) {
         $('#result').html("Sorry, one of those is not a valid number!");
        return "Sorry, one of those is not a valid number!";
      }  else {
          result(operator, number1, number);
        }
      } else {
          $('#result').html("Sorry, that is not a valid operator");
         return "Sorry, that is not a valid operator";
      }
    }

  function result(operator, number1, number2) {
    if(operator == '+'){
     $('#result').html(number1 + number2);
     return number1 + number2;
    }
    else if(operator == '-'){
      $('#result').html(number1 - number2);
      return number1 - number2;
    } else if(operator == '*'){
      $('#result').html(number1 * number2);
      return number1 * number2;
    }
    else if(operator == '/'){
      $('#result').html(number1 / number2);
      return number1 / number2;
    }
  }
