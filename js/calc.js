var number1 = $('#number1');
var number2 = $('#number2');
var operation = $('#operation');

function doMath(operation, number1, number2) {
    $('#equals').on('click', function() {
        number1 = parseFloat(number1.val())
        number2 = parseFloat(number2.val())
        operation = operation.val()
        validate(operation, number1, number2)
    });
}

function validate(operation, number1, number2) {
    if(isValidOperation(operation) && isNaN(number1) && isNaN(number2)) {
        return result(number1, number2, operation);
    } else if(!isValidOperation(operation)) {
        return "Sorry, that is not a valid operator";
    } else {
        return "Sorry, one of those is not a valid number!";
    }
}

function isValidOperation(operation) {
    if(operation == "+" || operation == "-" || operation == "*" || operation == "/") {
        return true;
    } else {
        return false;
    }
}

function result(operation, number1, number2) {
    var numberResult = eval(number1 + operation + number2);
    $('#result').html(numberResult);
    return numberResult;
}

$document.ready(function() {
   doMath();
});