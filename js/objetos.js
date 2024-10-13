// 1. Objeto Persona
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    mostrarPropiedades: function() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Ciudad: ${this.ciudad}`);
    }
};

function mostrarPersona() {
    persona.mostrarPropiedades();
}

// 2. Objeto Coche
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2021,
    mostrarDescripcion: function() {
        console.log(`Coche: ${this.marca} ${this.modelo}, Año: ${this.año}`);
    }
};

function mostrarCoche() {
    coche.mostrarDescripcion();
}

// 3. Objeto Rectángulo
const rectangulo = {
    ancho: 5,
    alto: 10,
    calcularArea: function() {
        return this.ancho * this.alto;
    }
};

function calcularArea() {
    const area = rectangulo.calcularArea();
    console.log(`Área del rectángulo: ${area}`);
}

// 4. Objeto Libro
const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    año: 1943,
    mostrarDescripcion: function() {
        console.log(`Libro: "${this.titulo}" de ${this.autor}, Año: ${this.año}`);
    }
};

function mostrarLibro() {
    libro.mostrarDescripcion();
}

// 5. Objeto Usuario
const usuario = {
    nombre: "Pedro",
    contrasena: "123456",
    verificarContrasena: function() {
        if (this.contrasena === "123456") {
            console.log("Contraseña correcta.");
        } else {
            console.log("Contraseña incorrecta.");
        }
    }
};

function verificarContrasena() {
    usuario.verificarContrasena();
}

// 6. Objeto Gato
const gato = {
    nombre: "Miau",
    edad: 2,
    mostrarEdad: function() {
        console.log(`El gato ${this.nombre} tiene ${this.edad} años.`);
    }
};

function mostrarGato() {
    gato.mostrarEdad();
}
