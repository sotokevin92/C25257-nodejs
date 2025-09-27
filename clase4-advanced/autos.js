class Auto {
    constructor(marca, modelo, anio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }
}

const flota = [
    new Auto('Ford', 'Focus', 2015, 'Blanco'),
    new Auto('Toyota', 'Corolla', 2023, 'Gris'),
    new Auto('Volkswagen', 'Golf', 2018, 'Negro'),
    new Auto('Honda', 'Civic', 2024, 'Rojo'),
    new Auto('Chevrolet', 'Onix', 2012, 'Azul'),
    new Auto('Nissan', 'Sentra', 2020, 'Plata'),
    new Auto('Hyundai', 'Elantra', 2025, 'Verde'),
    new Auto('Kia', 'Cerato', 2013, 'Negro'),
    new Auto('Mazda', '3', 2022, 'Blanco'),
    new Auto('Renault', 'Logan', 2017, 'Gris')
];

console.log('Listando autos del 2019 en adelante:');
flota.filter(auto => auto.anio > 2018)
    .forEach(auto => console.log(
        `${auto.marca} ${auto.modelo} (${auto.anio}) color ${auto.color}`
    ));

console.log();
console.log('Conteos por color:');

function contarColor(unColor) {
    const conteo = flota.filter(auto => {
        const { color } = auto;
        return color.toUpperCase() === unColor.toUpperCase();
    }).length;

    console.log(`Hay ${conteo} automóviles de color ${unColor.toLowerCase()}.`);
}

// Esta es una forma efectiva de extraer valores únicos en un array...
const coloresDisponibles = [];
flota.forEach(auto => {
    const { color } = auto;
    // ...chequear si existe, y si no...
    if (!coloresDisponibles.includes(color)) {
        // ...agregarlo a la lista.
        coloresDisponibles.push(color);
    }
});

/*
Hay una mejor forma, porque siempre hay una mejor forma...

const coloresDisponibles = [...new Set(flota.map(auto => auto.color))];

Fundamentalmente porque Set maneja búsquedas en O(1) porque internamente usa un mapa de valores,
mientras que los arrays son valores indizados, y cualquier búsqueda es O(n).

Pero no se me ocurrió hasta después de resolver el ejercicio :)
*/

coloresDisponibles.forEach(color => contarColor(color));
coloresDisponibles.forEach(contarColor);
