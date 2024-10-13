// 1. Números del 1 al 10 (for)
function mostrarNumeros() {
    let numeros = '';
    for (let i = 1; i <= 10; i++) {
        numeros += i + ' ';
    }
    alert(numeros);
}

// 2. Suma de números del 1 al 100 (while)
function sumarNumeros() {
    let suma = 0;
    let i = 1;
    while (i <= 100) {
        suma += i;
        i++;
    }
    alert("La suma de los números del 1 al 100 es: " + suma);
}

// 3. Tabla de multiplicar (for)
function mostrarTabla() {
    let numero = document.getElementById('numeroTabla').value;
    let tabla = '';
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(tabla);
}

// 4. Primeros 10 números pares (while)
function mostrarPares() {
    let pares = '';
    let i = 1;
    let contador = 0;
    while (contador < 10) {
        if (i % 2 === 0) {
            pares += i + ' ';
            contador++;
        }
        i++;
    }
    alert("Los primeros 10 números pares son: " + pares);
}

// 5. Números hasta negativo (do while)
function pedirNumeros() {
    let numero;
    let numeros = '';
    do {
        numero = parseInt(prompt("Ingresa un número (negativo para terminar):"));
        if (numero >= 0) {
            numeros += numero + ' ';
        }
    } while (numero >= 0);
    alert("Números ingresados: " + numeros);
}

// 6. Contar letras 'a' (for)
function contarLetras() {
    let palabra = document.getElementById('palabra').value;
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    alert(`La letra 'a' aparece ${contador} veces en la palabra.`);
}
