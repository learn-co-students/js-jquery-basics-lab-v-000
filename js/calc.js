 var firstNumber; 
 var secondNumber; 
 var operator;

function doMath(){
	$('#equals').bind('click', function(){
			firstNumber = parseInt($('input').val());
 			secondNumber = parseInt($('input:last').val());
 			operator = $('#operation').val();
 			$('#result').text(result(operator, firstNumber, secondNumber));
	})
	
	
}

function validate(operator, firstNumber, secondNumber){
	if (isNaN(firstNumber) || isNaN(secondNumber)){
		return "Sorry, one of those is not a valid number!"
	}else if (operator != "+" && operator != "-" && operator != "/" && operator != "*"){
		return "Sorry, that is not a valid operator";
	}
}	


function result(operator, firstNumber, secondNumber){
	if (operator === "+"){
		return result = firstNumber + secondNumber;
	}else if (operator === "-"){
		return result = firstNumber - secondNumber;
	}else if (operator === "/"){
		return result = firstNumber / secondNumber;
	}else if (operator === "*"){
		return result = firstNumber * secondNumber;
	}
	
}

doMath();