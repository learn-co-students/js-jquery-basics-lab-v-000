
function doMath() {
  $('#equals').on('click', function(){
    var x = parseInt($('#number1').val());
    var y = parseInt($('#number2').val());
    var op = $('#operation').val();
    validate(op, x, y);
  })
}

function validate(op, x, y) {
  if (op == "+" || op == "-" || op == "*" || op == "/"){
    if (!isNaN(x) || !isNaN(y)) {
      return "Sorry, one of those is not a valid number!"
    } else {
      result(op, x, y)
    }
  } else {
    return 'Sorry, that is not a valid operator'
   }
}

function result(op, x, y){
  var answer = eval(x + op + y);
  $('#result').text(answer)
  return answer
}

$(document).ready(function(){
  doMath();
  validate();
  result();
})
