const axios = require("axios");

console.log(axios.get("https://students-api.1.us-1.fl0.io/movies"));


axios.post("https://students-api.1.us-1.fl0.io/movies", {
title: "lo que el mueco mordio",
year: "xxxx"
});

axios.put("URL", {});

axios.delet("URL");