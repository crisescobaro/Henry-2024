const persona = {
    nombre: "Cristian",
    amigos: ["posada", "angel"],
    
    saludar: function() {
        console("hola soy", this.nombre);
    },

    despedirse: () => {
        console.log("me despido", this.nombre)
    }
};
persona.nombre();
persona.despedirse()
