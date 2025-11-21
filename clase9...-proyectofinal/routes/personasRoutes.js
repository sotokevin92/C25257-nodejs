import {getPersona, getPersonas} from "../controllers/personasController.js";

export default (router) => {
    router.get('/', (req, res) => {
        return getPersonas(req, res);
    });

    router.get('/:id', (req, res) => {
        return getPersona(req, res);
    });

    return router;
}
