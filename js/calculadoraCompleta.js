let display = document.getElementById("display");

let numeroA = '';
let operador = '';
let numeroB = '';
let resultado = '';
let nuevaEntrada = false;
let displayContenido = '';

const limpiarDisplay = () => {
    numeroA = '';
    numeroB = '';
    operador = '';
    resultado = '';
    nuevaEntrada = false;
    displayContenido = '';
    actualizarDisplay('0');
};

const borrar = () => {
    if (resultado !== '') {
        resultado = '';
        displayContenido = '';
        actualizarDisplay('0');
    } else if (operador !== '') {
        operador = '';
        displayContenido = displayContenido.slice(0, -1);
        actualizarDisplay(displayContenido);
    } else if (numeroB !== '') {
        numeroB = numeroB.slice(0, -1);
        displayContenido = displayContenido.slice(0, -1);
        actualizarDisplay(displayContenido);
    } else if (numeroA !== '') {
        numeroA = numeroA.slice(0, -1);
        displayContenido = displayContenido.slice(0, -1);
        actualizarDisplay(displayContenido);
    }
};

const ingresarNumero = (numero) => {
    if (nuevaEntrada) {
        numeroA = numero;
        displayContenido = numero;
        nuevaEntrada = false;
    } else {
        if (operador === '') {
            numeroA += numero;
        } else {
            numeroB += numero;
        }
        displayContenido += numero;
    }
    actualizarDisplay(displayContenido);
};

const agregarPunto = () => {
    if (nuevaEntrada) {
        numeroA = '0.';
        displayContenido = '0.';
        nuevaEntrada = false;
    } else {
        if (operador === '') {
            if (!numeroA.includes('.')) {
                numeroA += '.';
                displayContenido += '.';
            }
        } else {
            if (!numeroB.includes('.')) {
                numeroB += '.';
                displayContenido += '.';
            }
        }
    }
    actualizarDisplay(displayContenido);
};

const ingresarOperador = (operador1) => {
    if (numeroA === '' && operador1 === '-') {
        numeroA = '-';
        displayContenido = numeroA;
    } else if (numeroA !== '' && numeroB !== '') {
        calcularResultado(false);
        operador = operador1;
        displayContenido = numeroA + operador;
    } else if (resultado !== '') {
        numeroA = resultado;
        operador = operador1;
        displayContenido = resultado + operador;
        nuevaEntrada = false;
    } else {
        operador = operador1;
        displayContenido += operador;
    }
    actualizarDisplay(displayContenido);
};

const calcularResultado = (final = true) => {
    let resultado;
    const numa = parseFloat(numeroA);
    const numb = parseFloat(numeroB);

    switch (operador) {
        case '+':
            resultado = (numa + numb).toString();
            break;
        case '-':
            resultado = (numa - numb).toString();
            break;
        case '*':
            resultado = (numa * numb).toString();
            break;
        case '/':
            if (numb !== 0) {
                resultado = (numa / numb).toString();
            } else {
                resultado = "Error";
            }
            break;
        default:
            resultado = numeroA;
            break;
    }
    if (final) {
        displayContenido = resultado;
    } else {
        displayContenido = resultado + operador;
    }
    actualizarDisplay(displayContenido);
    numeroA = resultado;
    numeroB = '';
    if (final) {
        operador = '';
        nuevaEntrada = true;
    } else {
        nuevaEntrada = false;
    }
};

const actualizarDisplay = (valor) => {
    document.getElementById("display").innerText = valor;
};
