function doMath(){
  $('button').on('click', function(){
    var num1 = Number($('input#number1').val())
    var operator = $('input#number2').val()
    var num2 = Number($('input#number2').val())
  })
}

function validate(operator, num1, num2){
    if (isNaN(number1) || number1 === '' || isNaN(number2) || number2 === '' ) {
      $result.text('Sorry, one of those is not a valid number!');
    } else {
      result(operator, num1, num2);
    }
}

function result(operator, number1, number2) {
  switch(operation) {
      case '+': $result.text(number1 + number2); break;
      case '-': $result.text(number1 - number2); break;
      case '*': $result.text(number1 * number2); break;
      case '/': $result.text(number1 / number2); break;
      default : $result.text('Sorry, not a valid operation!');
  }
}
