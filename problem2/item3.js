async function getPokemonNumberByName(pokemonName) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.id;
  } catch (error) {
    console.error("Error while fetching information:", error);
    return null;
  }
}

const pokemonName = "pikachu"; // You can change the name here (e.g., "bulbasaur", "charmander", etc.)

getPokemonNumberByName(pokemonName)
  .then((number) => {
    if (number !== null) {
      console.log(`The number of Pokémon "${pokemonName}" is: ${number}`);
    } else {
      console.log(`Pokémon "${pokemonName}" not found.`);
    }
  })
  .catch((error) => console.error(error));
