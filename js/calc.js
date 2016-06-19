
function doMath() {
  $('#equals').on('click', function(){
  if (validate(operator, num1, num2)){
    result(operator, num1, num2);
 }
    })
};

function validate(operator, num1, num2 ) {
  if ((operator == '+' || operator == "-" || operator == "*" || operator == "/") && !(isNaN(num1 && num2))) {
    return true;
  }  else if (isNaN(num1 && num2)) {
    return "Sorry, one of those is not a valid number!"
  } else {
    return "Sorry, that is not a valid operator";
  }
};

function result(operator, num1, num2) {
  var result
  if(operator == "+" ){
    result = num1 + num2
  } else if (operator == '-') {
    result = num1 - num2
  } else if (operator == "*") {
    result = num1 * num2
  } else {
    result = num1 / num2
  }
  return result
}
