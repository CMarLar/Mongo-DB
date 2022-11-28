const mongoose = require("mongoose");
//CAMBIA LA CONEXIÓN//
mongoose.connect("mongodb+srv://CarlosMarina:MarinaCarlos@cluster0.gqzypms.mongodb.net/API_FINAL", 
                {useNewUrlParser: false, useUnifiedTopology: false})

.then((db) => {
    console.log("Database connected on " + db.connection.host);
})
.catch((err) =>{
    console.log(err);
})