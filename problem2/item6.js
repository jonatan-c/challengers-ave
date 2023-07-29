async function checkPokemonTypeByNumber(pokemonNumber, desiredType) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.types.some((typeInfo) => typeInfo.type.name === desiredType);
  } catch (error) {
    console.error(
      `Error while fetching information of Pokémon with number ${pokemonNumber}:`,
      error
    );
    return false;
  }
}

const pokemonNumber = 25; // You can change the number here to check another Pokémon
const desiredType = "electric"; // You can change the type here (e.g., "fire", "water", "grass", etc.)

checkPokemonTypeByNumber(pokemonNumber, desiredType)
  .then((hasType) => {
    if (hasType) {
      console.log(
        `The Pokémon with number ${pokemonNumber} has the type "${desiredType}".`
      );
    } else {
      console.log(
        `The Pokémon with number ${pokemonNumber} does NOT have the type "${desiredType}".`
      );
    }
  })
  .catch((error) => console.error(error));
