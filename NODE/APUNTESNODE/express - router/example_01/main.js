const express = require('express');
const app = express();

app.use(express.json());

const routerMovies = express.Router()

routerMovies.get("/movieTitle/:Title", (req, res)=>{
    const movieTitle = req.params.title
    res.json({
        msg : "pelicula",
        data : title
    })
})
routerStudents.post("/studentRegister", (req, res)=>{
    const body = req.body;
    res.json({
        data : body
    })
})


app.use("/", routerStudents)

const PORT = 5051;
app.listen(PORT, ()=>{
    console.log('escuchando por el puerto' + PORT);
})
