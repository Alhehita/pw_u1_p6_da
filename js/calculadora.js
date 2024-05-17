function sumar(idNum1, idNum2){

    console.log("sumar");

    console.log(idNum1);
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var res = num1 + num2;

    console.log(res);

    document.getElementById("idResultado").innerText = res

}

function restar(idNum1, idNum2){
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var res = num1 - num2;

    console.log(res);

    document.getElementById("idResultado").innerText = res

}
function dividir(idNum1, idNum2){
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var res = num1 / num2;

    console.log(res);

    document.getElementById("idResultado").innerText = res

}
function multiplicar(idNum1, idNum2){
   var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var res = num1 * num2;

    console.log(res);

    document.getElementById("idResultado").innerText = res

}


