const mongoose = require("mongoose");
const Student = require("./reto2_studentSchema");
const Mark = require("./reto2_markSchema");
const Subject = require("./reto2_subjectSchema");
const Teacher = require("./reto2_teacherSchema");

mongoose.connect("mongodb+srv://CarlosMarina:MarinaCarlos@cluster0.gqzypms.mongodb.net/Dia2Reto2", 
                {useNewUrlParser: false, useUnifiedTopology: false})

//PROFESORES
let teacher1 = new Teacher
({
    firstname:"Joaquín",
    lastname:"Robles",
    groups:["Full-time","Part-time tarde"],
});

let teacher2 = new Teacher
({
    firstname:"Francisco",
    lastname:"del Pino",
    groups:["Full-time","Remoto"],
});

let teacher3 = new Teacher
({
    firstname:"Adelaida",
    lastname:"Álamo",
    groups:["Remoto","Part-time mañana"],
});

//ASIGNATURAS
let asignatura1 = new Subject
({
    title:"Matemáticas",
    teachers:[teacher1,teacher2]
})

let asignatura2 = new Subject
({
    title:"Física",
    teachers:[teacher1,teacher3]
})

let asignatura3 = new Subject
({
    title:"Literatura",
    teachers:[teacher2,teacher3]
})

//NOTAS
let nota1 = new Mark
({
    date:2022-11-18,
    mark:8,
    subject:asignatura1
})

let nota2 = new Mark
({
    date:2022-11-20,
    mark:10,
    subject:asignatura2
})

let nota3 = new Mark
({
    date:2022-11-22,
    mark:4,
    subject:asignatura3
})

let nota4 = new Mark
({
    date:2022-11-18,
    mark:6,
    subject:asignatura1
})

let nota5 = new Mark
({
    date:2022-11-20,
    mark:5,
    subject:asignatura2
})

let nota6 = new Mark
({
    date:2022-11-22,
    mark:8,
    subject:asignatura3
})


let nota7 = new Mark
({
    date:2022-11-18,
    mark:7,
    subject:asignatura1
})

let nota8 = new Mark
({
    date:2022-11-20,
    mark:6,
    subject:asignatura2
})

let nota9 = new Mark
({
    date:2022-11-22,
    mark:9,
    subject:asignatura3
})


//ESTUDIANTES

let estudiante1 = new Student
({
    firstname: "Alfonso",
    lastname: "Perales",
    marks: [nota1,nota2,nota3]
})

let estudiante2 = new Student
({
    firstname: "María de las Mercedes",
    lastname: "Romero",
    marks: [nota4,nota5,nota6]
})

let estudiante3 = new Student
({
    firstname: "Olga",
    lastname: "Flores",
    marks: [nota7,nota8,nota9]
})

let estudiante4 = new Student
({
    firstname: "Agapito",
    lastname: "de la Rosa",
    marks: [nota8,nota9]
})

// Student.create(estudiante4)
// .then (()=>{
//     console.log("Estudiante creado");
// })
// .catch(()=>{
//     console.log("Error al escribir el documento");
// })

//Mostrar por consola todas las notas del alumno
Student.findOne({firstname:"María de las Mercedes"})
.then((items)=>{
    console.log("Datos de estudiante recuperados");
    console.log(items.marks);
})
.catch(()=>{
    console.log("Error");
})

//Mostrar por consola todos las asignaturas de un alumno.
Student.findOne({firstname:"Alfonso"})
.then((items)=>{
    console.log("Datos de estudiante recuperados");
    
    for (let i = 0; i < items.marks.length; i++) {
        console.log(items.marks[i].subject);
    }
})
.catch(()=>{
    console.log("Error");
})

// Mostrar por consola todos los profesores del alumno

Student.findOne({firstname:"Olga"})
.then((items)=>{
    console.log("Datos de estudiante recuperados");
    
    for (let i = 0; i < items.marks.length; i++) {
        console.log(items.marks[i].subject.teachers);
    }
})
.catch(()=>{
    console.log("Error");
})