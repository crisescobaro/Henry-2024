const { log } = require("console");
const fs = require("fs");

fs.readFile("./mi_archivo.txt", "utf-8", (err, data) => {
    if(err) console.log(err);
    else console.log(data);
});