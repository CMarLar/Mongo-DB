//FRONT JS

//Clase
class Movie
{//Mete un primer actor y el resto con los botones de añadir actor
    constructor(title,releaseYear,nationality,actors,directors,writers,producer,genre,_id){
        this._id = _id
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.actors = [actors];
        this.directors = [directors];
        this.writers = [writers];
        this.producer = producer;
        this.genre = genre;
    }
}
///////////GET//////////////
function getMovie()
{
    let id = document.getElementById("id").value;

    if (id != "")
    {
        let url = "http://localhost:3000/peliculas?id=" + id;//indica a qué url se tiene que conectar

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
                <span style="font-weight: 500;">Título: </span><span>${result.title}</span>
                <br>
                <span style="font-weight: 500;">Año: </span><span>${result.releaseYear}</span>
                <br>
                <span style="font-weight: 500;">Nacionalidad: </span><span>${result.nationality}</span>
                <br>
                <span style="font-weight: 500;">Actores: </span><span>${result.actors}</span>
                <br>
                <span style="font-weight: 500;">Directores: </span><span>${result.directors}</span>
                <br>
                <span style="font-weight: 500;">Escritores: </span><span>${result.writers}</span>
                <br>
                <span style="font-weight: 500;">Productores: </span><span>${result.producer}</span>
                <br>
                <span style="font-weight: 500;">Género: </span><span>${result.genre}</span>
                <br>
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
            let url = "http://localhost:3000/peliculas"

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
            .then((result) =>{
                console.log(result);

                let shownData = document.getElementById('results')
                for (let i = 0; i < result.length; i++) {
                shownData.innerHTML += 
                `
                <span style="font-weight: 500;">ID: </span><span>${result[i]._id}</span>
                <br>
                <span style="font-weight: 500;">Título: </span><span>${result[i].title}</span>
                <br>
                <span style="font-weight: 500;">Año: </span><span>${result[i].releaseYear}</span>
                <br>
                <span style="font-weight: 500;">Nacionalidad: </span><span>${result[i].nationality}</span>
                <br>
                <span style="font-weight: 500;">Actores: </span><span>${result[i].actors}</span>
                <br>
                <span style="font-weight: 500;">Directores: </span><span>${result[i].directors}</span>
                <br>
                <span style="font-weight: 500;">Escritores: </span><span>${result[i].writers}</span>
                <br>
                <span style="font-weight: 500;">Productores: </span><span>${result[i].producer}</span>
                <br>
                <span style="font-weight: 500;">Género: </span><span>${result[i].genre}</span>
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

function getActors()
{
    let id = document.getElementById("id").value;

    if (id != ""){
        let url = "http://localhost:3000/peliculas/actor?id=" + id;

        let param = 
        {
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
                document.getElementById("results").innerHTML = "";
                document.getElementById("results").innerHTML += 
                `<span style="font-weight: 500;">Reparto: </span><br>`

                    for (let i = 0; i < result.length; i++) {
                    document.getElementById("results").innerHTML +=
                        `
                        <span>${result[i]}</span>
                        <br>
                        `
                    }
            }
            else
                showToast("ERROR: ha habido algún problema", "bg-warning")
        })
        .catch((error) =>
        {
            showToast("ERROR: la película con id: " +  id + " no existe", "bg-danger")
            console.log(error)
        })
    }else{
        showToast("Por favor, ingresa un id de película")
    }
}

function getDirectors()
{
    let id = document.getElementById("id").value;

    if (id != ""){
        let url = "http://localhost:3000/peliculas/director?id=" + id;

        let param = 
        {
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
                document.getElementById("results").innerHTML = "";
                document.getElementById("results").innerHTML += 
                `<span style="font-weight: 500;">Dirección: </span><br>`

                    for (let i = 0; i < result.length; i++) {
                    document.getElementById("results").innerHTML +=
                        `
                        <span>${result[i]}</span>
                        <br>
                        `
                    }
            }
            else
                showToast("ERROR: ha habido algún problema", "bg-warning")
        })
        .catch((error) =>
        {
            showToast("ERROR: la película con id: " +  id + " no existe", "bg-danger")
            console.log(error)
        })
    }else{
        showToast("Por favor, ingresa un id de película")
    }
}

function getWriters()
{
    let id = document.getElementById("id").value;

    if (id != ""){
        let url = "http://localhost:3000/peliculas/guionista?id=" + id;

        let param = 
        {
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
                document.getElementById("results").innerHTML = "";
                document.getElementById("results").innerHTML += 
                `<span style="font-weight: 500;">Guión: </span><br>`

                    for (let i = 0; i < result.length; i++) {
                    document.getElementById("results").innerHTML +=
                        `
                        <span>${result[i]}</span>
                        <br>
                        `
                    }
            }
            else
                showToast("ERROR: ha habido algún problema", "bg-warning")
        })
        .catch((error) =>
        {
            showToast("ERROR: la película con id: " +  id + " no existe", "bg-danger")
            console.log(error)
        })
    }else{
        showToast("Por favor, ingresa un id de película")
    }
}

function getProducers()
{
    let id = document.getElementById("id").value;

    if (id != ""){
        let url = "http://localhost:3000/peliculas/productora?id=" + id;

        let param = 
        {
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
            if (result)//en SQL HARÍAMOS result.length > 0 porque sql siempre devuelve un array de objetos, pero Mongo, no
            {
                console.log(result);
                document.getElementById("results").innerHTML = "";
                document.getElementById("results").innerHTML += 
                `<span style="font-weight: 500;">Productora: </span><span>${result}</span>`

            }
            else
                showToast("ERROR: ha habido algún problema", "bg-warning")
        })
        .catch((error) =>
        {
            showToast("ERROR: la película con id: " +  id + " no existe", "bg-danger")
            console.log(error)

        })
    }else{
        showToast("Por favor, ingresa un id de película")
    }
}





///////////POST//////////////

function postMovie()
{
    let newMovie = new Movie(
                                    document.getElementById("title").value,
                                    document.getElementById("releaseYear").value,
                                    document.getElementById("nationality").value,
                                    document.getElementById("actors").value,
                                    document.getElementById("directors").value,
                                    document.getElementById("writers").value,
                                    document.getElementById("producer").value,)
    
    const url = "http://localhost:3000/peliculas";

    if (validar(newMovie))
    {
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(newMovie),
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
                showToast("Profesional creado con id: " + result.insertId, "bg-success")//InsertId???

            console.log(result)
        })
        .catch((error) =>
        {
            showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
            console.log(error)
        })
    }
}

function postActor()
{
    let id = document.getElementById("id").value;
    let actors = document.getElementById("actors").value;

    let url = "http://localhost:3000/peliculas/actor";

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify({id: id, addActor: [actors]}),
        method: "POST"
    }
    fetch(url, param)
    .then((data) =>
    {
        console.log(data);
        return data.json()//SyntaxError: Unexpected end of JSON input
    })
    .then((result) =>
    {
        if (result == "-1")
            showToast("ERROR: Error al insertar el dato" , "bg-danger")
        else
            showToast("Profesional añadido: " + actors, "bg-success")//InsertId???

        console.log(result)
    })
    .catch((error) =>
    {
        showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
        console.log(error)
    })
}

function postDirector()
{
    let id = document.getElementById("id").value;
    let director = document.getElementById("directors").value;

    let url = "http://localhost:3000/peliculas/director";

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify({id: id, addDirector: [director]}),
        method: "POST"
    }
    fetch(url, param)
    .then((data) =>
    {
        console.log(data);
        return data.json()//SyntaxError: Unexpected end of JSON input
    })
    .then((result) =>
    {
        if (result == "-1")
            showToast("ERROR: Error al insertar el dato" , "bg-danger")
        else
            showToast("Profesional añadido: " + director, "bg-success")//InsertId???

        console.log(result)
    })
    .catch((error) =>
    {
        showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
        console.log(error)
    })
}

function postWriter()
{
    let id = document.getElementById("id").value;
    let writer = document.getElementById("writers").value;

    let url = "http://localhost:3000/peliculas/guionista";

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify({id: id, addWriter: [writer]}),
        method: "POST"
    }
    fetch(url, param)
    .then((data) =>
    {
        console.log(data);
        return data.json()//SyntaxError: Unexpected end of JSON input -> no estaba coincidiendo id con id ni addActor con lo que se pide del body
    })
    .then((result) =>
    {
        if (result == "-1")
            showToast("ERROR: Error al insertar el dato" , "bg-danger")
        else
            showToast("Profesional añadido: " + writer, "bg-success")//InsertId???

        console.log(result)
    })
    .catch((error) =>
    {
        showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
        console.log(error)
    })
}


///////////PUT//////////////
function putMovie() {
    let _id = document.getElementById("id").value;
    let title = document.getElementById("title").value;
    let releaseYear = document.getElementById("releaseYear").value;
    let nationality = document.getElementById("nationality").value;
    let actors = document.getElementById("actors").value;
    let directors = document.getElementById("directors").value;
    let writers = document.getElementById("writers").value;
    let producer = document.getElementById("producer").value;
    let genre = document.getElementById("genre").value;

    // El siguiente código se mete para evitar que los campos vacíos se queden con el valor que tenían antes, en lugar de pasar a null.
    let newMovie = {_id}

    if(title != ''){
        newMovie.title = title;
    }
    if(releaseYear != ''){
        newMovie.releaseYear = releaseYear;
    }
    if(nationality != ''){
        newMovie.nationality = nationality;
    }
    if(actors != ''){
        newMovie.actors = actors;
    }
    if(directors != ''){
        newMovie.directors = directors;
    }
    if(writers != ''){
        newMovie.writers = writers;
    }
    if(producer != ''){
        newMovie.producer = producer;
    }
    if(genre != ''){
        newMovie.genre = genre;
    }
    
    
    let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
        method: "PUT",
        body: JSON.stringify(newMovie)
    };
    
    let url = "http://localhost:3000/peliculas"//si lo pedimos por el body, en teoría no necesitamos ?id="+ id en la url
    
    if (_id != "") {
        fetch(url, param)
        .then((data) => {
        return data.json();
        })
        .then((data) => {
        console.log(data);
        showToast("Película modificada", "bg-success")
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
function deleteMovie() {
    let _id = document.getElementById("id").value;

    let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
    method: "DELETE",
    body: JSON.stringify({_id: _id})
    };

    let url = "http://localhost:3000/peliculas"

    if (_id) {
        // professionals.splice(id,1);//borramos con splice el elemento igual al id.
        fetch(url,param)
        .then((data) =>{
        return data.json()
        })
        .then((data) => {
        console.log(data);
        showToast("Película eliminada", "bg-success")
        })
        .catch((error) => {
        console.log(error);
        showToast("Error", "bg-danger")
        })
    } else {
        showToast("Rellena el campo ID","bg-warning");
    }
}

function deleteActor() {
    let id = document.getElementById("id").value;
    let actor = document.getElementById("actors").value

    let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
    method: "DELETE",
    body: JSON.stringify({id: id, removeActor: actor})
    };

    let url = "http://localhost:3000/peliculas/actor"

    if (id != "") {
        fetch(url,param)
        .then((data) =>{
        return data.json()
        })
        .then((data) => {
        console.log(data);
        showToast("Profesional elminado", "bg-success")
        })
        .catch((error) => {
        console.log(error);
        showToast("Error", "bg-danger")
        })
    } else {
        showToast("Rellena el campo ID","bg-warning");
    }
}

function deleteDirector() {
    let id = document.getElementById("id").value;
    let director = document.getElementById("directors").value

    let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
    method: "DELETE",
    body: JSON.stringify({id: id, removeDirector: director})
    };

    let url = "http://localhost:3000/peliculas/director"

    if (id != "") {
        fetch(url,param)
        .then((data) =>{
        return data.json()
        })
        .then((data) => {
        console.log(data);
        showToast("Profesional elminado", "bg-success")
        })
        .catch((error) => {
        console.log(error);
        showToast("Error", "bg-danger")
        })
    } else {
        showToast("Rellena el campo ID","bg-warning");
    }
}

function deleteWriter() {
    let id = document.getElementById("id").value;
    let writers = document.getElementById("writers").value

    let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
    method: "DELETE",
    body: JSON.stringify({id: id, removeWriter: writers})
    };

    let url = "http://localhost:3000/peliculas/guionista"

    if (id != "") {
        fetch(url,param)
        .then((data) =>{
        return data.json()
        })
        .then((data) => {
        console.log(data);
        showToast("Profesional elminado", "bg-success")
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
