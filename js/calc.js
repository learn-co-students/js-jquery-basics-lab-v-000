
function doMath() {
  $('#equals').on('click', function() {
    var num1 = $('#number1').val();
    var num2 = $('#number2').val();
    var oper = $('#operation').val();
    validate(oper, num1, num2);
    result(oper, num1, num2);
  })
}

function validate(opr, n1, n2){
  if (isNaN(n1) || isNaN(n2)){
    return ("Sorry, one of those is not a valid number!")
  }
  switch (opr) {
    case '+':
      break;
    case '-':
      break;
    case '*':
      break;
    case '/':
      break;
    default:
      return ("Sorry, that is not a valid operator");
  }
}

function result(opr, n1, n2) {
  var result = eval(n1 + opr + n2);
  $('#result').append(result);
  return result;
}
