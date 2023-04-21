
function buttonclicked(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let op = document.getElementById("operation").value;
    let result = 0;
    
    if(op == "+") {
        result = parseFloat(num1) + parseFloat(num2);
    } else if(op == "-") {
        result = parseFloat(num1) - parseFloat(num2);
    }else if(op == "*") {
        result = parseFloat(num1) * parseFloat(num2);
    }else if(op == "/") {
        result = parseFloat(num1) / parseFloat(num2);
    } else {
        result = "error";
    }

    document.getElementById("result").innerHTML = result;    
}
 
