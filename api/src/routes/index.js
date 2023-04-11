const { Router } = require('express');
const  rProductos = require("./rProductos")
const  rUsuarios = require("./rUsuarios")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/usuarios", rUsuarios);
router.use("/productos", rProductos);

module.exports = router;
