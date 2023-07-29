async function getTotalSumByType(type) {
  const url = `https://pokeapi.co/api/v2/type/${type}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.pokemon.length;
  } catch (error) {
    console.error("Error while fetching information:", error);
    return 0;
  }
}

const pokemonType = "water"; // You can change the type here (e.g., "water", "grass", "electric", etc.)
getTotalSumByType(pokemonType)
  .then((total) =>
    console.log(`The total sum of Pokémon of type ${pokemonType} is: ${total}`)
  )
  .catch((error) => console.error(error));
