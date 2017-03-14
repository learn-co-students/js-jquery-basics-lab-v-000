$(document).on('ready', function(){
  doMath();
})

function doMath() {
  $('#equals').on('click', function(){
    var num1 = Number($('#number1').val());
    var num2 = Number($('#number2').val());
    var symbol = $('#operation').val();
    var answer = validate(symbol, num1, num2)
    $('#result').text(answer)
  })
}

function validate(operator, num1, num2){
  if (isNaN(num1) || isNaN(num2)) {
    return "Sorry, one of those is not a valid number!"
  } else if ($.inArray(operator, ["+", "-", "*", "/"]) < 0 ){
    return "Sorry, that is not a valid operator"
  } else {
    return result(operator, num1, num2);
  }
}

function result(operator, num1, num2){
  return operators[operator](num1, num2);
}

var operators = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '\/': function(a, b) { return a / b }
};
