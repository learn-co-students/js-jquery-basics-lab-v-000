var firstNumber = Number($('#number1').val());
var secondNumber = Number($('#number2').val());
var operator = $('#operation'.val());

$(document).ready(function(){
  doMath();
});

function doMath() {
	$('#equals').on('click', function() {
		validate(operator, firstNumber, secondNumber);
	});
};

function validate(operator, firstNumber, secondNumber) {
	if (isNaN(firstNumber) || isNaN(secondNumber) || firstNumber === '' || secondNumber === '') {
		return "Sorry, one of those is not a valid number!";
	} else if (["+", "-", "*", "/"].indexOf(operator) === -1) {
		return "Sorry, that is not a valid operator";
	} else {
		result(operator, firstNumber, secondNumber);
	};
};

function result(operator, firstNumber, secondNumber) {
	var answer = eval(firstNumber + operator + secondNumber);
  $('#result').append('answer');
  return answer;
};