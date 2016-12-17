$(document).ready(function(){
  $('#equals').on('click',function(){
    doMath();
  });
})

function doMath(){
  var num1 = parseInt($('#number1').val());
  var num2 = parseInt($('#number2').val());
  var operation  = $('#operation').val();
  if(validate(operation,num1,num2)===true){
      $('#result').html(eval(num1+operation+num2)) ;
  }
}

function validate(operation,num1,num2){
  var operationVals = ["-","+","*","/"];
  switch (false) {
    case $.isNumeric(num1):
      console.log("Sorry, one of those is not a valid number!");
      return;
      break;
    case $.isNumeric(num2):
        console.log("Sorry, one of those is not a valid number!");
        return;
        break;
    case (jQuery.inArray(operation, operationVals) != -1):
        console.log("Sorry, that is not a valid operator");
        return;
        break;
  }
  return true;
}
