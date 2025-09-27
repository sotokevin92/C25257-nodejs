const precios = [
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100
];
const porcentajeIva = 21;

precios.forEach(
    precio => console.log(precio * (1 + porcentajeIva / 100))
);
