var number1;
var number2;
var operation;
var solution;

function doMath() {
  $('#equals').on('click', function() {
    number1 = $('#number1').val();
    number2 = $('#number2').val();
    operation = $('#operation').val();
    console.log('values have been stored')
  });
};

function validate(operation, number1, number2) {
  //Validate numbers//
  if (isNaN(number1) || isNaN(number2)) {
    return "Sorry, one of those is not a valid number!"
  }
  //Validate operator//
  if (!operation.match(/[+*/-]/)) {
    return 'Sorry, that is not a valid operator'
  }
  result();
};

function result(operation, number1, number2) {
  //convert string to number//
  number1 = parseInt(number1);
  number2 = parseInt(number2);
  //select operation//
  if (operation == '+') {
    solution = number1 + number2;
  }
  if (operation == '-') {
    solution = number1 - number2;
  }
  if (operation == '*') {
    solution = number1 * number2;
  }
  if (operation == '/') {
    solution = number1 / number2;
  }
  $('#result').text(solution);
  return solution;
};

$(document).ready(function(){
  doMath();
  validate();
  result();
});
