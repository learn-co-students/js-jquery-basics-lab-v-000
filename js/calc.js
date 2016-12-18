$(document).ready(function() {
	doMath();
});

function doMath() {
	$('#equals').on('click', function() {
		var num1 = $('input#number1').val();
		var num2 = $('input#number2').val();
		var operator = $('input#operation').val();
		validate(operator, num1, num2);		
	})
}

function validate(operator, num1, num2) {
	var operators = ["+", "-", "*", "/"];

	if (!isNaN(num1) && !isNaN(num2) && ($.inArray(operator, operators)!= -1) ) {
		result(operator, num1, num2);
	} else if ($.inArray(operator, operators)!= -1) {
		$('h2#result').text('Sorry, one of those is not a valid number!');
		return 'Sorry, one of those is not a valid number!';
	
	}
	else {
		$('h2#result').text('Sorry, that is not a valid operator');
		return 'Sorry, that is not a valid operator';
	}
}

function result(operator,num1,num2) {
	var resultVar = 0;
	num1 = num1 / 1;
	num2 = num2 / 1;
	switch(operator) {
		case "+":
			resultVar = num1 + num2;
			break;
		case "-":
			resultVar = num1 - num2;
			break;
		case "*":
			resultVar = num1 * num2;
		case "/":
			resultVar = num1 / num2;
	}

	$('h2#result').text(resultVar);
	return resultVar;
}
