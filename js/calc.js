function doMath() {
  $("#equals").on("click", function() {
    number1 = parseInt($("#number1").val(), 10);
    number2 = parseInt($("#number2").val(), 10);
    operator = $("operation").val();
    validate(operator, number1, number2);
  })
}

function validate(operator, number1, number2) {
  if () {

  } else if () {

  } else {
    result(operator, number1, number2);
  }
}

function result(operator, number1, number2) {

}

$(document).ready(function() {
  doMath();
});