var operator = $('input#operation')
var firstNumber = $('input#number1')
var secondNumber = $('input#number2')

function doMath() {
  $('button#equals').on("click", function() {
    validate(operator, firstNumber, secondNumber)
  })
}

function result(operator, firstNumber, secondNumber) {
  var num1 = parseInt(firstNumber)
  var num2 = parseInt(secondNumber)
  if (operator == "+") {
    $('div#result').text(num1 + num2) 
    return num1 + num2
  }
  else if (operator == "-") {
    $('div#result').text(num1 - num2) 
    return num1 - num2
  }
  else if (operator == "*") {
    $('div#result').text(num1 * num2) 
    return num1 * num2
  }
  else if (operator == "/") {
    $('div#result').text(num1 / num2) 
    return num1 / num2
  }
}

function validate(operator, firstNumber, secondNumber) {
  if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {
    if (isNaN(firstNumber) || isNaN(secondNumber) || firstNumber === "" || secondNumber === "") {
      return "Sorry, one of those is not a valid number!"
    } else {
      result(operator, firstNumber, secondNumber)
    }
  } else {
    return 'Sorry, that is not a valid operator'
  }
}