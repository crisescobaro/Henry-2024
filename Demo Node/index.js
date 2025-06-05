const Repository = require("./models")

const repository = new Repository();

repository.createActivity("alemania", "campeon del mundo");
repository.createActivity("pasear es bueno", "para la salud");
repository.createActivity("estar con paloma es", "culiar todos los dias");
console.log(repository.getAllActivities());

