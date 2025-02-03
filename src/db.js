import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jorgecutruzzola:jcut1245@cluster0.rmhgc.mongodb.net/Adoptme?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Conectado correctamente a la db"))
.catch( error => console.log("Error al conectar", error));


