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

// Funciones auxiliares
function obtenerParametros(recurso) {
    if (recurso === 'products') {
        const [title, price, category] = parametros;

        if (!title || !price || !category) {
            throw new Error('Los parámetros son incorrectos. Se requieren title, price y category.')
        }

        if (Number.isNaN(price) || price <= 0) {
            throw new Error('El precio ingresado no es válido.');
        }

        return {
            title,
            price: Number(price),
            category,
        }
    }
}

async function peticionApi(metodo = 'GET', url, body) {
    let result;
    try {
        result = await fetch(`https://fakestoreapi.com${url}`, {
            method: metodo,
            headers: {
                'Content-Type': 'application/json'
            },
            body: body ? JSON.stringify(body) : null
        });
    } catch (error) {
        throw new Error(`Error durante la petición a la API de FakeStore: ${error.message}`);
    }

    if (!result.ok) {
        throw new Error('La petición a la API de FakeStore no es válida.');
    }

    try {
        return await result.json();
    } catch (error) {
        throw new Error('No se pudo interpretar la respuesta de la API. Es probable que el contenido solicitado no esté disponible.');
    }
}

async function obtenerProductos() {
    return await peticionApi('GET', '/products');
}

async function obtenerProducto(id) {
    return await peticionApi('GET', `/products/${id}`);
}

async function crearProducto({ title, price, category }) {
    return await peticionApi('POST', '/products', {
        title,
        price,
        category,
    });
}

async function eliminarProducto(id) {
    return await peticionApi('DELETE', `/products/${id}`);
}

// Programa principal

// Tenemos operaciones que no necesariamente requieren un ID, así que las categorizamos así
const operacion = [metodo, nombreRecurso].join(' ');

// La semántica dicta que esto es un string, pero lo estamos asignando al resultado de las consultas
let salida;

// Envolver en try-catch para capturar excepciones
try {
    switch (operacion) {
        case 'GET products': {
            // El ID es opcional en esta operación
            if (idRecurso) {
                salida = await obtenerProducto(idRecurso);
                break;
            }

            salida = await obtenerProductos();
            break;
        }
        case 'POST products': {
            const parametros = obtenerParametros('products');
            salida = await crearProducto(parametros);
            break;
        }
        case 'DELETE products': {
            // El ID es obligatorio en esta operación
            if (!idRecurso) {
                console.error('Se requiere un ID para eliminar un producto.');
                process.exit(1);
            }

            salida = await eliminarProducto(idRecurso);
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
