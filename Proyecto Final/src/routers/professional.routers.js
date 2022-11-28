const {Router} = require('express');
const router = Router();
const proCtrl = require("../controller/professional.controller");


router.get('/profesionales', proCtrl.getProfessionals);//Obtiene los datos del profesional con el id pasado u Obtiene toda la lista de profesionales.

router.post('/profesionales', proCtrl.postProfessionals);//Añade un nuevo profesional en la lista de profesionales.

router.put('/profesionales', proCtrl.putProfessionals);//Modifica los datos de un profesional.

router.delete('/profesionales', proCtrl.deleteProfessional);//Elimina a un profesional de la lista.

module.exports = router;