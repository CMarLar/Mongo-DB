const mongoose = require ("mongoose");
let Mark = require ("./markSchema");
let Teacher = require ("./teacherSchema");

mongoose.connect("mongodb+srv://CarlosMarina:MarinaCarlos@cluster0.gqzypms.mongodb.net/Dia3Reto1", 
                {useNewUrlParser: false, useUnifiedTopology: false})

/*
Suponemos que solo hay una nota por alumno y asignatura.

Crear una colección en MongoDB con este esquema y añadirle mínimo 10 documentos
combinando todos los casos posibles usando mongoose.
*/

///RELLENANDO TABLAS///

//DECLARANDO PROFESORES
let profe1 = new Teacher
({
    teacher_first_name: "José",
    teacher_last_name: "Herrera"
})

let profe2 = new Teacher
({
    teacher_first_name: "Menchu",
    teacher_last_name: "Martín"
})

let profe3 = new Teacher
({
    teacher_first_name: "José Carlos",
    teacher_last_name: "Torres"
})

let profe4 = new Teacher
({
    teacher_first_name: "Luisa",
    teacher_last_name: "Molina"
})

//DECLARANDO NOTAS

let nota1 = new Mark
({
    date:'2022-11-11',
    mark:10,
    student_first_name: "Ofelia",
    student_last_name: "del Lago",
    group_name: "Full-time",
    subject_name: "Bases de datos relacionales",
    teachers:[profe1,profe2]
})

let nota2 = new Mark
({
    date:'2022-11-12',
    mark:10,
    student_first_name: "Arturo",
    student_last_name: "Pendragón",
    group_name: "Full-time",
    subject_name: "Bases de datos relacionales",
    teachers:[profe1,profe2]
})

let nota3 = new Mark
({
    date:'2022-11-13',
    mark:10,
    student_first_name: "Uther",
    student_last_name: "Pendragón",
    group_name: "Part-time mañana",
    subject_name: "Lengua y literatura",
    teachers:[profe1,profe2]
})

let nota4 = new Mark
({
    date:'2022-11-14',
    mark:10,
    student_first_name: "Ginebra",
    student_last_name: "Camelliard",
    group_name: "Part-time tarde",
    subject_name: "Música",
    teachers:[profe2,profe3]
})

let nota5 = new Mark
({
    date:'2022-11-15',
    mark:8,
    student_first_name: "Lancelot",
    student_last_name: "du Lac",
    group_name: "Part-time tarde",
    subject_name: "Maquetación",
    teachers:[profe2,profe3]
})

let nota6 = new Mark
({
    date:'2022-11-16',
    mark:7,
    student_first_name: "Morgana",
    student_last_name: "Pendragón",
    group_name: "Part-time mañana",
    subject_name: "Maquetación",
    teachers:[profe2,profe3]
})

let nota7 = new Mark
({
    date:'2022-11-17',
    mark:3,
    student_first_name: "Gorlois",
    student_last_name: "Cornualles",
    group_name: "Full-time",
    subject_name: "Matemáticas",
    teachers:[profe3,profe4]
})

let nota8 = new Mark
({
    date:'2022-11-18',
    mark:4,
    student_first_name: "Arturo",
    student_last_name: "Pendragón",
    group_name: "Full-time",
    subject_name: "Matemáticas",
    teachers:[profe3,profe4]
})

let nota9 = new Mark
({
    date:'2022-11-19',
    mark:5,
    student_first_name: "Uther",
    student_last_name: "Pendragón",
    group_name: "Part-time mañana",
    subject_name: "Matemáticas",
    teachers:[profe3,profe4]
})

let nota10 = new Mark
({
    date:'2022-11-20',
    mark:10,
    student_first_name: "Ofelia",
    student_last_name: "del Lago",
    group_name: "Full-time",
    subject_name: "Matemáticas",
    teachers:[profe3,profe4]
})
// //Rellenando tabla:
// Mark.insertMany([nota1,nota2,nota3,nota4])
// .then (()=>{
//     console.log("Documentos guardados");
// })
// .catch((err)=>{
//     console.log(err);
// })

/// OPERACIONES ///

//Calcular la nota media de los alumnos de una asignatura concreta.

// Mark.aggregate([{$match: {subject_name: "Matemáticas"}},
//                 {$group: {"_id": null, "Nota media": {"$avg": "$mark"}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos.

// Mark.aggregate([{$count: "Numero de alumnos"}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })



//Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos.

// Mark.aggregate([{$project:{_id: 0, student_first_name: 1, student_last_name: 1}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })



//Listar el nombre y los apellidos de todos los profesores incluyendo repetidos.


// Mark.aggregate([{$unwind: "$teachers"},
//                 {$project:{_id: 0, teachers: 1}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//id?




//Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.

// Mark.aggregate([{$group: {"_id": {"Nombre del grupo" : "$group_name"}, "Número de alumnos": {"$sum": 1}}},{"$sort": {"Order": -1}}])// hay que utilizar sum porque es un operador lógico dentro de una etapa. DONDE ESTÁ "Número de alumnos", no pongas "_id"
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })



//Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5.

// Mark.aggregate([{$group: {"_id": "$subject_name", "Media":{"$avg": "$mark"}}},{$match: {"Media":{"$gt": 5}}},{"$sort": {"Media": -1}},{$limit: 5}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos.

// Mark.aggregate([{$unwind:"$teachers"},{$group:{"_id":{"Asignatura":"$subject_name"},"Nº de profesores":{"$sum":1}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//Obtén el nombre, apellido y la nota de los alumnos que tengan una nota mayor de 8 o la nota tenga fecha del año pasado o anterior.

// Mark.aggregate([{$project:{"student_first_name": 1, "student_last_name": 1, "mark":1, "_id": 0}},{$match: {"$or":[{"mark": {"$gt":8}},{"date": {"$lte":"2021-12-12"}}]}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//Obtén la media de las notas que se han dado en el último año por asignatura.

//$ SE REFIERE AL VALOR DE LA COLUMNA

// Mark.aggregate([{$match:{"date":{"$gte": new Date("2021-12-12")}}},{$group: {"_id": {"Asignatura": "$subject_name"}, "Media":{"$avg": "$mark"}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//Obtén la media aritmética de las notas que se han dado en el último año por nombre de alumno.

// Mark.aggregate([{$match:{"date":{"$gte": new Date("2021-12-12")}}},{$group: {"_id": {"Alumnos": "$student_first_name"}, "Media":{"$avg": "$mark"}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno cuyo profesor sea uno que elijáis.
Mark.aggregate([{$unwind:"$teachers"},
                {$project:{"student_first_name": 1, "student_last_name": 1, "subject_name":1, "teachers": 1, "_id": 0}},
                {$match:{"teachers.teacher_first_name": "José"}}])

                //https://stackoverflow.com/questions/61381569/mongodb-aggregation-query-optimization-match-unwind-match-vs-unwind-mat
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})