$(document).ready(function(){
doMath();
});

function doMath()
{
  $("#equals").on("click",function(event)
  {
    op=$("#operation").val();
    n1=$("#number1").val();
    n2=$("#number2").val();
    console.log(op + n1 + n2);
    validate(op,n1,n2);
  });
}
function validate(op,n1,n2)
{
console.log(op + n1 + n2);
    if(isNaN(n1)|| isNaN(n2) )
     message = "Sorry, one of those is not a valid number!"
     else
     if(op!='+'&&op!='-'&&op!= '*'&&op!= '/')
        message="Sorry, that is not a valid operator"
    else
      message=result(op,n1,n2);
 console.log(message);
  return message;
}

function result(op,n1,n2)
{
  console.log(op + n1 + n2);
  n1=Number(n1);
  n2=Number(n2);
  alert(n1 + n2);

  if(op=='+') result=n1+n2 ;
  if(op=='-') result= n1-n2;
  if(op=='*' ) result = n1*n2;
  if(op=='/') result=n1/n2;


 $('#result').html(result);
 return result;
 }
