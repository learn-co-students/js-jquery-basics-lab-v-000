function doMath() {

  $('#equals').on('click', function() {

  var  answer = validate($('#operation').val(),parseFloat($('#number1').val()), parseFloat($('#number2').val()))
    $('#result').text(answer);
  });
}

function validate(operator, firstNum, secondNum) {
  var valid_operators=['+','-','/','*'];
  if(isNaN(firstNum) || isNaN(secondNum) || firstNum=="" || secondNum=="") {
    //debugger
    return "Sorry, one of those is not a valid number!";
  }
  else if (($.inArray(operator,valid_operators)) == -1) {
   return "Sorry, that is not a valid operator";
  }
  else {
    return result(operator, firstNum, secondNum);
  }

}

function calculate(operator, firstNum, secondNum){
  switch(operator){
    case '+':
    return firstNum + secondNum;
    break;
    case '-':
    return firstNum - secondNum;
    break;
    case '*':
    return firstNum * secondNum;
    break;
    case '/':
    return firstNum / secondNum;
    break;
    default:
    return "Sorry, that is not a valid operator";
  }


}
function result(operator, firstNum, secondNum) {
  var answer = calculate(operator, firstNum, secondNum);
  return answer;

}

$(document).ready(function(){

  doMath();


});
