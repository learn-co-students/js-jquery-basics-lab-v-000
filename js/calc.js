function doMath(){
  $('#equals').on("click", function() {
    var num1 = parseInt($('#number1').val());
    var operate = $('#operation').val();
    var num2 = parseInt($('#number2').val());
    validate(operate,num1,num2);
  });
}

function validate(operate, num1, num2) {
  var reg = /[+-/*]/

  if (isNaN(num1) || isNaN(num2)) {
    $('h2#result').text("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  } else if (operate.match(reg) == null ) {
    $('h2#result').text("Sorry, that is not a valid operator.");
    return "Sorry, that is not a valid operator";
  } else {
    $('h2#result').text(result(operate, num1, num2));
  }
}

function result(operate, num1, num2) {
  switch(operate) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    };
  }

$(document).ready(function(){
  doMath();

})
