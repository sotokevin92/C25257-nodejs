const precios = [
    5500,
    200,
    8500,
    4000,
    5300,
    4100,
    3200,
    5400,
    2300,
    2449.99
];

const porcentajeIva = 21;

precios.forEach(
    precio => {
        const precioFinal = precio * (1 + porcentajeIva / 100);

        console.log(`El precio es $${precioFinal.toFixed(2)}.- IVA incluido.`);
    }
);
