$(document).ready(function(){
  doMath();
});


function doMath(){
 $('#equals').on('click',function(){
   var number1 = parseFloat($('#number1').val())
   var number2 = parseFloat($('#number2').val())
   var operat = $('#operation').val()
   validate(operat,number1,number2);
 })
}

function validate(operat,number1,number2){
  if (operat == "+" || operat == "-" || operat =="*" || operat =="/"){
  if (isNaN(number1) || number1 === '' || isNaN(number2) || number2 === '' ){
    $("#result").text('Sorry, one of those is not a valid number!');
      return 'Sorry, one of those is not a valid number!'
    }
  else{
    result(operat, number1, number2);
    }
  }
  else{
    $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator"
  }
}

function result(operat,number1,number2){
  if (operat == '+'){
    $('#result').html(number1 + number2);
    return number1 + number2;
  }
  else if (operat == '-'){
    $('#result').html(number1 - number2);
    return number1 - number2;
  }
  else if (operat == '*'){
    $('#result').html(number1 * number2);
    return number1 * number2;
  }
  else if (operat == '/'){
    $('#result').html(number1 / number2);
    return number1 / number2;
  }
}
