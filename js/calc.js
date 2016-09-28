var first = Number($('#number1').val());
var second = Number($('#number2').val());
var operator = $('#operation'.val());

$(document).ready(function(){
  doMath();
});

function doMath() {
  $('#equals').on('click', function() {
    validate(operator, first, second);
  })
}

function validate(operator, first, second) {
  if (isNaN(first) || isNaN(second) || first === '' || second === '') {
    return "Sorry, one of those is not a valid number!";
  } else if (["+", "-", "*", "/"].indexOf(operator) === -1) {
    return "Sorry, that is not a valid operator";
  } else {
    result(operator, first, second);
  }
}

function result(operator, first, second) {
  var answer = eval(first + operator + second);
  $('#result').append('answer');
  return answer;
}

