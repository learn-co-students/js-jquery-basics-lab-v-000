function doMath() {
  $("button#equals").click(function() {
    var val1 = parseFloat($('input#number1').val());
    var operator = $('input#operation').val();
    var val2 = parseFloat($('input#number2').val());
    validate(operator,val1,val2);
  });
}

function validate(operator,num1,num2) {
  var operators = ['+','-','*','/']
  if(operators.indexOf(operator) == -1) {
    $("#result").text("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  } else if(isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
    $("#result").text('Sorry, one of those is not a valid number!');
    return "Sorry, one of those is not a valid number!";
  }
  else {
    result(num1,num2,operator);
  }
}

function result(operator,num1,num2) {
  if (operator == '+'){
    $('#result').html(num1 + num2);
    return num1 + num2;
  }
  else if (operator == '-'){
    $('#result').html(num1 - num2);
    return num1 - num2;
  }
  else if (operator == '*'){
    $('#result').html(num1 * num2);
    return num1 * num2;
  }
  else if (operator == '/'){
    $('#result').html(num1 / num2);
    return num1 / num2;
  }
}

$(document).ready(function(){
  doMath();
});