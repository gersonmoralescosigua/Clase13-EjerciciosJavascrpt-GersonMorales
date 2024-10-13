// 1. Declarar tres variables para nombre, edad y ciudad
function mostrarDatosPersona() {
    let nombre = "Juan";
    let edad = 25;
    let ciudad = "Guatemala";
    console.log(`Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`);
}

// 2. Mostrar el valor de pi
function mostrarPi() {
    const pi = 3.1416;
    console.log(`El valor de Pi es: ${pi}`);
}

// 3. Mostrar un número y un string juntos en la consola
function mostrarNumeroString() {
    let numero = 10;
    let texto = "es mi número favorito.";
    console.log(`${numero} ${texto}`);
}

// 4. Almacenar la multiplicación de dos números y mostrar el resultado
function mostrarMultiplicacion() {
    let num1 = 5;
    let num2 = 7;
    let resultado = num1 * num2;
    console.log(`El resultado de la multiplicación es: ${resultado}`);
}

// 5. Pedir la edad del usuario y mostrar un mensaje
function mostrarEdad() {
    let edad = document.getElementById('edadUsuario').value;
    alert(`Tienes ${edad} años`);
}

// 6. Declarar dos variables con nombre y apellido y mostrar el nombre completo
function mostrarNombreCompleto() {
    let nombre = "Juan";
    let apellido = "Pérez";
    console.log(`Nombre completo: ${nombre} ${apellido}`);
}
