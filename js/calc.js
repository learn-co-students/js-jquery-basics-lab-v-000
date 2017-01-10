$(document).ready(function(){
  //debugger;
  doMath();
  //validate();
});

var number1 = $('#number1');
var number2 = $('#number2');
var operator = $('#operation');

function doMath(){
  $('#equals').on('click', function() {
    var n1 = parseInt(number1.val());
    var n2 = parseInt(number2.val());
    var op = operator.val();
    validate(op, n1, n2);
  })
}

function validate(op, n1, n2){
  if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    return "Sorry, one of those is not a valid number!";
  }else if (op != '+' || op != '-' || op != '*' || op != '/') {
    return "Sorry, that is not a valid operator";
  }
  else {
    result(op, n1, n2);
  }
}

function result(op, n1, n2){
  if (op == "+") {
   $('#result').val(n1 + n2);
   return n1 + n2;
 }
 else if (op == "-") {
   $('#result').val(n1 - n2);
   return n1 - n2;
 }
 else if (op == "*") {
   $('#result').val(n1 * n2);
   return n1 * n2;
 }
 else if (op == "/") {
   $('#result').val(n1 / n2);
   return n1 / n2;
}
}
