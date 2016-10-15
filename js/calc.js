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

// + Define a `doMath` function that binds a click event to the equals sign so that, when a user clicks the button, the three input values are stored in variables. Remember, the `val` function always displays values as strings, even if they represent a number. `10` becomes `"10"`. You'll want to make the string a number before you do any math.

// + Define a `validate` function that accepts three arguments (the operator, the first number, and the second number). The function should validate that both numbers and the operator are valid entries. A number should only contain numerical values and the operator should only store `+`, `-`, `*`, or `/`. If the numbers aren't valid, it should display: `"Sorry, one of those is not a valid number!"`. The jQuery function `isNaN` will come in handy to determine whether a value is a number. If the operator isn't valid, the `validate` function should display: `"Sorry, that is not a valid operator"`. The click event should call `validate`, which, in turn, should call the `result` function.

// + Define a `result` function that accepts three arguments (the operator, the first number, and the second number). The function should do the appropriate math problem based on the operator. The function should return the solution and display it in the div with the ID `result`.

// + **NB**: In order for your tests to run properly, you'll need to define the functions outside of the document ready. Any variables you define in the global scope will need to be defined inside the document ready and outside as well. Inside the document ready you'll want to call the `doMath` function.

// See a live, working example of the simple calculator [here](http://learn-co-curriculum.github.io/fe-jquery-user-input-calc/).