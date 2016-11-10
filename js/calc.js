// $(document).ready(function(){
//
//   doMath();
//
// });
// var numberOne = $('#number1');
// var numberTwo = $('#number2');
// var operator = $('#operation');
//
//
// function doMath(){
//   $("#equals").on("click", function(){
//     numberOne = parseFloat(numberOne.val());
//     numberTwo = parseFloat(numberTwo.val());
//     operator = operator.val();
//
//     validate(numberOne, numberTwo, operator);
//   });
// }
//
// function validate(numberOne, numberTwo, operator) {
//   if(isNaN(numberOne) || numberOne === '' || isNaN(numberTwo) || numberTwo === ''){
//     $("#result").html('Sorry, one of those is not a valid number!');
//     return "Sorry, one of those is not a valid number!"
//
//     if(operator !== "*" || operator !== "-" || operator !== "+" || operator !== "/") {
//       $("#result").html("Sorry, that is not a valid operator");
//       return "Sorry, that is not a valid operator"
//     }
//   }
//   else{
//     result(operator, numberOne, numberTwo);
//   }
// }
//
//
// function result(operator, numberOne, numberTwo) {
//   if(operator == "-") {
//      $("#result").html(numberOne - numberTwo);
//      return numberOne - numberTwo;
//
//    }else if(operator == "+"){
//      $("#result").html(numberOne + numberTwo);
//      return numberOne + numberTwo;
//
//    }else if (operator == "/") {
//      $("#result").html(numberOne / numberTwo);
//      return numberOne / numberTwo;
//
//    }else if(operator == "*"){
//      $("#result").html(numberOne * numberTwo);
//      return numberOne * numberTwo;
//
//    }
// }
$(document).ready(function(){


  doMath();

});

  var num1 = $('#number1');
  var num2 = $('#number2');
  var operator = $('#operation');


function doMath(){
  $('#equals').on('click', function(){
    num1 = parseFloat(num1.val());
    num2 = parseFloat(num2.val());
    operator = operator.val();
    validate(operator, num1, num2);
  });
}

function result(operator, num1, num2) {
  if (operator == '+'){
    $('#result').html(num1 + num2);
    return num1 + num2;
  }
  else if (operator == '-'){
    $('#result').html(num1 - num2);
    return num1 - num2;
  }
  else if (operator == '*'){
    $('#result').html(num1 * num2);
    return num1 * num2;
  }
  else if (operator == '/'){
    $('#result').html(num1 * num2);
    return num1 / num2;
  }
}

function validate(operator, num1, num2) {
  debugger;
  if (operator == "+" || operator == "-" || operator == "*" || operator == "/"){
    if (isNaN(num1) || num1 === '' || isNaN(num2) || num2 === '' ){
      $("#result").text('Sorry, one of those is not a valid number!');
      return 'Sorry, one of those is not a valid number!'
    }
    else {
      result(operator, num1, num2);
    }
  }
  else {
    $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator"
  }
}
