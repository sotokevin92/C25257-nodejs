import express from 'express';
import cors from 'cors';
import personasController from "./routes/personas.routes.js";

const PORT = 3000;

const app = express();

app.use(cors({
    origin: 'http://localhost:8080'
}));

app.use(express.json());

// Middleware para manejar errores
const noEncontrado = (err, req, res, next) => {
    if (err.message.includes('no encontrad')) {
        res.status(404);
    }

    res.json({
        error: err.message
    });

    return next(err);
}

const router = express.Router();

app.use('/personas', personasController(router));
app.use((_req, _res) => {
    throw new Error('Ruta no encontrada');
});

app.use(noEncontrado);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
