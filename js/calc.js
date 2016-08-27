function doMath() {
  $('#equals').on('click', function() {
    var number1 = $('#number1').val().parseFloat();
    var number2 = $('#number2').val().parseFloat();
    var operation = $('#operation').val();
    validate(operation, number1, number2);
  });
}

function validate(operation, number1, number2) {
  if (isNaN(number1) || isNaN(number2) || number1 === '' || number2 === '') {
    $('#result').text('Sorry, one of those is not a valid number!');
    return 'Sorry, one of those is not a valid number!';
  } else if (operation !== '+' || operation !== '-' || operation !== '*' || operation !== '/') {
    $('#result').text('Sorry, that is not a valid operator');
    return 'Sorry, that is not a valid operator';
  } else {
    result(operation, number1, number2);
  }
}

function result(operation, number1, number2) {
  switch(operation) {
    case '+':
      var result = number1 + number2;
      break;
    case '-':
      var result = number1 - number2;
      break;
    case '*':
      var result = number1 * number2;
      break;
    case '/':
      var result = number1 / number2;
      break;
    default:
      console.log('error');
  }
  $('#result').text(result);
  return result;
}

$(document).ready(function(){
  doMath();
});
