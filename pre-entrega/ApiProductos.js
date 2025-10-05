function validarId(id) {
    return !Number.isNaN(id) && id > 0;
}

export class ApiProductos {
    constructor() {
        this.baseUrl = 'https://fakestoreapi.com';
    }

    async peticion(metodo = 'GET', endpoint, body) {
        let result;
        try {
            result = await fetch(`${this.baseUrl}${endpoint}`, {
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

    async obtenerProductos() {
        return await this.peticion('GET', '/products');
    }

    async obtenerProducto(id) {
        if (!validarId(id)) {
            throw new Error('Se requiere un ID para obtener un producto específico.');
        }

        return await this.peticion('GET', `/products/${id}`);
    }

    async crearProducto({ title, price, category }) {
        if (!title || !price || !category) {
            throw new Error('Los parámetros son incorrectos. Se requieren title, price y category.')
        }

        if (Number.isNaN(price) || price <= 0) {
            throw new Error('El precio ingresado no es válido. Debe ser un número positivo.');
        }

        return await this.peticion('POST', '/products', {
            title,
            price,
            category,
        });
    }

    async eliminarProducto(id) {
        if (!validarId(id)) {
            throw new Error('Se requiere un ID para eliminar un producto.');
        }

        return await this.peticion('DELETE', `/products/${id}`);
    }
}
