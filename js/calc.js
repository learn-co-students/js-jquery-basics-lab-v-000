function doMath() {
  // save variables
  var num1 = $('#number1').val();
  num1 = parseInt(num1)
  var operator = $('#operation').val();
  var num2 = $('#number2').val();
  num2 = parseInt(num2)
  // validate
  $('button#equals').on('click', validate(num1, operator, num2) {
    return validate(num1, operator, num2);
  });
}

function validate(num1, operator, num2) {
  var validOperators = ["*", "/", "+", "-"]
  // if num1 and num2 are not type integer
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "Sorry, one of those is not a valid number!"
  };
  // if operator is not one of the validOperators
  if ( !(validOperators.indexOf(operator) >= 0) ){
    return "Sorry, that is not a valid operator"
  };
  return result(num1, operator, num2)
}

function result(num1, operator, num2) {
  var array = [num1, operator, num2]
  var newArray = array.join(" ")
  $('div#result').append(eval(newArray))
}