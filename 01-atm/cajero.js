const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const datosCliente = {
    pin: '1234',
    saldo: 0
}

const demoraMensaje = 500;

console.log('¡Bienvenidx al banco!');

let intentos = 3;
function ingresarPin() {
    rl.question('Ingrese su PIN: ', (pin) => {
        if (pin === datosCliente.pin) {
            console.log('¡Acceso correcto!');
            console.log();
            setTimeout(principal, demoraMensaje);
            return;
        }

        intentos--;
        console.log(`PIN incorrecto. Queda ${intentos} intento${intentos > 1 ? 's' : ''}.`);

        if (intentos > 0) {
            ingresarPin();
            return;
        }

        rl.close();
    });
}

function principal() {
        rl.question(`Selecciones una operación:
    1. Consultar saldo
    2. Depositar
    3. Retirar
    4. Salir
    
Ingrese: `, (option) => {
        console.log();
        switch (Number(option)) {
            case 1: {
                consultarSaldo();
                break;
            }
            case 2: {
                depositar();
                break;
            }
            case 3: {
                retirar();
                break;
            }
            case 4: {
                console.log('¡Gracias por usar el banco!');
                process.exit();
                return;
            }
            default: {
                console.warn('Operación no válida');
                principal();
            }
        }
    });
}

function consultarSaldo() {
    console.log(`> Su saldo es $${(datosCliente.saldo).toFixed(2)}`);
    console.log();
    setTimeout(principal, demoraMensaje);
}

function depositar() {
    rl.question('Ingrese el monto a depositar: ', (monto) => {
        const montoFloat = parseFloat(monto);
        if (montoFloat <= 0) {
            console.warn('Monto inválido');
            principal();
            return;
        }

        datosCliente.saldo += montoFloat;
        console.log(`> Se ha depositado $${montoFloat.toFixed(2)}`);

        setTimeout(principal, demoraMensaje);
    });
}

function retirar() {
    rl.question('Ingrese el monto a retirar: ', (monto) => {
        const montoFloat = parseFloat(monto);
        if (montoFloat <= 0) {
            console.warn('Monto inválido');
            principal();
            return;
        }

        if (montoFloat > datosCliente.saldo) {
            console.warn('Saldo insuficiente');
            principal();
            return;
        }

        datosCliente.saldo -= montoFloat;
        console.log(`> Se ha retirado $${montoFloat.toFixed(2)}`);
        setTimeout(principal, demoraMensaje);
    })
}

ingresarPin();
