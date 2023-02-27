const express = require('express');
const db = require('./utils/database');
const ToDo = require('./models/todos.model');
const toDoRoutes = require('./routes/toDo.routes');
const cors = require('cors');


const PORT = 8000;

db.authenticate()
    .then( () => {
        console.log('Conexion a la base de datos ok');
    })
    .catch( (error) => { 
        console.log(error)
    });

db.sync()
    .then( () => {
        console.log('Base de datos sincronizada');
    })
    .catch( (error) => { 
        console.log(error)
    });

const app = express();

app.use(cors());

app.use(express.json());

app.use(toDoRoutes);

app.get('/', (req,res) => {
    res.send('Bienvenido a mi servidor')
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});

