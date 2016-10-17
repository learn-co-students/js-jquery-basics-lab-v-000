
function doMath() {
  $(':button[id=equals]').click(function() {
    var operator = $('input[id=operation]').val();
    var num1 = $('input[id=number1]').val();
    var num2 = $('input[id=number2]').val();

    if(validate(operator, num1, num2) == true){
      $('h2[id=result]').text(result(operator, num1, num2));
    }else{
      $('h2[id=result]').text(validate(operator, num1, num2));
    }

  });
}


function validate(operator, num1, num2) {
  var operReg = /\+|\-|\/|\*/;
   if (!operReg.test(operator)){
     return "Sorry, that is not a valid operator";
   }

   if (isNaN(num1) || isNaN(num2)){
     return "Sorry, one of those is not a valid number!";
   }

   return true;

}

function result(operator, number1, number2) {
    var num1 = parseInt(number1);
    var num2 = parseInt(number2);
    switch (operator) {
      case '+':
        return num1 + num2;
        break;
     case '/':
       return num1 / num2;
       break;
     case '*':
       return num1 * num2;
       break;
     case '-':
       return num1 - num2;
       break;
     default:
       return "Sorry, that is not a valid operator";

    };

}


$(document).ready(function () {
  doMath();
})
