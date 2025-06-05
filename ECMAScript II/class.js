class cajafuerte {
    constructor(){
        this._dinero = 0;
    }

    depositar(cantidad) { this._dinero += cantidad }

    retirar(cantidad) {
        if(cantidad this._dinero){
            this._dinero -= cantidad;
            return cantidad;
        }
        return 0;
    }
}

class padre {
    caminar() {
        console.log("caminando...");
    }
}

class hijo extends padre {

}

let hijo = new hijo();
hijo.caminar();

//poliformismo

class forma {
    dibujar() {
        console.log("dibujando una forma generica");
    }
}

class circulo extends forma {
    dibujar() {
        console.log("dibujando un circulo");
    }
}

class cuadrado extends forma {
    dibujar() {
        console.log("dibujando un cuadrado");
    }
}





// abstración
class coche {
    constructor() {
        this._motorencendido = false;
    }

    encendermotor() {
        this._motorencendido = true;
        console.log("motor encendido");
    }

    apagarmotor() {
        this._motorencendido = false;
        console.log("motor apagado");
    }
}