$(document).ready(function(){
  doMath();
});

function doMath(){
  $('#equals').on("click", function(){
    var number1 = parseInt($('#number1').val());
    var operation = $('#operation').val();
    var number2 = parseInt($('#number2').val());
    validate(operation, number1, number2);
  })
}

function validate(operator, number1, number2){
  if((isNaN(number1)) || (isNaN(number2))){
    return "Sorry, one of those is not a valid number!";
  }
  else if (operator != "+" && operator != "-" && operator != "*" && operator != "/"){
    return "Sorry, that is not a valid operator";
  }
  else { 
    result(operator, number1, number2);
  }
}

function result(operator, number1, number2){
  var total = eval(number1 + operator + number2);
    $('#result').text(total);
    return total;
  } 