const url = 'https://rickandmortyapi.com/api/character';

async function ejecutarConsulta() {
    const resultadoConsulta = await fetch(url);
    if (!resultadoConsulta.ok) {
        throw new Error('No se pudo obtener datos de la consulta a la API.');
    }

    const personajes = (await resultadoConsulta.json()).results;
    return personajes.slice(0, 5);
}

try {
    console.log('Mostrando los primeros 5 resultados de la consulta de personajes:');

    const personajes = await ejecutarConsulta();
    personajes.forEach(personaje =>
        console.log(`${personaje.name} (${personaje.species}, ${personaje.gender})`)
    );
} catch (error) {
    console.error('¡Error consultando la API!', error);
} finally{
    console.log();
    console.log('Consulta finalizada.');
    console.log();
}
