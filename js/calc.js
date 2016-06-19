
function doMath() {
  $('#equals').on("click", function() {
    var one = $('#number1');
    var two = $('#number2');
    var oper = $('#operation');
    return eval(one + " " + oper + " " + two);
  });
}

function validate(oper, one, two) {

  if (oper != "-" && oper != "/" && oper != "*" && oper != "+") {
    return "Sorry, that is not a valid operator";
  }

  if (isNaN(one) || isNaN(two)) {
    return "Sorry, one of those is not a valid number!";
  }


}

function result(oper, one, two) {
  var res = eval(one + " " + oper + " " + two);
  $('h2#result').html(res);
  return res;
}


$('document').ready(function() {

});
