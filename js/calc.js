function doMath(){
  $('#equals').on("click", function(){

  });
}

function validate(operator, num1, num2){
  if(operator != "+" && operator != "-" && operator != "*" && operator != "/" && operator != "%"){
    return "Sorry, that is not a valid operator";
  }
  else if(isNaN(num1) || isNaN(num2)){
    return "Sorry, one of those is not a valid number!"
  }
}

function result(operator, num1, num2){

  if(operator === "+"){
    result = num1 + num2;
  }
  else if(operator === "-"){
    result = num1 - num2;
  }
  else if(operator === "/" ){
    result = num1 / num2;
  }
  else if(operator === "*"){
    result = num1 * num2;
  }
  $("#result").html = result;
  return result;

}