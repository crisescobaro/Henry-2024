const usersService = require("../servicies/usersService");

module.exports = {
getAllusers: async (req, res) => {

    try {
        const users = await usersService.getUsers();
        res.status(200).json(users); 
      } catch (error) {
        res.status(500).json({
            error: "Error interno del servidor",
        });
      }
 },

 createUser: async (req, res) => {
  const { name } = req.body;
  try {
    await usersService.createUser(name);
    res.status(201).json({
      message: "usuario creado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      error: "error al crear usuario",
    });
  }
 }
};