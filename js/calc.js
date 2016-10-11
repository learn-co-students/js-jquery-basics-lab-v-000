function doMath() {
  $('button').on('click', function() {
    var number1 = $('input#number1').val();
    var number2 = $('input#number2').val();
    var operation = $('input#operation').val();
    if (validate(number1, number2, operation)) {
      number1 = parseInt(number1);
      number2 = parseInt(number2);
      return result(number1, number2, operation);
    } else {
      return;
    }
  });
}

function validate(number1, number2, operation) {
  return isNumeric(number1) && isNumeric(number2) && isOperation(operation);
}

function isNumeric(n) {
  var isNum = !isNaN(parseFloat(n)) && isFinite(n);
  if (isNum) {
    return true;
  } else {
    return "Sorry, one of those is not a valid number!";
  }
}

function isOperation(operation) {
  var isOp = ["+", "-", "*", "/"].indexOf(operation) > -1;
  if (isOp) {
    return true;
  } else {
    return "Sorry, that is not a valid operator";
  }
}


function result(num1, num2, operation) {
  var sol = eval([num1, operation, num2].join(" "));
  sol = sol;
  $('#result').replaceWith("<h2 id='result'>" + sol + "</h2>");
  return sol;
}

$(document).ready(function(){
  doMath();
});
