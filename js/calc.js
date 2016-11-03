function doMath(){
  $('#equals').click(function(){
    var op = $("#operation").val();
    var num1 = $("#number1").val();
    var num2 = $("#number2").val();

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    validate(op,num1,num2);
  });
}

function validate(op, num1,num2){
  if(isNaN(num1)){
    $("#result").html("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  }
  else if(isNaN(num2)){
      $("#result").html("Sorry, one of those is not a valid number!");
      return "Sorry, one of those is not a valid number!";
  }
  else if(op != "+" && op != "-" && op != "*" && op != "/"){
      $("#result").html("Sorry, that is not a valid operator");
        return "Sorry, that is not a valid operator";
  }
  else{
    result(op,num1,num2);
  }
}

function result(op,num1,num2){
  if(op == "+"){
    var num = num1 + num2;

    $("#result").html(num);

  }
  else if(op == "-"){
    var num = num1 - num2;
    $("#result").html(num);
  }
  else if(op == "*"){
    var num = num1 * num2;
    $("#result").html(num);
  }
  else if(op == "/"){
    var num = num1 / num2;
    $("#result").html(num);
  }
  return num;
}

$(document).ready(function(){
    doMath();
});
