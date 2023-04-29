const {
  getProducts,
  deleteUser,
  deleteProduct,
} = require("../controllers/AdminControllers");

const getAdmin = async (req, res) => {
  try {
    const { name } = req.query;
    let all = await getProducts(name);
    res.status(200).json(all);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteAdmin = async (req, res) => {
  const { direction, id } = req.params;
  const { isactive } = req.query;
  console.log("query", req.query);
  console.log("params", req.params);
  try {
    if (direction === "product") {
      const deleteproduct = await deleteProduct(id, isactive);
      console.log("product");
      return res.status(200).json(deleteproduct);
    }
    if (direction === "user") {
      const deleteuser = await deleteUser(id, isactive);
      console.log("user");
      return res.status(200).json(deleteuser);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAdmin,
  deleteAdmin,
};
