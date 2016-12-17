$(document).ready(function(){

    doMath();

})

function doMath(){
  $('#equals').on('click',function(){
    var num1 = parseInt($('#number1').val());
    var num2 = parseInt($('#number2').val());
    var operation  = $('#operation').val();
    if(validate(operation,num1,num2)===true){
        result(operation,num1,num2);
    }
  });
}

function result(operation,num1,num2){
  $('#result').html(eval(num1+operation+num2));
  return eval(num1+operation+num2);
}

function validate(operation,num1,num2){
  var operationVals = ["-","+","*","/"];
  switch (false) {
    case $.isNumeric(num1):
      return("Sorry, one of those is not a valid number!");
      break;
    case $.isNumeric(num2):
        return ("Sorry, one of those is not a valid number!");
        break;
    case (jQuery.inArray(operation, operationVals) != -1):
        return ("Sorry, that is not a valid operator");
        break;
  }
  return true;
}
