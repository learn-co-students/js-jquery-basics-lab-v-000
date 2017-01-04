$(document).ready(function(){
  doMath();
  //validate();
});

function doMath() {
  $('button#equals').click(function() {
    var number1 = $('#number1').val();
    var operation = $('#operation').val();
    var number2 = $('#number2').val();

    validate(operation, number1, number2);
  });
};

function validate(operation, number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    return "Sorry, one of those is not a valid number!";

  } else if (!(operation == "+" || operation == "-" || operation == "*" || operation == "/")) {
    return "Sorry, that is not a valid operator";

  } else {
    result(operation, number1, number2)
  };
};

function result(operator, number1, number2) {
  var math = number1 + operator + number2;
  var result = eval(math)

  $('#result').text(result);
  return result;
};
