// const {calcularTotal} = require("../index");

// describe("la funcion calcularTotal" , () => {
//     it("debe calcular el valor de una factura en un solo item", () => {
//         expect(
//             calcularTotal([{ name: "producto A", price: 10, quantity: 2}])
//         ).toEqual(20);
//     });

//     it("debe calcular el total en una factura con varios items", () => {
//         expect(
//             calcularTotal([
//                 {name: "producto A", price: 10, quantity: 2},
//                 {name: "producto B", price: 20, quantity: 3},
//                 {name: "producto C", price: 30, quantity: 4},
//             ])
//         ).toEqual(200);
//     });
//     it("debe arrojar un error 'factura invalida' en caso de recubir un arreglo vacio", () => {
//         expect(() => calcularTotal([])).toThrowError("factura invalida");
//     });
// });
