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

function result(operator, num1, num2) {

  var math_it_up = {
      '+': function (x, y) { return x + y },
      '-': function (x, y) { return x - y },
      '*': function (x, y) { return x * y },
      '/': function (x, y) { return x / y }
    };

  var result = math_it_up[operator](num1, num2);
  $('#result').html(result);
  return result;


  // if (operator == '+'){
  //   $('#result').html(num1 + num2);
  //   return num1 + num2;
  // }
  // else if (operator == '-'){
  //   $('#result').html(num1 - num2);
  //   return num1 - num2;
  // }
  // else if (operator == '*'){
  //   $('#result').html(num1 * num2);
  //   return num1 * num2;
  // }
  // else if (operator == '/'){
  //   $('#result').html(num1 * num2);
  //   return num1 / num2;
  // }
}

function validate(operator, num1, num2) {
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