const express = require('express')
const router = express.Router()
const controladorUsuario = require('../controllers/usuarios')

router.route("/")
    .get(controladorUsuario.getUsuarios)

module.exports = router;