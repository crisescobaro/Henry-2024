const validateUser = (req, res , next) => {
    const { name } = req.body;

    if(!name) {
       return res.status(400).json({
        error: "falta el dato del nombre", 
       });
    } else {
     next()
    }
};

module.exports = validateUser;