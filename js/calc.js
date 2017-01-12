$(document).ready(function(){
  doMath();
});

function doMath () {
	$('#equals').on("click", function() {
		var operator = $('input#operation').val() ;
		var number1 = parseFloat($('input#number1').val() ) ;
		var number2 = parseFloat($('input#number2').val() ) ;		

		validate (operator, number1, number2) ;
	})
}


function validate(operator, number1, number2) {
  if (operator == "+" || operator == "-" || operator == "*" || operator == "/"){
    if (isNaN(number1) || number1 === '' || isNaN(number2) || number2 === '' ){
      $("#result").html('Sorry, one of those is not a valid number!');
      return 'Sorry, one of those is not a valid number!'
    }
    else {
      result(operator, number1, number2);
    }
  }
  else {
    $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator"
  }
}


function result(operator, number1, number2) {
  if (operator == '+'){
    $('#result').html(number1 + number2);
    return (number1 + number2);
  }
  else if (operator == '-'){
    $('#result').html(number1 - number2);
    return (number1 - number2);
  }
  else if (operator == '*'){
    $('#result').html(number1 * number2);
    return (number1 * number2);
  }
  else if (operator == '/'){
    $('#result').html(number1 * number2);
    return (number1 / number2);
  }
}