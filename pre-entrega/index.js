import { ApiProductos } from "./ApiProductos.js";

function procesarArgumentos() {
    // Obtener argumentos de la terminal, omitir los dos primeros, que son node y la ruta a este script
    const [, , metodo, recurso, ...parametrosAdicionales] = process.argv;
    const [nombreRecurso, idRecurso] = recurso?.split('/');

    const metodosSoportados = ['GET', 'POST', 'DELETE'];
    const recursosDisponibles = ['products'];

    if (!metodo || !recurso) {
        throw new Error(`Se requiere método (${metodosSoportados.join(', ')}) y recurso.`);
    }

    if (!metodosSoportados.includes(metodo)) {
        throw new Error(`El método ${metodo} no es válido. Utilice uno de los siguientes: ${metodosSoportados.join(', ')}`);
    }

    if (!recursosDisponibles.includes(nombreRecurso)) {
        throw new Error(`El recurso ${nombreRecurso} no está disponible. Utilice uno de los siguientes: ${recursosDisponibles.join(', ')}`);
    }

    return { metodo, parametrosAdicionales, nombreRecurso, idRecurso }
}

let argumentos;
try {
    argumentos = procesarArgumentos();
} catch (error) {
    console.error('Argumentos incorrectos:', error.message);
    process.exit(1);
}

let resultado;
try {
    const { metodo, nombreRecurso, idRecurso, parametrosAdicionales } = argumentos;

    const api = new ApiProductos();

    // Tenemos operaciones que no necesariamente requieren un ID, así que las categorizamos así
    const operacion = [metodo, nombreRecurso].join(' ');

    switch (operacion) {
        case 'GET products': {
            resultado = await api.obtener(idRecurso);
            break;
        }
        case 'POST products': {
            const [title = '', price = '', category = ''] = parametrosAdicionales;
            resultado = await api.crear({ title, price, category });
            break;
        }
        case 'DELETE products': {
            resultado = await api.eliminar(idRecurso);
            break;
        }
        default:
            // Con las validaciones previas no deberíamos caer acá
            console.error(`Operación no soportada: ${operacion}`);
            process.exit(3);
    }
} catch (error) {
    console.error(`Error al intentar realizar la operación: ${error.message}`);
    process.exit(2);
}

console.log(resultado);
process.exit(0);
