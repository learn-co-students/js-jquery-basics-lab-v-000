$(document).ready(function(){
  doMath();


});





function doMath(){
  $('#equals').on('click', function(){
    var num1 = $('#number1');
    var num2 = $('#number2');
    var operator = $('#operation');

    num1 = parseFloat(num1.val());
    num2 = parseFloat(num2.val());
    operator = operator.val();
    validate(operator, num1, num2);
  });
}

function validate(operator, num1, num2){
  operators = ['+', '-', '*', '/']

  if (operators.includes(operator)){

     if (isNaN(num1) || isNaN(num2) ){
      $('#result').html("Sorry, one of those is not a valid number!");
      $('#result').text("Sorry, one of those is not a valid number!");
      return "Sorry, one of those is not a valid number!";
    }else{
      result(operator, num1, num2);
    }
  }else {
    $('#result').html('Sorry, that is not a valid operator');
    return "Sorry, that is not a valid operator";
  }
}

function result(operator, num1, num2){
  switch(operator){
    case "+":

      $('#result').html(num1+num2);
      return num1+num2;
      break;
    case "-":
      $('#result').html(num1 - num2)
        return num1-num2;
        break;
    case '*':
      $('#result').html(num1 * num2)
        return num1*num2;
        break;
    case '/':
      $('#result').html(num1 / num2)
        return num1/num2;
        break;
  }

}
