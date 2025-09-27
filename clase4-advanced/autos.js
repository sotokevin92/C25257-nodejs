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
