const sumar = (idNum1, idNum2) => {

    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var res = num1 + num2;

    console.log(res);

    document.getElementById("idResultado").innerText = res
}


const restar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var res = num1 - num2;

    console.log(res);

    document.getElementById("idResultado").innerText = res

}
const dividir = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var res = num1 / num2;

    console.log(res);

    document.getElementById("idResultado").innerText = res

}
const multiplicar = (idNum1, idNum2) => {
   var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var res = num1 * num2;

    console.log(res);

    document.getElementById("idResultado").innerText = res

}


function agregarElemento(){
    document.getElementById('idDivision').innerHTML = "<button>NUEVO</button>"; //se agrega un comportamiento

}


function quitarElemento(){
    document.getElementById('idDivision').innerHTML = ""; //se agrega un comportamiento
    
}
function conceptosJs(){

    /* */

    const IVA = 15;
    console.log(IVA);

    var nombre = "Dennisse";
    console.log(nombre);
    nombre = "Alexandra";
    console.log(nombre);

    let apellido = "Andrade";
    console.log(apellido);
    apellido = "Rivas";
    console.log(apellido);


}