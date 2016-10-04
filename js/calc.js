function doMath(argument) {
  $('button#equals').on('click', function() {
    var num1 = $('input#number1').val();
    var op = $('input#operation').val();
    var num2 = $('input#number2').val();
    validate(op, num1, num2);
  });
}

function validate(op, num, onum) {
  var check = Math.abs(num);
  var check2 = Math.abs(onum);
  if (isNaN(check) == true || isNaN(check2) == true) {
    return "Sorry, one of those is not a valid number!";
  } else if (op != "+" && op != "-" && op != "*" && op != "/") {
    return "Sorry, that is not a valid operator";
  } else {
    result(op, check, check2);
  }
}

function result(two, param1, param2) {
  switch(two) {
      case "+":
          return param1 + param2;
      case "-":
          return param1 - param2;
      case "*":
          return param1 * param2;
      case "/":
          return param1 / param2;
  }
  $('h2#result').append(answer);
}