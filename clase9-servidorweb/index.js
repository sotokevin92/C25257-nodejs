import express from 'express';
const PORT = 3000;

const app = express();

app.get('/ping', (_req, res) => {
    return res.send('/pong');
});

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
