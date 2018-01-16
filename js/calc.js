$(document).ready(function(){
  doMath();
});


function doMath(){
  $('#equals').on('click', function(){
    var val1 = parseFloat($('#number1').val());
    var val2 = parseFloat($('#number2').val());
    var operator = $('#operation').val();
    // console.log(val1);
    // console.log(val2);
    // console.log(operator);
    // debugger;
    validate(operator, val1, val2);
  });
}

function validate(operator, val1, val2){
  if (operator == '+' || operator == '-' || operator == '*' || operator == '/'){
    if(isNaN(val1) || isNaN(val2)){
      $('#result').html("Sorry, one of those is not a valid number!");
      return "Sorry, one of those is not a valid number!";
    }
    else {
      result(operator, val1, val2);
    }
  }
  else {
    $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  }
}

function result(operator, val1, val2){
  if (operator == '+'){
    $('#result').html(val1 + val2);
    return (val1 + val2);
  }
  else if (operator == '-'){
    $('#result').html(val1 - val2);
    return (val1 - val2);
  }
  else if (operator == '/'){
    $('#result').html(val1 / val2);
    return (val1 / val2);
  }
  else {
    $('#result').html(val1 * val2);
    return (val1 * val2);
  }
}
