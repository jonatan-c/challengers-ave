async function getPokemonDataById(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      name: data.name,
      types: data.types.map((typeInfo) => typeInfo.type.name),
      weight: data.weight,
    };
  } catch (error) {
    console.error(
      `Error while fetching information of Pokémon with ID ${pokemonId}:`,
      error
    );
    return null;
  }
}

function sortPokemon(pokemonIds, sorter) {
  return Promise.all(pokemonIds.map((id) => getPokemonDataById(id)))
    .then((pokemons) => {
      switch (sorter) {
        case "name":
          return pokemons.sort((a, b) => a.name.localeCompare(b.name));
        case "type":
          return pokemons.sort((a, b) => {
            const typeA = a.types.join(", ");
            const typeB = b.types.join(", ");
            return typeA.localeCompare(typeB);
          });
        case "weight":
          return pokemons.sort((a, b) => a.weight - b.weight);
        default:
          throw new Error("The sorting indicator is not valid.");
      }
    })
    .catch((error) => console.error(error));
}

const pokemonIds = [1, 4, 7, 25, 132]; // Pokémon IDs to retrieve data (you can change them to other IDs)
const sorter = "weight"; // Sorting indicator (you can use "name", "type", or "weight")

sortPokemon(pokemonIds, sorter)
  .then((sortedPokemons) => {
    console.log(`Pokémon sorted by ${sorter}:`);
    console.log(sortedPokemons);
  })
  .catch((error) => console.error(error));
