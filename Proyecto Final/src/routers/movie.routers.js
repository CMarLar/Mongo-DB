const {Router} = require('express');
const router = Router();
const movieCtrl = require("../controller/movie.controller");

//GET
router.get('/peliculas', movieCtrl.getMovie);//Obtiene los datos de la película con el id pasado u Obtiene toda la lista de peliculas.
router.get("/peliculas/actor", movieCtrl.getActors);//Devuelve los datos relativos a los actores de la película con ese id.
router.get("/peliculas/director", movieCtrl.getDirectors);//Devuelve los datos relativos a los directores de la película con ese id.
router.get("/peliculas/guionista", movieCtrl.getWriters);
router.get("/peliculas/productora", movieCtrl.getProducer);


//POST
router.post('/peliculas', movieCtrl.postMovie);//Añade una nueva película.
router.post("/peliculas/actor", movieCtrl.postActor);//Añade un nuevo actor a una película pasada por id.
router.post("/peliculas/director", movieCtrl.postDirector);//Añade un nuevo director a una película pasada por id.
router.post("/peliculas/guionista", movieCtrl.postWriter);//Añade un nuevo guionista a una película pasada por id.


//PUT
router.put('/peliculas', movieCtrl.putMovie);//Modifica los datos de una película.


//DELETE
router.delete('/peliculas', movieCtrl.deleteMovie);//Elimina una película.
router.delete('/peliculas/actor', movieCtrl.deleteActor);//Elimina un actor.
router.delete('/peliculas/director', movieCtrl.deleteDirector);//Elimina un actor.
router.delete('/peliculas/guionista', movieCtrl.deleteWriter);//Elimina un actor.

module.exports = router;