function result(operator,first,second){
  var answer;
  switch(operator){
    case "+":
      answer = first + second
      return answer;
    case "-":
      answer = first - second
      return answer;
    case "*":
      answer = first * second
      return answer;
    case "/":
      answer = first / second
      return answer;
  }
   $('#result').text(answer);
}

function validate(operator,first,second){
  var patt = new RegExp("[\+-\/*]");
  var res = patt.test(operator);
  if(!isNaN(first) && !isNaN(second) && res) {
    return result(operator,first,second);
  } else if (isNaN(first) || isNaN(second)) {
    return "Sorry, one of those is not a valid number!";
  } else if (!res) {
    return "Sorry, that is not a valid operator";
  }
}

function doMath(){
  $('#equals').on("click", function(){
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var operator = $('#operator').val();
    validate(operator,number1,number2);
 })
}



$(document).ready(function(){

// call functions here
doMath();



});
