function doMath(){
  $('#equals').on("click", function(){
    var input1 = parseInt($('#number1').val());
    var input2 = parseInt($('#number2').val());
    var operator = $('#operation').val();
    validate(operator,input1,input2);
  });
}

 function validate(operator,input1, input2){
  if (isNaN(input1) || isNaN(input2))
     return "Sorry, one of those is not a valid number!";
   else if (operator !== "*" && operator !== "/" && operator !== "+" && operator !== "-")
     return "Sorry, that is not a valid operator";
  else
     result(operator,input1,input2);
 }

 function result(operator, input1, input2){
    var result;
    switch(operator){
      case '+':
       result = input1 + input2
       break;
      case '-':
        result = (input1 - input2);
        break;
      case '*':
        result = (input1 * input2)
        break;
      case '/':
       result = (input1/input2);
       break;
      default:
        return 'error';
    }
      $("#result").html(result);
      return result;
 }

 $(document).ready(function(){
    doMath();
 })