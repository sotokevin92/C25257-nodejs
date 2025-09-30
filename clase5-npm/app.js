// Usar destructuración de arrays para omitir los primeros dos elementos
// y asignar a comando y valor los siguientes desde process.argv
const [,,comando, valor] = process.argv;

// Este objeto tiene como claves las opciones posibles para {comando}
// y se invocará con {valor} como primer parámetro siempre
const ejecutar = {
    'GET': () => {
        console.log('Toma un dato.');
    },
    'POST': valor => {
        if (!valor) {
            console.error('Se requiere un valor');
            return;
        }

        console.log(`Recibimos ${valor} satisfactoriamente.`);
    },
    'PUT': id => {
        if (!id) {
            console.error('Se requiere un ID');
            return;
        }

        console.log(`Modificamos el item ${id} correctamente.`);
    },
    'DELETE': id => {
        if (!id) {
            console.error('Se requiere un ID');
            return;
        }

        console.log(`El item ${id} se eliminó con éxito.`);
    },
}

// Si el valor recibido en {comando} está entre las claves del objeto, invocar la función con su parámetro {valor}
if (ejecutar[comando]) {
    ejecutar[comando](valor);
    process.exit();
}

console.warn(`Comando ${comando} no soportado.`, `Por favor, use GET, POST, PUT o DELETE.`);
process.exit(1);
