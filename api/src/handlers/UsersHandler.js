const { getUser, createUser, getUserById } = require("../controllers/UserController");

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
    const { full_name, email, password, country, phone } = req.body;
    const all = await createUser(full_name, email, password, country, phone);
    res.status(201).send("User creado exitosamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserHandler = async (req,res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getUsersHandler,
  postUsersHandler,
  getUserHandler
};
