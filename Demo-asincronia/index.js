const axios = require("axios");

// const promise = axios.get("https://students-api.1.us-1.fl0.io/movies");
// console.log(promise);

// promise
// .then((res) => {
//     console.log(res.data);
// })
// .catch((err) => {
//     console.log("tuvimos un error");
//     console.log(err);
// });

// console.log("se termino todo");


const fetchMovies = async () => {
    try {
        console.log("estamos por intentar un par de acciones");
        const data = await axios.get("https://students-api.1.us-1.fl0.io/movies");
        console.log(data.data);
        console.log("ha finalizado con exito");
    } catch (err) {
        console.log("tuvimos un error estamos en el bloque catch");
        console.log(err.message);
    }
};
fetchMovies();

