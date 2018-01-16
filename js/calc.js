$(document).ready(function(){
  var input1 = parseInt($('#number1').val());
  var input2 = parseInt($('#number2').val());
  var operation = $('#operation').val();

  doMath();
})

function doMath(){
  $('#equals').on("click", function(){
    validate(operation, input1, input2);
  })
}

function validate(operation, input1, input2){
  if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/"){
    return "Sorry, that is not a valid operator";
  }else if (isNaN(input1)||isNaN(input2)){
    return "Sorry, one of those is not a valid number!"
  }else {
    result(operation, input1, input2);
  }
}

function result(operation, input1, input2){
  var answer;
  switch (operation) {
    case "+":
      answer = input1 + input2;
      break;
    case "-":
      answer = input1 - input2;
      break;
    case "*":
      answer = input1 * input2;
      break;
    case "/":
      answer = input / input2;
      break;
  }
  return answer;
}
