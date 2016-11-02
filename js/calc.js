$(document).ready(function(){


  doMath();

});

function doMath() {
  $("button#equals").click(function() {
    var n1 = parseFloat($("input#number1").val());
    var n2 = parseFloat($("input#number2").val());
    var op = $("input#operation").val()
    validate(op, n1, n2);
  });
}

function result(op, n1, n2) {
  var operation;
  var result;

  if (op == "*") { operation = 1; };
  if (op == "/") { operation = 2; };
  if (op == "+") { operation = 3; };
  if (op == "-") { operation = 4; };  

  if (operation == 1) { result = eval("n1 * n2") };
  if (operation == 2) { result = eval("n1 / n2") };
  if (operation == 3) { result = eval("n1 + n2") };
  if (operation == 4) { result = eval("n1 - n2") };

  $("h2#result").html(result);
  return result;
}

function validate(op, n1, n2) {
  if (isNaN(n1) || isNaN(n2)) {
    $("h2#result").html("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  } 
  else {
    if (op == '+' || op == '-' || op == '*' || op == '/') {
      result(op, n1, n2);
    } 
    else {
      $("h2#result").html("Sorry, that is not a valid operator");
      return "Sorry, that is not a valid operator";
    }
  }
}