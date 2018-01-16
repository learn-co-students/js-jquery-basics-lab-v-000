var number1, operation, number2

function doMath() {
	$('button#equals').on("click", function() {
		number1 = $('input#number1').val();
		operation = $('input#operation').val();
		number2 = $('input#number2').val();
		$("h2#result").text(validate(operation, number1, number2));
	})
}

function validate(operation, number1, number2) {
	var operations = ["+","-","*","/"]
	if (isNaN(number1) || isNaN(number2)) {
		return "Sorry, one of those is not a valid number!";
	} else if (!operations.includes(operation)) {
		return "Sorry, that is not a valid operator";
	} else {
		return result(operation, number1, number2);
	}
}

function result(operation, number1, number2) {
	return eval(number1 + operation + number2)
}



$(document).ready(function() {

	doMath();

});