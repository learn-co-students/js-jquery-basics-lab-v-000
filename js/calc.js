var num_1, num_2, operation;

function doMath() {
  $('button#equals').on("click", function() {
  num_1 = Number($('input#number1').val());
  num_2 = Number($('input#number2').val());
  operation = $('input#operation').val();
  });
}

function validate(op, num_1, num_2) {
  if ( num_2.constructor.name != "Number") {
    return "Sorry, one of those is not a valid number!";
  } else if (num_1.constructor.name != "Number") {
    return "Sorry, one of those is not a valid number!";
  }
  if (op === "/" || op === "-" || op === "+" || op === "*") {
    // nada
  } else {
    return "Sorry, that is not a valid operator";
  }
  return true;
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
  return answer;
}

$(document).ready(function() {
  debugger;
  doMath();
  if (validate(operation, num_1, num_2)) {
    var answer = result(operation, num_1, num_2);
    $('h1').HTML = answer;
  } else {
    alert(validate(operation, num_1, num_2));
  }
});


