function doMath() {
    $('#equals').on("click", function(){
       var number1 = parseInt( $('#number1').val() );
       var operation = $('#operation').val();
       var number2 = parseInt( $('#number2').val() ); 
       $('#result').text(validate(operation, number1, number2));
    });
}

function validate(operation, number1, number2) {
    if (isNaN(number1) || isNaN(number2) ) {
        return "Sorry, one of those is not a valid number!";
    }
    if ( !['+','-','*','/'].includes(operation) ) {
        return "Sorry, that is not a valid operator";
    }
    return result(operation, number1, number2);
}

function result(operation, number1, number2) {
    switch(operation) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;
        case "/":
            return number1 / number2;
    }
}

$(document).ready(function(){
   doMath(); 
});