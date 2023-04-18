const { Router } = require("express");
const ProductsRoutes = require("./ProductsRoutes");
const CategoryRoutes = require("./CategoryRoutes");
const UserRoutes = require("./UserRoutes");
const Mercadopago = require("./mercadoPago");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/categorias", CategoryRoutes);
router.use("/productos", ProductsRoutes);
router.use("/usuarios", UserRoutes);
router.use("/mercadoPago", Mercadopago);

module.exports = router;
