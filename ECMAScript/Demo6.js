// function sumar(a, b){
//     const suma = a + b;
//     return suma;
// }
// console.log(sumar(2,2));


function sumar(...numeros){
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    return suma;
}
console.log(sumar(7,7,7,7,7,10));
