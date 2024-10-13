// 1. Función para sumar dos números
function suma() {
    let num1 = Number(prompt("Ingrese el primer número"));
    let num2 = Number(prompt("Ingrese el segundo número"));
    let resultado = num1 + num2;
    document.getElementById('resultado1').innerText = `El resultado de la suma es: ${resultado}`;
}

// 2. Función para mostrar un saludo personalizado
function saludo() {
    let nombre = prompt("Ingrese su nombre");
    console.log(`¡Hola, ${nombre}!`);
}

// 3. Función para calcular el área de un círculo
function areaCirculo() {
    let diametro = Number(prompt("Ingrese el diámetro del círculo"));
    let radio = diametro / 2;
    let area = Math.PI * Math.pow(radio, 2);
    document.getElementById('resultado2').innerText = `El área del círculo es: ${area.toFixed(2)}`;
}

// 4. Función para determinar el mayor de dos números
function mayorNumero() {
    let num1 = Number(prompt("Ingrese el primer número"));
    let num2 = Number(prompt("Ingrese el segundo número"));
    let mayor = num1 > num2 ? num1 : num2;
    document.getElementById('resultado3').innerText = `El mayor número es: ${mayor}`;
}

// 5. Función para comprobar si un número es par o impar
function esPar() {
    let num = Number(prompt("Ingrese un número"));
    let esPar = num % 2 === 0;
    document.getElementById('resultado4').innerText = esPar ? `${num} es par.` : `${num} es impar.`;
}

// 6. Función para calcular el promedio de un array de números
function calcularPromedio() {
    let input = prompt("Ingrese números separados por comas");
    let numeros = input.split(',').map(Number);
    let suma = numeros.reduce((acc, num) => acc + num, 0);
    let promedio = suma / numeros.length;
    document.getElementById('resultado5').innerText = `El promedio es: ${promedio.toFixed(2)}`;
}
