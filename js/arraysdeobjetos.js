const personas = [
    { nombre: 'Roberto', edad: 28 },
    { nombre: 'María', edad: 35 },
    { nombre: 'Esteban', edad: 19 }
];

function mostrarNombresPersonas() {
    personas.forEach(persona => {
        console.log('Nombre: ' + persona.nombre);
    });
}

const coches = [
    { marca: 'Mazda', modelo: 'CX-5' },
    { marca: 'Nissan', modelo: 'Altima' },
    { marca: 'BMW', modelo: 'X5' },
    { marca: 'Audi', modelo: 'A4' },
    { marca: 'Mercedes', modelo: 'C-Class' }
];

function mostrarModelosCoches() {
    coches.forEach(coche => {
        console.log('Modelo: ' + coche.modelo);
    });
}

const productos = [
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Smartphone', precio: 500 },
    { nombre: 'Teclado Mecánico', precio: 120 },
    { nombre: 'Impresora', precio: 150 },
    { nombre: 'Router', precio: 80 }
];

function mostrarProductosCaros() {
    productos.forEach(producto => {
        if (producto.precio > 100) {
            console.log('Producto: ' + producto.nombre + ', Precio: ' + producto.precio);
        }
    });
}

const alumnos = [
    { nombre: 'Andrea', nota: 90 },
    { nombre: 'Raúl', nota: 50 },
    { nombre: 'Fernando', nota: 65 },
    { nombre: 'Carla', nota: 85 },
    { nombre: 'Valeria', nota: 40 }
];

function mostrarAlumnosAprobados() {
    alumnos.forEach(alumno => {
        if (alumno.nota >= 60) {
            console.log('Alumno: ' + alumno.nombre + ', Nota: ' + alumno.nota);
        }
    });
}

const libros = [
    { titulo: 'El Alquimista', autor: 'Paulo Coelho' },
    { titulo: '1984', autor: 'George Orwell' },
    { titulo: 'Crónica de una muerte anunciada', autor: 'Gabriel García Márquez' },
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien' }
];

function mostrarTitulosLibros() {
    libros.forEach(libro => {
        console.log('Título: ' + libro.titulo);
    });
}

const peliculas = [
    { titulo: 'Avatar', director: 'James Cameron', año: 2009 },
    { titulo: 'Interstellar', director: 'Christopher Nolan', año: 2014 },
    { titulo: 'Gladiador', director: 'Ridley Scott', año: 2000 },
    { titulo: 'Titanic', director: 'James Cameron', año: 1997 }
];

function mostrarDescripcionesPeliculas() {
    peliculas.forEach(pelicula => {
        console.log(`Película: ${pelicula.titulo}, Director: ${pelicula.director}, Año: ${pelicula.año}`);
    });
}
