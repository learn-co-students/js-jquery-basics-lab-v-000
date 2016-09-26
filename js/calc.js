$(document).ready(function() {
  doMath();
});

var num_1, num_2, operation;

function doMath() {
  $('#equals').on("click", function() {
  num_1 = Number($('input#number1').val());
  num_2 = Number($('input#number2').val());
  operation = $('input#operation').val();
  validate(operation, num_1, num_2);
  });
}

function validate(op, num_1, num_2) {
  if (num_2.constructor.name != "Number" || num_1.constructor.name != "Number") {
    alert("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  } else if (op != "/" && op != "-" && op != "+" && op != "*") {
    alert("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  } else {
    result(op, num_1, num_2);
  }
}

function result(operation, num_1, num_2) {
  if (operation === "/") {
    var answer = num_1 / num_2;
  } else if (operation === "*") {
    var answer = num_1 * num_2;
  } else if (operation === "-") {
    var answer = num_1 - num_2;
  }else if (operation === "+") {
    var answer = num_1 + num_2;
  }
  $('#result').html(answer);
  return answer;
}