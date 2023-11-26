const express = require('express');
const {connectDb} = require('./src/utils/database')
const routerStudent = require('./src/api/routes/student.routes')
const app = express();

app.use(express.json());

app.use("/student", routerStudent)

const PORT = 5052;
app.listen(PORT, () => {
    console.log("escuchando por el puerto " + PORT);
});