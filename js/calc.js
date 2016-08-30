$(document).ready(function(){

  doMath();

});

    var numberone = Number($("#number1").val());
    var numbertwo = Number($("#number2").val());
    var operation = $("#operation").val();


function doMath(){
  $("#equals").click(function(){
    num1 = parseFloat(numberone.val());
    num2 = parseFloat(numbertwo.val());
    operator = operation.val();
    validate(operator,num1,num2);
  })
}



function result(operator,number1,number2){


  if (operator == '+'){
    $('#result').html(number1 + number2);
    return number1 + number2;
  }

  else if (operator == "-"){
    $('#result').html(number1 - number2);
    return number1 - number2;
  }

  else if (operator == "*"){
    $('#result').html(number1 * number2);
    return number1 * number2;
  }

  else if (operator == "/"){
    $('#result').html(number1 / number2);
    return number1 / number2;
  }
  
}


function validate(operator,number1,number2){

if (operator == "-" || operator == "+" || operator == "/" || operator == "*"){
  if (isNaN(number1) || number1 === '' || isNaN(number2) || number2 === ''){
    $("#result").text('Sorry, one of those if not a valid number');
    return 'Sorry, one of those is not a valid number!'
  }
  else {
    result(operator, number1, number2);
  }
}

  else {
    $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  }

}


