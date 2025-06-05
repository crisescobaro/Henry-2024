// este es un test que voy hacer para una prueba 
// ya llegue a la clase de testing

describe("este es mi primer grupo de test", () => {
it("el numero 999 debe ser igual al numero 999", () => {
  expect(999).toEqual(999);
});
});


const filtrar = (arr) => arr.filter((num) => num % 2 == 0);

describe("la funcion filtrar", () => {
  it("debe estar definida", () => {
    expect(filtrar).toBeDefined();
  });

  it("debe retornar un array", () => {
    expect(Array.isArray(filtrar([1, 2, 3, 4, 5, 6]))).toBe(true);
  });
  
  it("debe retornar los numeros pares", () => {
    expect(filtrar([1, 2, 3, 4])).toEqual([2, 4]);
    expect(filtrar([2, 4, 6])).toEqual([2, 4, 6]);
    expect(filtrar([1, 3, 5, 7, 9])).toEqual([]);
    expect(filtrar([])).toEqual([]);
  });
});

// este es otro test mas \\

it("yo espero que dos palabras iguales sean iguales", () => {
  expect("Escobar").toBe("Escobar");
  expect("Cristian").toBe("Cristian");
});

// otro test mas \\

it("yo espero que dos arrays sean iguales a dos arrays", () => {
  expect([1,2,3]).toEqual([1,2,3]);
});

///\\\

it("yo espero que dos objetos sean iguales a dos objetos", () => {
  expect({nombre: "Cris" }).toEqual({nombre: "Cris" });
});


// const sumar = (a, b) => a + b;

// describe("la funcion sumar", () => {
//   expect(sumar).toBeDefined();
// });

// it("se debe sumar dos numeros enviados como argumentos", () => {
//   expect(5).toBe(5);
//   expect(10).toBe(10);
// });