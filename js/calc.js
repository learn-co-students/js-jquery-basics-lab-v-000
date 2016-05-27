
$(document).ready(function(){
	doMath();
});

function doMath(){
	$('#equals').on('click', function(){
		validate($('#operation').val(), $('#number1').val(), $('#number2').val());
	});
}

function validate(op, n1, n2){
	var msg = "";
	var isValid = true;
	var ops = "+-*/";
	
	if (isNaN(n1) || isNaN(n2) || n1 === "" || n2 === ""){
		isValid = false;
		msg += "Sorry, one of those is not a valid number!";
	}
	
	if (!validOp(op) || op === ""){
		isValid = false;
		msg += "Sorry, that is not a valid operator";
	}

	 if (isValid){
	 	result(op, n1, n2);
	 } else {
	 	alert(msg);
	 	return msg;
	 }
}

function validOp(op){
	return (op == "+" || op == "-" || op == "*" || op == "/");
}

function result(op, n1, n2){
	var result = eval(n1 + op + n2);
	$('#result').text(result);
	return result;
}