import express from 'express';

const PORT = 3000;

const app = express();

app.get('/ping', (_req, res) => {
    return res.send('/pong');
});
const noEncontrado = (_req, res) => {
    return res.json({
        mensaje: 'No se encontró el recurso solicitado'
    });
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

app.use(noEncontrado);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
