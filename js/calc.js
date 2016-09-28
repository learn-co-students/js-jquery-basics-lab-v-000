
function doMath() {
  $("#equals").on('click', function(){
    var firstNumber = parseInt($("#number1").val())
    var secondNumber = parseInt($("#number2").val())
    var operator = $("#operation").val()
    validate(firstNumber, secondNumber, operator)
  })
}

function validate(operation, first, second) {
    console.log(first, second, operation);
  if (isNaN(first) || isNaN(second)) {
    $('#result').text("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  } else if (/[\n*+/-]/.test(operation) == false) {
    $('#result').text("Sorry, that is not a valid operator")
    return "Sorry, that is not a valid operator";
  } else {
    return result(first, second, operation)
  }
}

function result(operation, first, second) {
  console.log(first, second, operation);
  switch (operation) {
    case "+":
      $('#result').text((first + second))
      return (first + second);
      break;
    case "-":
      $('#result').text((first - second))
      return (first - second);
      break;
    case "*":
      $('#result').text((first * second))
      return (first * second);
      break;
    case "/":
      $('#result').text((first / second))
      return (first / second);
      break;
    default:
      return "Something went wrong";
  }

}



$( document ).ready(function() {
  doMath()
});
