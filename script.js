/*
DOM= Dcument Objetc Model modelo objeto del documento
Objeto en JS, por lo tanto va a tener propiedades y comportamientos asociados.
Atributos y funciones (métodos)
Es en forma más sencilla una variable en JS que va a traer una abtracción de mi documento de HTML
*/

const nombre = "Dani";
const edad = 23;
//tipo de cajon
const scoobyDoo = {
    raza: "Gran danés",
    noPatas: 4,
    puedeHablar: true,
    color: "café con manchas",
}

scoobyDoo.color = "café con manchas negras";

//alert('Hola Mundo')
console.log("hola mundo", nombre)
//document.write("hola mundo")

let titulo = document.getElementById('titulo');
console.log(titulo);

let objetoDeLaBibliotecaTypewriter = new Typewriter(titulo, {
    loop: true
});

objetoDeLaBibliotecaTypewriter.typeString('Daniela Rangel')    
    .deleteChars(14)
    .pauseFor(500)
    .typeString('Desarrollo Web')
    .pauseFor(500)
    .deleteChars(14)
    .start();