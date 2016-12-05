
var str

doMath();

function doMath () {
//  document.getElementById("equals").addEventListener("click", function(){

  $('#equals').on("click", function(){


    var x = document.getElementById("operation").value;
  //  var x = $('#operation').value;
    var n1 = document.getElementById("number1").value;
    var n2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = validate(x,n1,n2)
  })

}


function validate(x, n1, n2){

  if (isNaN(n1) || isNaN(n2)) {
      str = "Sorry, one of those is not a valid number!"
  }
  else if (x!='+' && x!='-' && x!='*' && x!='/') {
      str = "Sorry, that is not a valid operator"
  }
  else {
      str = result(x, n1, n2)
  }
  return str
}

function result(x, n1, n2) {

    switch(x) {
      case '+':
        str = parseInt(n1)+parseInt(n2)
        break;
      case '-':
        str = parseInt(n1)-parseInt(n2)
        break;
      case '*':
        str = parseInt(n1)*parseInt(n2)
        break;
      case '/':
        str = parseInt(n1)/parseInt(n2)
        break;

      }
      return str

}
