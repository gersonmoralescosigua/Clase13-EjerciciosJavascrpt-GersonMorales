// 1. Calificación (if)
function evaluarCalificacion() {
    let calificacion = document.getElementById('calificacion').value;
    if (calificacion >= 60) {
        alert("Aprobado");
    } else {
        alert("No aprobado");
    }
}

// 2. Número Positivo, Negativo o Cero (if else)
function evaluarNumero() {
    let numero = document.getElementById('numeroPosNeg').value;
    if (numero > 0) {
        alert("El número es positivo");
    } else if (numero < 0) {
        alert("El número es negativo");
    } else {
        alert("El número es cero");
    }
}

// 3. Día de la semana (switch)
function mostrarDiaSemana() {
    let dia = document.getElementById('diaSemana').value;
    switch (parseInt(dia)) {
        case 1:
            alert("Lunes");
            break;
        case 2:
            alert("Martes");
            break;
        case 3:
            alert("Miércoles");
            break;
        case 4:
            alert("Jueves");
            break;
        case 5:
            alert("Viernes");
            break;
        case 6:
            alert("Sábado");
            break;
        case 7:
            alert("Domingo");
            break;
        default:
            alert("Número no válido. Ingresa un número del 1 al 7.");
    }
}

// 4. Número mayor (operador ternario)
function evaluarMayor() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado = (num1 > num2) ? `El número mayor es ${num1}` : `El número mayor es ${num2}`;
    alert(resultado);
}

// 5. Mayoría de edad (if else)
function evaluarEdad() {
    let edad = document.getElementById('edadUsuario').value;
    if (edad >= 18) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
}

// 6. Divisible por 3, 5 o ambos (switch)
function evaluarDivisible() {
    let numero = document.getElementById('numeroDivisible').value;
    switch (true) {
        case (numero % 3 === 0 && numero % 5 === 0):
            alert("El número es divisible por 3 y 5");
            break;
        case (numero % 3 === 0):
            alert("El número es divisible por 3");
            break;
        case (numero % 5 === 0):
            alert("El número es divisible por 5");
            break;
        default:
            alert("El número no es divisible ni por 3 ni por 5");
    }
}
