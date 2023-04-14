const { Router } = require('express');
const express = require('express');

const MachinesRoutes = Router();

//Importo los handlers con la logica de las rutas
const { getMachinesHandler,postMachinesHandler } = require('../handlers/MachinesHandler')

MachinesRoutes.get('/', getMachinesHandler);
MachinesRoutes.post('/create', postMachinesHandler);


module.exports = MachinesRoutes;