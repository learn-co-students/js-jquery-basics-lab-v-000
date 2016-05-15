//addition, subtraction, multiplication, and division.
// take input for 2 separate numbers and 1 operation: '+', '-', '*', '/', and store them as variables.

function addition( num1, num2 ) {
  var result = num1 + num2;
  return result;
}

function subtraction( num1, num2 ) {
  var result = num1 - num2;
  return result;
}

function multiplication( num1, num2 ) {
  var result = num1 * num2;
  return result;
}

function division( num1, num2 ) {
  var result = num1 / num2;
  return result;
}

function doMath() {
  $( '#equals' ).on( 'click', startCalculation );
}

function startCalculation() {

}

function validate( operator, num1, num2 ) {

  if ( validateOperator( operator ) ) {
    if ( validateNumbers( num1, num2 ) ) {
      result
      return 'num1 is valid'
    } else {
      return 'Sorry, one of those is not a valid number!'
    }
    return operator;
  } else {
    return "Sorry, that is not a valid operator";
  }

}

function validateNumbers( num1, num2 ) {
  return jQuery.isNumeric( num2 ) && jQuery.isNumeric( num1 )
}

function validateOperator( operator ) {
  var validOperators = [ '+', '-', '*', '/' ];

  return jQuery.inArray( operator, validOperators ) == 0
}

function result( operator, num1, num2 ) {
  switch ( operator ) {
    case '+':
      return addition( num1, num2 );
      break;
    case '-':
      return subtraction( num1, num2 );
      break;
    case '*':
      return multiplication( num1, num2 );
      break;
    case '/':
      return division( num1, num2 );
      break;
  }

}
