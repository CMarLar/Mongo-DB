const MovieModel = require("../model/movie");

//GET//

function getMovie(request, response)
{
    if(request.query.id == null){
        MovieModel.find({})//vacío para mostrar TODAS las películas
        .then((movies) =>{
            console.log(movies);
            response.send(movies);
        })
        .catch((err) =>{
            console.log(err);
            // process.exit(-1);//Si hay un error, se sale del servidor.
        })
    }else{
        //en Postman hay que meterlo así:  /photos?username=Carlos
                                        // /photos?username=Carlos&title=Titulo
        console.log(request.query.id);
        MovieModel.findById(request.query.id)
        .then((movie)=>{
            console.log(movie);
            response.send(movie);
        })
        .catch((err) =>{
            console.log(err);
            // process.exit(-1)
        })
    }
}

function getActors(request,response)
{
    console.log(request.query.id);
    MovieModel.findById(request.query.id)
    .then((movie)=>{
        console.log(movie.actors);
        response.send(movie.actors);
    })
    .catch((err) =>{
        console.log(err);
        // process.exit(-1)
    })
}

function getDirectors(request,response)
{
    console.log(request.query.id);
    MovieModel.findById(request.query.id)
    .then((movie)=>{
        console.log(movie.directors);
        response.send(movie.directors);
    })
    .catch((err) =>{
        console.log(err);
        // process.exit(-1)
    })
}

function getWriters(request,response)
{
    console.log(request.query.id);
    MovieModel.findById(request.query.id)
    .then((movie)=>{
        console.log(movie.writers);
        response.send(movie.writers);
    })
    .catch((err) =>{
        console.log(err);
        // process.exit(-1)
    })
}



function getProducer(request,response)
{
    let comillas = `"`
    console.log(request.query.id);
    MovieModel.findById(request.query.id)
    .then((movie)=>{
        console.log(movie.producer);
        response.send(`${comillas}${movie.producer}${comillas}`);//HE HECHO ESTA GUARRERÍA PARA QUE LO META COMO JSON, ME MUERO!!
    })
    .catch((err) =>{
        console.log(err);
        // process.exit(-1)
    })
}

//POST//
function postMovie (request,response)
{
    console.log(request.body);

    let newMovie = new MovieModel
    ({
        title:request.body.title,
        releaseYear:request.body.releaseYear,
        nationality:request.body.nationality,
        actors:request.body.actors,
        directors:request.body.directors,
        writers:request.body.writers,
        producer:request.body.producer,
        genre:request.body.genre
    })
    newMovie.save()

    .then((movie)=>{
        console.log("Nueva película: ");
        console.log(movie);
        response.send(movie)
    })
    .catch((err) =>{
        console.log(err);
    })
}

function postActor (request,response)
{
    console.log(request.body);
    MovieModel.findByIdAndUpdate(request.body.id,{$push: {actors: request.body.addActor}})    
    .then((movie)=>{
        console.log("Actor o actriz añadido");
        response.send(movie)
    })
    .catch((err) =>{
        console.log(err);
    })
}

function postDirector (request,response)
{
    console.log(request.body);
    MovieModel.findByIdAndUpdate(request.body.id,{$push: {directors: request.body.addDirector}})    
    .then((movie)=>{
        console.log("Director o directora añadido");
        response.send(movie)
    })
    .catch((err) =>{
        console.log(err);
    })
}

function postWriter (request,response)
{
    console.log(request.body);
    MovieModel.findByIdAndUpdate(request.body.id,{$push: {writers: request.body.addWriter}})    
    .then((movie)=>{
        console.log("Guionista añadido");
        response.send(movie)
    })
    .catch((err) =>{
        console.log(err);
    })
}




//PUT//
function putMovie(request,response)
{
    console.log(request.body);


    MovieModel.findOneAndUpdate
    //({campo que se se pide},{campo que se va a modificar})
    ({_id:request.body._id},
        {title:request.body.title,
        releaseYear:request.body.releaseYear,
        nationality:request.body.nationality,
        actors:request.body.actors,
        directors:request.body.directors,
        writers:request.body.writers,
        producer:request.body.producer,
        genre:request.body.genre})//cierra paréntesis de findByIDAndUpdate
    
    .then((movie)=>{
        console.log("Película actualizada");
        response.send(movie)
    })
    .catch((err) =>{
        console.log(err);
    })
}



//DELETE//
function deleteMovie(request,response)
{
    //NOTA: sin cambiar nada, en los primeros test borraba a un profesional aleatorio, no al pedido por el id. Después, ha funcionado correctamente.
    MovieModel.deleteOne({_id: request.body._id})//con _ para que se llame igual que el id que produce Mongo por cada documento.
    .then((movie)=>{
        console.log("Película " + request.body.id + " eliminada");
        response.send(movie)
    })
    .catch((err) =>{
        console.log(err);
    })
}

function deleteActor (request,response)
{
    console.log(request.body);
    MovieModel.findByIdAndUpdate(request.body.id,{$pullAll: {actors: [request.body.removeActor]}})    
    .then((movie)=>{
        console.log("Actor o actriz eliminado");
        response.send(movie)
    })
    .catch((err) =>{
        console.log(err);
    })
}

function deleteDirector (request,response)
{
    console.log(request.body);
    MovieModel.findByIdAndUpdate(request.body.id,{$pullAll: {directors: [request.body.removeDirector]}})    
    .then((movie)=>{
        console.log("Director o directora elminado");
        response.send(movie)
    })
    .catch((err) =>{
        console.log(err);
    })
}

function deleteWriter (request,response)
{
    console.log(request.body);
    MovieModel.findByIdAndUpdate(request.body.id,{$pullAll: {writers: [request.body.removeWriter]}})    
    .then((movie)=>{
        console.log("Director o directora elminado");
        response.send(movie)
    })
    .catch((err) =>{
        console.log(err);
    })
}



module.exports = {getMovie,postMovie,putMovie,deleteMovie,
                  getActors,getDirectors,getWriters,getProducer,
                  postActor,postDirector,postWriter,
                  deleteActor,deleteDirector,deleteWriter}