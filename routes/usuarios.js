const express = require('express')
const router = express.Router()
const controladorUsuario = require('../controllers/usuarios')

router.route("/")
    .get(controladorUsuario.getUsuarios)
    .post(controladorUsuario.postUsuarios)


router.route("/:id")
    .get(controladorUsuario.getUsuarioPorId)
    .delete(controladorUsuario.deleteUsuario)
    .put(controladorUsuario.putUsuario);

module.exports = router;