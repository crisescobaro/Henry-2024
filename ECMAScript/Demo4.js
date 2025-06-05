
// function mostrarnombre(persona){
//     const {nombre, apellido } = persona
//         console.log("el nombre del usuario es", nombre, "y su apellido es", apellido);
    
// }

// const persona = { 
//     nombre: "Felipe",
//     apellido: "Escobar",
//     edad: 19,
//     email: "fescobar673@email.com",
//     direccion: "calle falsa 321",
//     cuidad: "toro",
//     pais: "colombia",
// }
// mostrarnombre(persona);

// const myarray = [1,2,3,4];

// const [num1, num2, num3, num4] = myarray;

// const palabras = ["hola","jorge","calle falsa 123", "email674.com"];

// const saludo = [saludo, nombre, direccion, correo] = palabras;

function crearpersona ({nombre, apellido, edad}){
    console.log(nombre, apellido, edad);
}
crearpersona({nombre: "Escobar", apellido: "Ordoñez", edad: 19});