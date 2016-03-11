$( document ).ready(function() {
    console.log( "ready!" );
    doMath();
});


var number1
var operation
var number2


function doMath () {
  $('#equals').on('click', function(){
    number1 = parseInt($('#number1').val());
    number2 = parseInt($('#number2').val());
    operation = $('#operation').val();
    validate(number1, number2, operation);
  });
}

function validate(operation, number1, number2) {
  if (!operation.match(/[-+*\/]/)){
    return "Sorry, that is not a valid operator";
  } else if (isNaN(number1) || isNaN(number2)) {
    return "Sorry, one of those is not a valid number!";
  } else {
    result(operation, number1, number2);
  }
}

function result(operator, number1, number2){
  var result = eval(number1 + operator + number2);
  $('#result').text(result);
  return result;
}



