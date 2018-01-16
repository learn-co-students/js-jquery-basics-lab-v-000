jQuery(document).ready(function(){
  doMath();
});

function doMath(){
  jQuery('button#equals').on('click', function(){
    var firstNumber = Number( jQuery('input#number1').val() );
    var secondNumber = Number( jQuery('input#number2').val() );
    var operation =  jQuery('#operation').val();
    validate(operation, firstNumber, secondNumber);
  });
}

function validate(operation, firstNumber, secondNumber){
  if ( isNaN(firstNumber) || isNaN(secondNumber) ){
    return 'Sorry, one of those is not a valid number!';
  }
  if (['+', '-', '*', '/'].indexOf(operation, 0) < 0 ){
    return 'Sorry, that is not a valid operator';
  }
  result(operation, firstNumber, secondNumber); 
}

function result(operation, firstNumber, secondNumber){
  var answer;
  switch(operation){
    case '+':
      answer =  (firstNumber + secondNumber);
      break;
    case '-':
      answer = (firstNumber - secondNumber);
      break;
    case '*':
      answer = (firstNumber * secondNumber);
      break;
    case '/':
      answer = (firstNumber / secondNumber);
      break;
  }
  jQuery('h2#result').text(answer);
  return answer;
}