//vars
var num1= $('#number1');
var num2= $('#number2');
var op = $('#operation');

function doMath(){
  $('#equals').on('click', function(){
    num1 = parseFloat(num1.val());
    num2 = parseFloat(num2.val());
    op = op.val();
    validate(op, num1, num2);
  });
}

function validate(op, num1, num2){
  // var isOp = if(op == "+" || op == "-" || op == "*" || op == "/")? true:false;
  // var isNum = if(isNaN(num1) || num1==='' || isNaN(num2) || num2 === '')? true:false;

  if(op == "+" || op == "-" || op == "*" || op == "/"){
    if(isNaN(num1) || num1==='' || isNaN(num2) || num2 === ''){
      $('#result').html('Sorry, one of those is not a valid number!');
      return 'Sorry, one of those is not a valid number!';
    }
    else{
      result(op, num1, num2);
    }
  }
  else{
    $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator"
  }
}

function result(op, num1, num2){
  var total = eval(num1 + op + num2)
  $('#result').html(total);
  return total;
}


$(document).ready(function(){


  doMath();

});
