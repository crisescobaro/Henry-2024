const userController = (req, res) => {
    res.status(200).send("estamos recibiendo una solicitud de datos para usuarios");
};

const postController = (req, res) => {
    res.status(200).send("estamos enviando info sobre este post")
}

module.exports = {
    userController,
    postController
};