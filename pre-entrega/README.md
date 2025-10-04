# ⚙️ Pre-entrega de proyecto

## 📂 Requisitos

El sistema debe ser capaz de interpretar comandos ingresados en la terminal y ejecutar las siguientes acciones contra la [API de FakeStore](https://fakestoreapi.com/docs).

### ➡️ Consultar todos los productos
Si ejecutas `npm run start GET products` el programa debe realizar una petición asíncrona a la API y devolver la lista completa de productos en la consola.

### ➡️ Consultar un producto específico
Si ejecutas `npm run start GET products/<productId>` el programa debe obtener y mostrar el producto correspondiente al `productId` indicado.
> Ejemplo: `npm run start GET products/5`

### ➡️ Crear un producto nuevo
Si ejecutas `npm run start POST products <title> <price> <category>` el programa debe enviar una petición POST a la API para agregar un nuevo producto con los datos proporcionados (title, price, category) y devolver el resultado en la consola.
> Ejemplo: `npm run start POST products T-Shirt-Rex 300 remeras`

### ➡️ Eliminar un producto
Si ejecutas `npm run start DELETE products/<productId>` el programa debe enviar una petición DELETE para eliminar el producto correspondiente al `productId` y devolver la respuesta en la consola.
> Ejemplo: `npm run start DELETE products/7`

---

## ℹ️ Tips de desarrollo

- Usa `process.argv` para capturar y procesar los comandos ingresados
- Implementa `fetch` para interactuar con la API de FakeStore
- Aprovecha el uso de destructuring y spread para manipular los datos
- Utiliza métodos de arrays y strings para separar cadenas de texto y conjuntos de información y aprovechar solo lo que necesites
