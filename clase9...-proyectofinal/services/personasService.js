const personas = [
    {id: 1, name: 'Ana', age: 15},
    {id: 2, name: 'Carlos', age: 22},
    {id: 3, name: 'María', age: 18},
    {id: 4, name: 'Juan', age: 35},
    {id: 5, name: 'Sofia', age: 19},
    {id: 6, name: 'Pedro', age: 52},
    {id: 7, name: 'Laura', age: 31},
    {id: 8, name: 'Miguel', age: 38},
    {id: 9, name: 'Isabel', age: 27},
    {id: 10, name: 'Diego', age: 42},
    {id: 11, name: 'Carmen', age: 18},
    {id: 12, name: 'Luis', age: 29},
    {id: 13, name: 'Elena', age: 33},
    {id: 14, name: 'Pablo', age: 41},
    {id: 15, name: 'Lucía', age: 24},
    {id: 16, name: 'Roberto', age: 48},
    {id: 17, name: 'Patricia', age: 36},
    {id: 18, name: 'Fernando', age: 39},
    {id: 19, name: 'Daniela', age: 22},
    {id: 20, name: 'Javier', age: 44}
];

export const getPersonas = () => personas;

export const getPersonasByAge = (minAge, maxAge) =>
    personas.filter(persona => (minAge ? persona.age >= minAge : true) && (maxAge ? persona.age <= maxAge : true));

export const getPersonaById = (id) => personas.find(persona => persona.id === id);
