const PostUserMailer = require("../NodeMailer/PostUserMailer");
const { Usuario } = require("../db");

const {
  getUser,
  createUser,
  getUserById,
  adminUserById
} = require("../controllers/UserController");

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
    const { name, given_name, family_name, email, email_verified, picture, sub, admin} = req.body;
    await createUser(name, given_name, family_name, email, email_verified, picture, sub, admin);
    await PostUserMailer(name, given_name, family_name, email, email_verified, picture, sub);
    res.status(201).send("User creado exitosamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const AdminUserHandler = async (req,res) => {
//   try {
//     const { id } = req.params;
//     const { admin } = req.body
//     adminUserById(id, admin);
//     res.status(200).send("El usuario fue admitido como administrador");
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

const AdminUserHandler = async (req,res) => {
  try {
    const { id } = req.params;
    const user = await Usuario.findByPk(id);

    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }

    if (user.admin === false)
      user.admin = true;
    else 
      user.admin = false

    await user.save()

    res.status(200).send("El usuario fue admitido como administrador");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsersHandler,
  postUsersHandler,
  getUserHandler,
  AdminUserHandler
};
