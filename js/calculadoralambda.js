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

    //Declaracion de arreglos
    const diasSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
    console.log(diasSemana)
    console.log(diasSemana[0]);
    console.log(diasSemana[5]);

    diasSemana[5] = "Sabado";

    console.log(diasSemana[5]);

    diasSemana.push("domingo");

    console.log(diasSemana[6]);

    diasSemana.unshift("dias");
    console.log(diasSemana)


    const numerosPares = [2,4,6,8,10];

    console.log(numerosPares)

    const numerosImpares = [1,3,5,7,9];

    const numerosCompletos = numerosPares.concat(numerosImpares);

    console.log(numerosCompletos)

    for(const dia of diasSemana){
        console.log[dia]

        if(dia === "Viernes"){
            console.log("Por fin llego el fin de semana")
        }
    }

    if(diasSemana[8]===undefined){
        console.log("No tiene valor")
    } else {}
        console.log("Si tiene valor")
    }


    //Manejo de objetos
    const estudiante = {
        nombre:'Dennisse',
        apellido:'Andrade',
        edad:27,
        genero:'F',
        ciudadNacimiento:'Quito'
    }

    console.log(estudiante);

    console.log(estudiante.apellido);

    estudiante.nombre = 'Alexandra';
    console.log(estudiante);

    const profesor = {
        nombre:"Diego",
        apellido:"Rivas",
        edad:27,
        genero:"M",
        ciudadNacimiento:"Quito",
        direccion: {
            callePrincipal:"Tachina",
            calleSecundaria:"S23C",
            numeracion:"Lote 3",
            barrio:"La Mena 2"
        }
    }

    console.log(profesor);

    console.log(profesor.direccion.barrio);

    const estu1 = {
        nombre: "Anahi",
        apellido: "Marin"
    }

    const estu2 = {
        nombre: "Marjorie",
        apellido: "Andrade"
    }


    const estu3 = {
        nombre: "Isabel",
        apellido: "Valencia"
    }

    const estu4= {
        nombre: "Guillermo",
        apellido: "Stark"
    }


    const estudiantes = [estu1,estu2,estu3,estu4];
    console.log(estudiantes);

    console.table(estudiantes);

    console.log(estudiantes[1].apellido);

    estudiantes[0].apellido = "Cambiar Apellido";

    console.table(estudiantes);

    const profesores = [{
                        nombre:"Dennisse",
                        apellido:"Andrade"}
                         ,{
                        nombre:"Diego",
                        apellido:"Rivas"
                         }];

    console.table(profesores)


    var prof = profesores.pop(); //elimina un elemento de la lista, el ultimo
    console.log(prof);
    console.table(profesores);


    //Desestructuracion de objetos

    const diasSemana2 = ["Lunes","Martes","Miercoles","Jueves","Viernes"];

    const [dia1,dia2,dia3,dia4,dia5]= diasSemana2;

    console.log(dia2);

    const [d1,d2,d3,d4,d5] = ["Lunes-1","Martes-2","Miercoles-3","Jueves-4","Viernes-5"];

    console.log(d4);

    //Desestructuracion de objetos

    const vehiculo = {
        marca:"Toyota",
        modelo:"Prius",
        anio:2018
    }

    const {marca,anio} = vehiculo;//van los mismos atributos del objeto

    console.log(marca);

    const {modelo} = {
        marca:"Ford",
        modelo:"Edge",
        anio:2020
    } 

    //desestructuracion de un objeto con un atributo compuesto

    const mascota = {
        nombre:"Manchos",
        color:"Atrigrado",
        fechaNacimiento: {
            anio:2022,
            mes:"Junio",
            dia:21
        }
    }

    const{nombre,color,fechaNacimiento}=mascota;
    const{mes,dia}=fechaNacimiento;

    console.log(fechaNacimiento);

    console.log(dia);

    
    const {nombre1, color1,fechaNacimiento1:{anio1,mes1,diaa}} = {
        nombre1:"Manchos",
        color1:"Atrigrado",
        fechaNacimiento1: {
            anio1:2022,
            mes1:"Junio",
            diaa:21
        }
    }

   console.log(mes1);
