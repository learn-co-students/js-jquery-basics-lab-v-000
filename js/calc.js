$(document).ready(function(){
  doMath();
})

function doMath() {
  $('#equals').on('click', function() {
    var num1 = Number($('#number1').val);
    var num2 = Number($('#number2').val);
    var operation = $('#operation').val;
    validate(operation, num1, num2);
  });
}

function validate(operation, num1, num2) {
  if(operation === "+" || operation === "-" || operation === "*" || operation === "/"){
    if(isNaN(num1) || isNaN(num2)){
      $("result").text('Sorry, one of those is not a valid number!');
      return "Sorry, one of those is not a valid number!";
    }
    else {
      result(operation, num1, num2);
    }
  }
  else {
    $("result").text('Sorry, that is not a valid operator');
    return 'Sorry, that is not a valid operator';
  }
}

function result(operation, num1, num2) {
  switch(operation) {
    case '+':
      $('#result').text(num1 + num2);
      return num1 + num2;
      break;
    case '-':
      $('#result').text(num1 - num2);
      return num1 - num2;
      break;
    case '*':
      $('#result').text(num1 * num2);
      return num1 * num2;
      break;
    case '/':
      $('#result').text(num1 / num2);
      return num1 / num2;
      break;
  }
}