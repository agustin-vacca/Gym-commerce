//const {Op} = require("sequelize");

const getUsersHandler = async(req,res) => {
    try {
        res.status(200).send("GET USERS");
    } catch (error) {
        res.status(400).json( {error: error.message} );
    }
};

const postUsersHandler = async (req,res) => {
    try {
        res.status(201).send("Post USERS");
    } catch (error) {
        res.status(400).json( {error: error.message });
    }
}

module.exports = {
    getUsersHandler,
    postUsersHandler
}