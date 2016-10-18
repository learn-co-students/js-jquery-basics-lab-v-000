  var number1       = NaN,
      number2       = NaN,
      operation     = null,
      $number1      = $('#number1'),
      $number2      = $('#number2'),
      $operation    = $('#operation'),
      $equalsButton = $('#equals'),
      $result       = $('#result');

function doMath(){
    $('#equals').on('click', function() {
    number1 = parseFloat($number1.val());
    number2 = parseFloat($number2.val());
    operation = $operation.val();
    validate(operation, number1, number2);
  });
}

  function result(operation, number1, number2) {
    switch(operation) {
      case '+': $result.text(number1 + number2); 
        return number1 + number2;
        break;
      case '-': $result.text(number1 - number2); 
      return number1 - number2;
        break;
      case '*': $result.text(number1 * number2); 
      return number1 * number2;
        break;
      case '/': $result.text(number1 / number2); 
      return number1 / number2;
        break;
      default : $result.text('Sorry, that is not a valid operator');
        return 'Sorry, that is not a valid operator'        
    }
  }

  function validate(operation, number1, number2) {
    if (isNaN(number1) || number1 === '' || isNaN(number2) || number2 === '' ) {
      $result.text('Sorry, one of those is not a valid number!');
      return 'Sorry, one of those is not a valid number!'
    } else if (!(operation == "+" || operation == "-" || operation == "*" || operation == "/")){
      $result.text('Sorry, that is not a valid operator');
      return 'Sorry, that is not a valid operator' 
    }
    else {
      result(operation, number1, number2);
    }
  }



$(document).ready(function(){
  doMath();
  });