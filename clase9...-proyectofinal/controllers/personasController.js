import {
    getPersonaById,
    getPersonas as getPersonasFromService,
    getPersonasByAge as getPersonasByAgeFromService
} from "../services/personasService.js";

export const getPersonas = (req, res) => {
    let { edadMinima, edadMaxima } = req.query;

    if (!edadMinima && !edadMaxima) {
        return res.json(
            getPersonasFromService()
        );
    }

    if (isNaN(edadMinima) || edadMinima <= 0) {
        return res.json({
            error: 'edadMinima debe ser mayor a cero.'
        });
    }

    if (isNaN(edadMaxima) || edadMaxima <= 0) {
        return res.json({
            error: 'edadMaxima debe ser mayor a cero.'
        });
    }

    return res.json(
        getPersonasByAgeFromService(Number(edadMinima), Number(edadMaxima))
    );
};

export const getPersona = (req, res) => {
    const persona = getPersonaById(req.params.id);

    if (!persona) {
        throw new Error('Persona no encontrada');
    }

    return res.json(persona);
};
