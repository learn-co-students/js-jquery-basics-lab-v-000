$( document ).ready(function() {
    var num1;
    var num2;
    var op;

    doMath();
});



var num1;
var num2;
var op;

function doMath(){
  $('#equals').on('click', function(){
    num1 = Math.floor($('#number1').val());
    num2 = Math.floor($('#number2').val());
    op = $('#operation').val();
    validate(op, num1, num2);
  });
}

function validate(op, num1, num2){
  if(isNaN(num1) || isNaN(num2)){
    alert("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  }else if($.inArray(op, ["+","-","*","/"]) === -1){
    alert("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  }else{
    result(op, num1, num2);
  }

}

function result(op, num1, num2){
  if(op === "+"){
    $('#result').text(num1 + num2);
    return  num1 + num2;
  }else if(op === "-"){
    $('#result').text(num1 - num2);
    return  num1 - num2;
  }else if(op === "/"){
    $('#result').text(num1 / num2);
    return  num1 / num2;
  }else if(op === "*"){
    $('#result').text(num1 * num2);
    return  num1 * num2;
  }
}