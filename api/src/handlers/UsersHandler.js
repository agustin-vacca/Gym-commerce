const { getUser, createUser } = require("../controllers/UserController");

const getUsersHandler = async (req, res) => {
  try {
    const all = await getUser();
    res.status(200).send(all);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postUsersHandler = async (req, res) => {
  try {
    const { name, email } = req.body;
    const all = await createUser(name, email);
    res.status(201).send("User creado exitosamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsersHandler,
  postUsersHandler,
};
