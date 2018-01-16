var num1 = $("#number1");
var num2 = $("#number2");
var operator = $("#operation");
var solution;


function doMath(){
	$('#equals').on('click', function(){
		n1 = Number(num1.val());
		n2 = Number(num2.val());
		opr = operator.val();
		validate(opr,n1,n2);
	});
}

function validate(op,one,two){
	if(isNaN(one) || isNaN(two)){
		$('#result').html("Sorry, one of those is not a valid number!");
		return "Sorry, one of those is not a valid number!";
	}else if(op != '+' && op != '-' && op != '/' && op != '*'){
		$('#result').text("Sorry, that is not a valid operator");
		return "Sorry, that is not a valid operator";
	}else {
		result(op,one,two);
	}
}

function result(op,one,two){
	if(op == '/'){
		$('#result').text(one / two);
		return one / two;
	} else if(op == '*'){
		$('#result').text(one * two);
		return one * two;
	} else if(op == '-'){
		$('#result').text(one - two);
		return one - two;
	} else if(op == '+'){
		$('#result').text(one + two);
		return one + two;
	}
	
}

$(document).ready(function(){

	var num1 = $("#number1");
var num2 = $("#number2");
var operator = $("#operation");
var solution;

	doMath();

})