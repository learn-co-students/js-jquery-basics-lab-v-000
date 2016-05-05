function doMath(){
  $('#equals').on("click", function(){
    var op = $('#operation').val();
    var num1 = $('#number1').val();
    var num2 = $('#number2').val();

    validate(op, num1, num2);
  });
};

function validate(op, num1, num2){

  if(isNaN(num1) || isNaN(num2)){

    return "Sorry, one of those is not a valid number!";

  } else if(op!='+' && op!='-' && op!='*' && op!='/'){

    return "Sorry, that is not a valid operator";

  } else {

    return result(op, num1, num2);

  }
};


function result(op, num1, num2){
  var out = eval("".concat(num1, op, num2));
  $('#result').text(out);
  return out;
};


$(document).ready(function(){
  doMath();
});
