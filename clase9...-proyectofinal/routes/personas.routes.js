import {getPersona, getPersonas} from "../controllers/personas.controller.js";

export default (router) => {
    router.get('/', (req, res) => {
        return getPersonas(req, res);
    });

    router.get('/:id', (req, res) => {
        return getPersona(req, res);
    });

    return router;
}
