$(document).ready(function(){

  doMath();

});



function doMath(){
  $('#equals').click(function(){
    var n1 = parseFloat($('#number1').val());
    var n2 = parseFloat($('#number2').val());
    var op = $('#operation').val();
    validate(op, n1, n2);
  });
}

function validate(op, n1, n2){
  var operators = ['+', '-', '*', '/'];
  if(operators.indexOf(op) > -1){
    if(typeof(n1) != "number"|| typeof(n2) != "number"){
      $('#result').text("Sorry, one of those is not a valid number!");
      return "Sorry, one of those is not a valid number!";
    } else {
      result(op, n1, n2);
    }
  } else {
    $('#result').text("Sorry, that is not a valid operator.")
    return "Sorry, that is not a valid operator";
  }
}

function result(op, n1, n2){
  switch(op){
    case "+":
      $('#result').text(n1 + n2);
      return n1 + n2;
    case "-":
      $('#result').text(n1 - n2);
      return n1 - n2;
    case "*":
      $('#result').text(n1 * n2);
      return n1 * n2;
    case "/":
      $('#result').text(n1 / n2);
      return n1 / n2;
  }
}
