import express from 'express';

const PORT = 3000;

const app = express();

app.get('/ping', (_req, res) => {
    return res.send('/pong');
});

app.get('/pagina', (_req, res) => {
    res.header('Content-Type', 'text/html');
    return res.send(`
<html lang="es">
  <body>
    <h1>Hola Express!</h1>
    <p>Esto es un HTML regulinchis.</p>
  </body>
</html>
    `);
});

app.get('/datos', (_req, res) => {
    const nombres = [
        { id: 1, name: 'Ana' },
        { id: 2, name: 'Carlos' },
        { id: 3, name: 'María' },
        { id: 4, name: 'Juan' },
        { id: 5, name: 'Sofia' },
        { id: 6, name: 'Pedro' },
        { id: 7, name: 'Laura' },
        { id: 8, name: 'Miguel' },
        { id: 9, name: 'Isabel' },
        { id: 10, name: 'Diego' },
        { id: 11, name: 'Carmen' },
        { id: 12, name: 'Luis' },
        { id: 13, name: 'Elena' },
        { id: 14, name: 'Pablo' },
        { id: 15, name: 'Lucía' },
        { id: 16, name: 'Roberto' },
        { id: 17, name: 'Patricia' },
        { id: 18, name: 'Fernando' },
        { id: 19, name: 'Daniela' },
        { id: 20, name: 'Javier' }
    ];
    return res.json(nombres);
})


app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
