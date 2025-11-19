import express from 'express';
import cors from 'cors';

const PORT = 3000;

const app = express();

app.use(cors({
    origin: 'http://localhost:8080'
}));

app.use(express.json());

const noEncontrado = (_req, res) => {
    return res.json({
        mensaje: 'No se encontró el recurso solicitado'
    });
}

const personas = [
    {id: 1, name: 'Ana', age: 15},
    {id: 2, name: 'Carlos', age: 22},
    {id: 3, name: 'María', age: 18},
    {id: 4, name: 'Juan', age: 35},
    {id: 5, name: 'Sofia', age: 19},
    {id: 6, name: 'Pedro', age: 52},
    {id: 7, name: 'Laura', age: 31},
    {id: 8, name: 'Miguel', age: 38},
    {id: 9, name: 'Isabel', age: 27},
    {id: 10, name: 'Diego', age: 42},
    {id: 11, name: 'Carmen', age: 18},
    {id: 12, name: 'Luis', age: 29},
    {id: 13, name: 'Elena', age: 33},
    {id: 14, name: 'Pablo', age: 41},
    {id: 15, name: 'Lucía', age: 24},
    {id: 16, name: 'Roberto', age: 48},
    {id: 17, name: 'Patricia', age: 36},
    {id: 18, name: 'Fernando', age: 39},
    {id: 19, name: 'Daniela', age: 22},
    {id: 20, name: 'Javier', age: 44}
];

app.get('/personas', (req, res) => {
    let { edadMinima, edadMaxima } = req.query;

    if (isNaN(edadMinima) || edadMinima <= 0) {
        edadMinima = 0;
    }

    if (isNaN(edadMaxima) || edadMaxima <= 0) {
        edadMaxima = Infinity;
    }
    
    return res.json(personas.filter(
        p => p.age >= edadMinima && p.age <= edadMaxima
    ));
});

app.get('/personas/:id', (req, res) => {
    const { id } = req.params;
    const persona = personas.find(p => p.id === Number(id));

    if (!persona) {
        return noEncontrado(req, res);
    }

    return res.json(persona);
});

app.use(noEncontrado);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
