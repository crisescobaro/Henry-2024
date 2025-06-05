const {calcularTotal} = require("../index");

const mockGetItems = jest.fn(() => {
    return [
        {name: "producto A", price: 10, quantity: 2},
        {name: "producto B", price: 5, quantity: 3},
    ];
});


describe("en la funcion calcularTotal", () => {
    it("la funcion 'GetItems' que paso como parametro debe ejecutarse al menos una vez", () => {
        calcularTotal(mockGetItems);
        expect(mockGetItems).toHaveBeenCalled();
    });
});