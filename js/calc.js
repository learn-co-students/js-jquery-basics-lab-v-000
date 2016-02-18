function result(operation, n1, n2){
	n1=parseInt(n1);
	n2=parseInt(n2);
	switch(operation){
		case '+':
			return n1+n2;
		case '-':
			return n1-n2;
		case '/':
			return n1/n2;
		case '*':
			return n1*n2;
	}
}

function validate(operation, n1, n2){
	var validNumbers=( n1!='' && n2!='' && !isNaN(n1+n2) );
	var operationMatch=operation.toString().match(/^[\+\-\*\/]$/);
	var validOperation=( operationMatch!=null)
	var errorMsg;
	if (!validNumbers){ return 'Sorry, one of those is not a valid number!'; }
	else if( !validOperation ) { return 'Sorry, that is not a valid operator' }
	if (validOperation && validNumbers){ return true }
}

function doMath(){
	$('#equals').on('click', function(){
		n1=$('#number1').val();
		n2=$('#number2').val();
		operation=$('#operation').val();
		var validation = validate(operation, n1, n2);
		debugger;
		if (validation===true){
			var resultStr;
			resultStr=result(operation, n1, n2);
			$('#result').text(resultStr);
		} else {
			$('#result').text(validation);
		}

	});
}

$( document ).ready(function() {
	doMath();
});