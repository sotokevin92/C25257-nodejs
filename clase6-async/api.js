const url = 'https://rickandmortyapi.com/api/character';

console.log('Mostrando los primeros 5 resultados de la consulta de personajes:');

fetch(url).then(data => data.json())
    .then(data => data.results)
    .then(personajes => personajes.slice(0, 5)
        .forEach(personaje => console.log(`${personaje.name} (${personaje.species}, ${personaje.gender})`))
    ).catch(error => console.log('¡Error consultando la API!', error))
    .finally(() => {
        console.log();
        console.log('Consulta finalizada.');
        console.log();
    });
