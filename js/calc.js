$(document).ready(function(){
  doMath();
});
  var num1 = $('#num1')
  var num2 = $('#num2')
  var operator = $('#operator')


function doMath(){
  return $("#equals").on('click', function(){
    num1 = parseFloat(num1.val());
    num2 = parseFloat(num2.val());
    operator = operator.val();
    validate(operator, num1, num2);
  });
}

// function validate(operator, num1, num2) {
//   if (operator != "*" || operator != "+" || operator != "-" || operator != "/"){
//       $('#result').text("Sorry, that is not a valid operator")
//       return "Sorry, that is not a valid operator"
// } if (isNan(num1) || num1 === '' || isNan(num2) || num2 === '') {
//      $('#result').text("Sorry, one of those is not a valid number!")
//      return "Sorry, one of those is not a valid number!"
// } else {
//   return result(operator, num1, num2)
// }
// }

function validate(operator, num1, num2) {
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

function result(operator, num1, num2){
  if (operator == '+') {
    $('#result').html(num1 + num2)
    return (num1 + num2)
  } else if (operator == '-') {
    $('#result').html(num1 - num2)
    return (num1 - num2)
  } else if (operator == '/') {
  $('#result').html(num1 / num2)
  return (num1 / num2)
  } else if (operator == '*') {
  $('#result').html(num1 * num2)
  return (num1 * num2)
  }
}
