const ProModel = require("../model/professional");

function getProfessionals(request, response)
{
    if(request.query.id == null){
        ProModel.find({})//vacío para mostrar todos los profesionales
        .then((professional) =>{
            console.log(professional);
            response.send(professional);
        })
        .catch((err) =>{
            console.log(err);
            // process.exit(-1);//Si hay un error, se sale del servidor.
        })
    }else{
        console.log(request.query.id);
        ProModel.findById(request.query.id)
        .then((professional)=>{
            console.log(professional);
            response.send(professional);
        })
        .catch((err) =>{
            console.log(err);
            // process.exit(-1)
        })
    }
}

function postProfessionals(request,response)
{
    console.log(request.body);

    let newProfessional = new ProModel
    ({
        name:request.body.name,
        nationality:request.body.nationality,
        profession:request.body.profession,
    })
    newProfessional.save()

    .then((professional)=>{
        console.log("Nuevo profesional");
        console.log(professional);
        response.send(professional)
    })
    .catch((err) =>{
        console.log(err);
    })
}

function putProfessionals(request,response)
{
    console.log(request.body);

    ProModel.findOneAndUpdate
    //({campo que se se pide},{campo que se va a modificar})
    ({_id:request.body._id},
    {name:request.body.name,nationality:request.body.nationality,profession:request.body.profession})//cierra paréntesis de findByIDAndUpdate
    
    .then((professional)=>{
        console.log("Profesional actualizado");
        response.send(professional)
    })
    .catch((err) =>{
        console.log(err);
    })
}

function deleteProfessional(request,response)
{
    //NOTA: sin cambiar nada, en los primeros test borraba a un profesional aleatorio, no al pedido por el id. Después, ha funcionado correctamente.
    ProModel.deleteOne({_id: request.body._id})
    .then((professional)=>{
        console.log("El profesional " + request.body.id + " ha sido eliminado");
        response.send(professional)
    })
    .catch((err) =>{
        console.log(err);
    })

}


module.exports = {getProfessionals,postProfessionals,putProfessionals,deleteProfessional}