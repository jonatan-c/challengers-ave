async function getBaseStatsByPokemonNumber(pokemonNumber) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const stats = data.stats.map((stat) => {
      return {
        name: stat.stat.name,
        base_stat: stat.base_stat,
      };
    });

    return stats;
  } catch (error) {
    console.error("Error while fetching information:", error);
    return null;
  }
}

const pokemonNumber = 25; // You can change the number here to get the base stats of another Pokémon

getBaseStatsByPokemonNumber(pokemonNumber)
  .then((stats) => {
    if (stats !== null) {
      console.log(`The 6 base stats of Pokémon #${pokemonNumber} are:`);
      console.log(stats);
    } else {
      console.log(`Pokémon with number ${pokemonNumber} not found.`);
    }
  })
  .catch((error) => console.error(error));
