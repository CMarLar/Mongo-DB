const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://CarlosMarina:MarinaCarlos@cluster0.gqzypms.mongodb.net/Dia4API", 
                {useNewUrlParser: false, useUnifiedTopology: false})

.then((db) => {
    console.log("Database connected on " + db.connection.host);
})
.catch((err) =>{
    console.log(err);
})