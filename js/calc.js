"use-strict";

function doMath() {
	var input = [];
	$("#equals").on("click", function() {
		input.push($("#number1"));
		input.push($("#number2"));
		input.push($("operation"));
	});
}

function validate(operator, first_num, second_num) {
	var compare = ["+", "-", "*", "%"];
	if (isNaN(first_num) === true || isNaN(second_num) === true) {
		return "Sorry, one of those is not a valid number!";
	}
	if (compare.indexOf(operator) === -1) {
		return "Sorry, that is not a valid operator";
	}
}

function result(operator, first_num, second_num) {
	var value = 0;
	switch(operator) {
		case "+":
			value = first_num + second_num;
			break;
		case "-":
			value = first_num - second_num;
			break;
		case "*":
			value = first_num * second_num;
			break;
		case "/":
			value = first_num / second_num;
			break;
	}
	$("#result").html(value);
	return value;
}
