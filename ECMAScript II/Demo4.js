// class persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.amigos = [];
//         this.sentado = true;
//     }

//     agregaramigos(nombreamigo){
//         this.amigos.push(nombreamigo);
//     }

//     pararse() {
//         this.sentado = false;
//     }

//     sentarse() {
//         this.sentado = true;
//     }
// }

// const persona1 = new persona("Escobar", 19);
// console.log(persona1);
// persona.agregaramigos("posada");
// persona.agregaramigos("angel");

// console.log(persona1);

// persona1.pararse();

// console.log(persona1);

// persona1.sentarse(persona1);

// console.log(persona1);


// class superheroe {
//    constructor(nombre, identidad, superpoder){
//     this.nombre = nombre;
//         this.superpoder = superpoder;
//         this.identidad = identidad;
//    } 
// }

// class superheroe {
//     constructor(nombre, identidad, superheroe) {
//         this.nombre = nombre;
//         this.superpoder = superpoder;
//         this.identidad = identidad
//     }
// }

// let superman = superheroe("superman", "clark ken", ["volar", "fuerza"])


// class superheroe {
//     constructor(nombre, identidad, superpoder) {
//         this.nombre = nombre;
//         this.superpoder = superpoder;
//         this.identidad = identidad;
//     }

//     volar() {
//         console.log("mi nombre es" , this.nombre)
//     }
// }

// let superman = new superheroe("superman", "clark ken", ["volar", "fuerza"])
// superman.volar();


// class superHeroe {
//     constructor(Nombre, Identidad, Superpoder) {
//         this.Nombre = Nombre;
//         this.Superpoder = Superpoder;
//         this.Identidad = Identidad;
//     }

//     volar() {
//         console.log("mi nombre es" , this.Nombre);
//     }
// }

// let Superman = new superHeroe("superman", "clark ken", ["volar", "fuerza"])
// Superman.volar();







// clase Padre
class persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.amigos = [];
        this.sentado = true;
    }

    agregaramigos(nombreamigo){
        this.amigos.push(nombreamigo);
    }

    pararse() {
        this.sentado = false;
    }

    sentarse() {
        this.sentado = true;
    }
}

class doctor extends persona {
    constructor(nombre, edad, matricula) {
        super(nombre, edad);
        this.nmatricula = matricula;
    }
}

const doctor1 = new doctor("chapatin", 32, 999999);

console.log(doctor1);

doctor1.agregaramigos("pedro");

console.log(doctor1);

