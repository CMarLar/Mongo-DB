//FRONT JS


//Clase
class Professional
{
    constructor(name,nationality,profession,_id){
        this._id = _id
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
    }
}



///////////GET//////////////
function getProfessionals()
{
    let id = document.getElementById("id").value;

    if (id != "")
    {
        let url = "http://localhost:3000/profesionales?id=" + id;//indica a qué url se tiene que conectar

        let param = 
        {//indica método y lo que queremos enviar al endpoint
            headers: {"Content-type": "application/json; charset= UTF-8"},
            method: "GET"
        }
        fetch(url, param)
        .then((data) =>
        {
            return data.json()
        })
        .then((result) =>
        {    
            console.log(result);  
            if (result)//en SQL HARÍAMOS result.length > 0 porque sql siempre devuelve un array de objetos, pero Mongo, no
            {
                document.getElementById("results").innerHTML =
                `
                <span style="font-weight: 500;">ID: </span><span>${result._id}</span>
                <br>
                <span style="font-weight: 500;">Nombre: </span><span>${result.name}</span>
                <br>
                <span style="font-weight: 500;">Apellido: </span><span>${result.nationality}</span>
                <br>
                <span style="font-weight: 500;">Fecha de Ingreso: </span><span>${result.profession}</span>
                <br>
                `
            }
            else
                showToast("ERROR: ha habido algún problema")

        })
        .catch((error) =>
        {
            showToast("ERROR: el actor con id: " +  id + " no existe", "bg-danger")
            console.log(error)
        })
    }
    else
        {
            let url = "http://localhost:3000/profesionales"

            let param = 
            {//indica método y lo que queremos enviar al endpoin
                headers: {"Content-type": "application/json; charset= UTF-8"},
                method: "GET"
            }
            fetch(url, param)
            .then((data) =>
            {
                return data.json()
            })
            .then((result) =>{
                console.log(result);

                let shownData = document.getElementById('results')
                for (let i = 0; i < result.length; i++) {
                shownData.innerHTML += 
                `
                <span style="font-weight: 500;">ID: </span><span>${result[i]._id}</span>
                <br>
                <span style="font-weight: 500;">Nombre: </span><span>${result[i].name}</span>
                <br>
                <span style="font-weight: 500;">Apellido: </span><span>${result[i].nationality}</span>
                <br>
                <span style="font-weight: 500;">Fecha de Ingreso: </span><span>${result[i].profession}</span>
                <br>
                <br>
                `
                }
            })
            .catch((error) =>
            {
                showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
                console.log(error)
            })
            //showToast("AVISO: Campo id no informado", "bg-warning")
        }
}

///////////POST//////////////
function postProfessionals()
{
    let newProfessional = new Professional(document.getElementById("name").value,
                        document.getElementById("nationality").value,
                        document.getElementById("profession").value)
    
    const url = "http://localhost:3000/profesionales";


    if (validar(newProfessional))
    {
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(newProfessional),
                method: "POST"
            }

        fetch(url, param)
        .then((data) =>
        {
            return data.json()
        })
        .then((result) =>
        {
            if (result == "-1")
                showToast("ERROR: Error al insertar el dato" , "bg-danger")
            else
                showToast("Profesional creado con id: " + result.insertId, "bg-success")//¿Cuál sería la forma de acceder al result?

            console.log(result)
        })
        .catch((error) =>
        {
            showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
            console.log(error)
        })
    }
}

///////////PUT//////////////
function putProfessionals() {
    let _id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let nationality = document.getElementById("nationality").value;
    let profession = document.getElementById("profession").value;

    // El siguiente código se mete para evitar que los campos vacíos se queden con el valor que tenían antes, en lugar de pasar a null.
    let newProfessional = {_id}

    if(name != ''){
        newProfessional.name = name;
    }
    if(nationality != ''){
        newProfessional.nationality = nationality;
    }
    if(profession != ''){
        newProfessional.profession = profession;
    }
    
    let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
        method: "PUT",
        body: JSON.stringify(newProfessional)//Luego stringificas el newProfessional.
    };
    
    let url = "http://localhost:3000/profesionales"//si lo pedimos por el body, en teoría no necesitamos ?id="+ id en la url
    
    if (_id != "") {
        fetch(url, param)
        .then((data) => {
        return data.json();
        })
        .then((data) => {
        console.log(data);
        showToast("Profesional modificado", "bg-success")
        })
        .catch((error) => {
        console.log(error);
        showToast("Error", "bg-danger")
        })
    
        } else {
        showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger");
        }
    }
    
///////////DELETE//////////////
    function deleteProfessionals() {
        let _id = document.getElementById("id").value;

        let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
        method: "DELETE",
        body: JSON.stringify({_id: _id})
        };
    
        let url = "http://localhost:3000/profesionales"
    
        if (_id) {
            // professionals.splice(id,1);//borramos con splice el elemento igual al id.
            fetch(url,param)
            .then((data) =>{
            return data.json()
            })
            .then((data) => {
            console.log(data);
            showToast("Profesional eliminado", "bg-success")
            })
            .catch((error) => {
            console.log(error);
            showToast("Error", "bg-danger")
            })
        } else {
            showToast("Rellena el campo ID","bg-warning");
        }
    }



//Funciones de validación y Toast:

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}

function validar(newStudent)
{
    resultado = false
    if (newStudent.first_name == "" || newStudent.first_name == "null")
    {
        showToast("AVISO: Campo 'Nombre' no informado", "bg-warning")
    }
    else if (newStudent.last_name == "" || newStudent.last_name == "null")
    {
        showToast("AVISO: Campo 'Apellido' no informado", "bg-warning")
    }
    else if (newStudent.date == "" || newStudent.date == "null")
    {
        showToast("AVISO: Campo 'Fecha de Ingreso' no informado", "bg-warning")
    }
    else if (newStudent.group_id == "" || newStudent.group_id == "null")
    {
        showToast("AVISO: Campo 'ID de Grupo' no informado", "bg-warning")
    }
    else
        resultado = true

    return resultado;
}




