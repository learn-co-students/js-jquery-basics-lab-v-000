function doMath(){
  $("#equals").on("click", function(){
    var num1 = Number($("#number1").val());
    var operation = $("#operation").val();
    var num2 = Number($("#number2").val());
    validate(operation, num1, num2);
  });
}

function validate(operation, num1, num2){
  if ( operation == "+" || operation == "-" || operation == "/" || operation == "*" ) {
     $("#result").text("Sorry, one of those is not a valid number!");
     return "Sorry, one of those is not a valid number!"
  } else if ( isNaN(num1) || isNaN(num2) ){
     result(operation, num1, num2);
  } else {
    $("#result").text("Sorry, that is not a valid operator");
     return "Sorry, that is not a valid operator";
  }
}

function result(operation, num1, num2){
  switch (operation){
    case "+" :
      var result = num1 + num2;
      $("#result").text(result);
      break;
    case "-" :
      var result = num1 - num2;
      $("#result").text(result);
      break;
    case "/" :
      var result = num1 / num2;
      $("#result").text(result);
      break;
    case "*" :
      var result = num1 * num2;
      $("#result").text(result);
  }
  
  return result;
}

$(document).ready(function(){

  doMath();

})