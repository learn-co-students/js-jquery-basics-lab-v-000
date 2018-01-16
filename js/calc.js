'use strict';
 


function doMath() {
  $("button").click(function() {
    
    var inputs = $('input')
    
    for (var i = 0; i < inputs.length; i++) {
      inputs.splice(i, 1, (inputs[i].value))
    }
    
    if (validate(inputs[0], inputs[1], inputs[2])) {
      result(inputs[0], inputs[1], inputs[2])    
     }
  })
}


function validate(v1, v2, v3) {

  var inputs = [v1, v2, v3]

  for (var i=0; i < inputs.length; i++) {
    if(isNaN(inputs[i])) {
      if(!["+", "-", "*", "/"].includes(inputs[i])) {
        return  "Sorry, that is not a valid operator"
      }
    return "Sorry, one of those is not a valid number!"
    }  
  }
}


function result(v1, v2, v3) { 
  var inputs = [v1, v2, v3]

  for (var i=0; i < inputs.length; i++) {
    if (isNaN(inputs[i])) {
      var op=inputs[i];
      inputs.splice(i, 1)
    }
  }
  var res = eval(inputs[0] + op + inputs[1])
  $("#result").text(res)
  return res
}




$(document).ready(function() {
  doMath();
});
