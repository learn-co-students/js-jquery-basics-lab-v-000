

function validate(operation, num1, num2) {
  if (!operation.match(/[\+\-\*\/]/)) {
    return "Sorry, that is not a valid operator";
  } else if (isNaN(num1) || isNaN(num2)) {
    return "Sorry, one of those is not a valid number!";
  } else {
    result(operation, num1, num2);
  }
}

function result(operation, num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  switch(operation){
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

function doMath() {
  $('#equals').on('click', function() {
    num1= parseInt($('#number1').val());
    num2= parseInt($('#number2').val());
    operation=$('#operation').val();
    var answer = result(operation, num1, num2);
     $('#result').text(answer);
  });
}

$( document ).ready(function() {
  doMath();
});



















