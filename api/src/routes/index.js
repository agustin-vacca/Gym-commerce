const { Router } = require("express");
const app = require("../app");

const UsersRoutes = require("./UsersRoutes");
const MachinesRoutes = require("./MachinesRoutes");

const router = Router();

router.use('/users', UsersRoutes);
router.use('/machines', MachinesRoutes)

module.exports = router;

