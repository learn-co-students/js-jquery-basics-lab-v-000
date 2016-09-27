
$(document).ready(function(){
	doMath();
});

var number1 = $('#number1');
var number2 = $('#number2');
var operator = $('#operation');


function doMath() {
	$('#equals').on('click', function() {
		number1 = parseInt(number1.val());
		number2 = parseInt(number2.val());
		operator = operator.val();
		validate(operator,number1, number2);
	});
}

function validate(operator, number1, number2) {
	if (operator === '+' || operator === '-' || operator === '*' || operator === '/'){
		if(isNaN(number1) || number1 === '' || isNaN(number2) || number2 === '') {
			return 'Sorry, one of those is not a valid number!'
		}
	}
		else {
			return "Sorry, that is not a valid operator";
		}
	
	result(operator, number1, number2);
} 

function result(operator, number1, number2) {
	if (operator === '+') {
		$('#result').append(number1 + number2);
		return number1 + number2;
	} 
	else if (operator === '-') {
		$('#result').append(number1 - number2);
		return number1 - number2;
	}
	else if (operator === '*') {
		$('#result').append(number1 * number2);
		return number1 * number2;
	}
	else if (operator === '/') {
		$('#result').append(number1 / number2);
		return number1 / number2;
	}
}
