function doMath(){
  $('button#equals').on('click', function(){
    var num1 = parseFloat($('input#number1').val());
    var op = $('input#operation').val();
    var num2 = parseFloat($('input#number2').val());
    validate(op, num1, num2);
  });
}

function validate(op, num1, num2){
  if (op !== "+" && op !== "-" && op !== "*" && op !== "/"){
    return "Sorry, that is not a valid operator";
  }
  else if (isNaN(num1) || isNaN(num2)){
    return "Sorry, one of those is not a valid number!"
  }
  else {
    result(num1, num2, op);
  }
}

function result(op, num1, num2){
  var result;
  switch(op){
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  return result;
}
