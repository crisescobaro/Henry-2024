// function persona(nombre, edad){
//     this.nombre = nombre;
//     this.edad = edad;
    
// }

// const persona1 = new persona("Escobar", 19);
// console.log(persona1);

function persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    
}

persona.prototype.saludar = function () {
    console.log("hola soy", this.nombre);
};

const persona1 = new persona("Escobar", 19);
console.log(persona1);
persona1.saludar;
