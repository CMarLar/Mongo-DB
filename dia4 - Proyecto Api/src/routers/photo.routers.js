const {Router} = require('express');
const router = Router();//¿Qué es Router()? Es una extensión de las rutas de la aplicación
const photoCtrl = require("../controller/photo.controller");


router.get('/photos', photoCtrl.getPhoto);

router.post('/photos', photoCtrl.postPhoto);

router.put('/photos', photoCtrl.putPhoto);

router.delete('/photos', photoCtrl.deletePhoto);

module.exports = router;