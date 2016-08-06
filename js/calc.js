

function validate(operator, n1, n2){
	if (operator=="+"){

	} else if (operator == "-"){

	} else if (operator == "/"){

	} else if (operator == "*"){

	} else {
		return "Sorry, that is not a valid operator"
	}

	if (isNaN(n1) || isNaN(n2)){
		return "Sorry, one of those is not a valid number!"
	}

}

function result(operator, n1, n2){
	
	var result = 0;

	if (operator=="+"){
		result = n1 + n2;
	} else if (operator == "-"){
		result = n1 - n2;
	} else if (operator == "/"){
		result = n1 / n2;
	} else if (operator == "*"){
		result = n1 * n2;
	} else {
		result = NaN;
	}

	return result;

}

function doMath(){
	$('#equals').on("click", function(){
		var n1 = Number($('#number1').val());
		var n2 = Number($('#number2').val());
		var operator = $('#operation').val();
		var r = result(operator, n1, n2);
		$('#result').html(r);
	});
}

$(document).ready(function(){

	doMath();

});