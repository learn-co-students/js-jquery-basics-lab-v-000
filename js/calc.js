$(document).ready(function(){
  doMath();
 });

function doMath(){
  $("#equals").on('click',function(){
    var number1 = Number($('#number1').val());
    var number2 = Number($('#number2').val());
    var operation = $('#operation').val();
    validate(operation,number1,number2);
  });
}

function validate(operation,number1,number2){
  if (operation != "*" && operation != "-" && operation != '+' && operation != '/'){
    alert("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  } else if(isNaN(number1) || isNaN(number2)){
    alert("Sorry, one of those is not a valid number!");
    return 'Sorry, one of those is not a valid number!';
  } else {
    return result(operation,number1,number2);
  }
}

function result(operation,number1,number2){
  var total = eval(number1 + operation + number2);
  $('#result').text(total);
  return total;
}
