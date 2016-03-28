function doMath(){
  $("button#equals").on('click', function(){
    var num1 = $("input#number1").val();
    var num2 = $("input#number2").val();
    var operator = $("input#operation").val();
    answer = validate(operator, num1, num2);
    $("h2#result").text(answer);
  });
}

function validate(operator, num1, num2){
  if(isNaN(num1) || isNaN(num2)){
    return "Sorry, one of those is not a valid number!";
  } else if (!(operator == '+' || operator == '-' || operator == '*' || operator == '/')){
    return "Sorry, that is not a valid operator";
  } else {
    result(operator, num1, num2);
  }
}

function result(operator, num1, num2){
  switch(operator){
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}