function result(validOperator, validInput1, validInput2) {
	switch(validOperator){
		case '+': 
			// return $('#result').replaceWith("<h2 id='result'>" + (validInput1 + validInput2) + "</h2>"); 
			return (validInput1 + validInput2)
			break;
    	case '-': 
    		return (validInput1 - validInput2)
    		// return $('#result').replaceWith("<h2 id='result'>" + (validInput1 - validInput2) + "</h2>"); 
    		break;
    	case '/': 
    		return (validInput1 / validInput2)
    		// return $('#result').replaceWith("<h2 id='result'>" + (validInput1 / validInput2) + "</h2>");
    		break
    	case '*': 
    		return (validInput1 * validInput2)
    		// return $('#result').replaceWith("<h2 id='result'>" + (validInput1 * validInput2) + "</h2>");
    		break;

    }
}

function validate(operator, input1, input2) {
	var validOperatorsArray = ['+', '-', '/', '*'];
	var operatorResult = validOperatorsArray.indexOf(operator);
	if(operatorResult === -1) {
		return "Sorry, that is not a valid operator";
	}
	else if (isNaN(input1) || isNaN(input2)) {
		return "Sorry, one of those is not a valid number!";
	}
	else {
		result(operator, input1, input2);
	}
}

function doMath() {
	$('button#equals').on('click', function() {
		var operatorVal = $('input#operation').val();
		var number1Val = parseInt($('input#number1').val());
		var number2Val = parseInt($('input#number2').val());
		validate(operatorVal, number1Val, number2Val);
	});
}

$(document).ready(function() {
	doMath();
});