var num1, op, num2;

function doMath() {
	$("button#equals").on("click", function() {
		num1 = parseFloat($("input#number1").val(), 10);
		op = $("input#operation").val();
		num2 = parseFloat($("input#number2").val(), 10);
	});
}

function validate(op, num1, num2) {
	if (typeof(num1) != 'number' || typeof(num2) != 'number') {
		return "Sorry, one of those is not a valid number!";
	}
	if (op != '/' && op != '*' && op != '+' && op != '-') {
		return "Sorry, that is not a valid operator";
	}
}

function result(op, num1, num2) {
	var result;
	if (op == '/') {
		result = num1 / num2;
	} else if (op == '*' ) {
		result = num1 * num2;
	} else if (op == '+') {
		result = num1 + num2;
	} else if (op == '-') {
		result = num1 - num2;
	}
	$("h2#result").text(result);
	return result;
}