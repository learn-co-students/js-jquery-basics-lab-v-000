function doMath() {
  $('#equals').on('click', function(){
    num1 = parseFloat($('#number1').val());
    num2 = parseFloat($('#number2').val());
    operator = $('#operation').val();
    validate(operator, num1, num2);
  });
}

function validate(operator, num1, num2){
  if (!operator.match(/[-+*\/]/)){
    return "Sorry, that is not a valid operator";
  } else if (!isNaN(num1) && !isNaN(num2)){
    result(operator, num1, num2);
  } else {
    return "Sorry, one of those is not a valid number!"
  }
}

function result(operator, num1, num2) {
  var equal = eval(num1 + operator + num2)
  $('#result').text(equal);
  return equal;
}
