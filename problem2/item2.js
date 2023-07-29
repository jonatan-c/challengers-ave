async function getPokemonByTypes(type1, type2) {
  const urlType1 = `https://pokeapi.co/api/v2/type/${type1}`;
  const urlType2 = `https://pokeapi.co/api/v2/type/${type2}`;

  try {
    const [responseType1, responseType2] = await Promise.all([
      fetch(urlType1),
      fetch(urlType2),
    ]);

    const [dataType1, dataType2] = await Promise.all([
      responseType1.json(),
      responseType2.json(),
    ]);

    const pokemonType1 = dataType1.pokemon.map(
      (pokemon) => pokemon.pokemon.name
    );
    const pokemonType2 = dataType2.pokemon.map(
      (pokemon) => pokemon.pokemon.name
    );
    const commonPokemon = pokemonType1.filter((name) =>
      pokemonType2.includes(name)
    );

    return commonPokemon;
  } catch (error) {
    console.error("Error while fetching information:", error);
    return [];
  }
}

const type1 = "fire";
const type2 = "flying";
getPokemonByTypes(type1, type2)
  .then((pokemons) =>
    console.log(
      `Pokémon that belong to both types ( ${type1} and ${type2} ): ${pokemons.join(
        ", "
      )}`
    )
  )
  .catch((error) => console.error(error));
