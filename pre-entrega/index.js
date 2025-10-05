import { ApiProductos } from "./ApiProductos.js";

// Obtener argumentos de la terminal
const [, , metodo, recurso, ...parametros] = process.argv;
const [nombreRecurso, idRecurso] = recurso?.split('/');

const metodosSoportados = ['GET', 'POST', 'DELETE'];
const recursosDisponibles = ['products'];

// Fallos inmediatos
if (!metodo && !recurso) {
    console.error('¡Uso incorrecto! Se requiere método (GET, POST, DELETE) y recurso.');
    process.exit(1);
}

if (!metodosSoportados.includes(metodo)) {
    console.error(`El método ${metodo} no es válido. Utilice uno de los siguientes: ${metodosSoportados.join(', ')}`);
    process.exit(1);
}

if (!recursosDisponibles.includes(nombreRecurso)) {
    console.error(`El recurso ${nombreRecurso} no está disponible. Utilice uno de los siguientes: ${recursosDisponibles.join(', ')}`);
    process.exit(1);
}

// Programa principal

const api = new ApiProductos();

// Tenemos operaciones que no necesariamente requieren un ID, así que las categorizamos así
const operacion = [metodo, nombreRecurso].join(' ');

// La semántica dicta que esto es un string, pero lo estamos asignando al resultado de las consultas
let salida;

// Envolver en try-catch para capturar excepciones
try {
    switch (operacion) {
        case 'GET products': {
            salida = await api.obtener(idRecurso);
            break;
        }
        case 'POST products': {
            const [title, price, category] = parametros;
            salida = await api.crear({ title, price, category });
            break;
        }
        case 'DELETE products': {
            salida = await api.eliminar(idRecurso);
            break;
        }
        default:
            // Con las validaciones previas no deberíamos caer acá
            console.error(`Operación no soportada: ${operacion}`);
            process.exit(2);
    }
} catch (error) {
    console.error(`Error al intentar realizar la operación: ${error.message}`);
    process.exit(1);
}

console.log(salida);
process.exit(0);
