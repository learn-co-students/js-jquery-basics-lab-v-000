
function doMath (argument) {
  $('#equals').on('click', function(){
    var num1 = $('number1').val();
    var num2 = $('number2').val();  
    var operand = $('operation').val();  
    validate(num1, num2, operand);
  });
}

function validate(num1, num2, operand){
  if (isNaN(num1)){
    console.log("Sorry, one of those is not a valid number!");
    return;
  }
  if(operand){
    console.log("Sorry, that is not a valid operator");
    return;
  }
  
  result(num1, num2, operand);
}

// function result(num1, num2, operand){
//   answer = num1 operand num2;
//   $('div h2').innerHTML(answer);
// }