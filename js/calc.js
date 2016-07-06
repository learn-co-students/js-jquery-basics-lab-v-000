function validate(operation, firstNum, secondNum) {
  if( operation.match(/[\+\-\*\/]/) == null){
    return "Sorry, that is not a valid operator.";
  } else if( isNaN(firstNum) || isNaN(secondNum)) {
    return "Sorry, one of those is not a valid number!";
  } else {
    return true;
  }
}

function result(operation, firstNum, secondNum) {
  var answer = eval(`${firstNum} ${operation} ${secondNum}`);
  return answer
}

function doMath() {
  $("#equals").on("click", function() {
    var firstNum = $("#number1").val();
    var secondNum = $("#number2").val();
    var operator = $("#operation").val();
    var isValid = validate(operator, firstNum, secondNum);

    if (isValid == true) {
      $("#result").text(function(){
        result(operator, firstNum, secondNum);
      });
    } else {
      $(".errors").append(isValid);
    }
  });
}

$(document).on("ready", function(){
  doMath();
});
