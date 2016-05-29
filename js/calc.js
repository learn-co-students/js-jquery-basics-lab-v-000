var num1 = $("#number1");
var num2 = $("#number2");
var operation = $("#operation");

function doMath() {
  $('#equals').on('click', function() {
     n1 = Number(num1.val());
     n2 = Number(num2.val());
     validate(operation.val(), n1,n2);
  })
}

function validate(operation, n1, n2) {
  if (isNaN(n1) || isNaN(n2)) {
    $('#result').text("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  }
  else if (operation != "+" && operation != "-" && operation != "*" && operation != "/"){
    $('#result').text("Sorry, that is not a valid operator");
    return 'Sorry, that is not a valid operator';
  }
  else {
    result(operation, n1, n2);
  }


}

function result(operation, n1, n2) {
  $('#result').text(eval(n1+operation+n2));
  return eval(n1+operation+n2);
}

 $(document).ready(function(){
 
  var num1 = $("#number1");
  var num2 = $("#number2");
  var operation = $("#operation"); 
  doMath();
 
 })