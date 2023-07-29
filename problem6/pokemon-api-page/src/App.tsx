/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import "./App.css";

interface PokemonData {
  name: string;
  number: number;
  types: string[];
  weight: number;
  height: number;
  image: string;
}

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError("");
    if(event.target.value.length == 0) {
      setPokemonData(null);
    }
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (e :any) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
      );
      const data = response.data;
      const pokemon: PokemonData = {
        name: data.name,
        number: data.id,
        types: data.types.map((typeInfo: any) => typeInfo.type.name),
        weight: data.weight,
        height: data.height,
        image: data.sprites.front_default,
      };
      setPokemonData(pokemon);
    } catch (error) {
      console.error("Error  to get data from API", error);
      setPokemonData(null);
      setError("The pokemon not exist");
    }
  };

  return (
    <div className="app">
      <h1>Pokémon Search</h1>
      <form  onSubmit={handleSearch} className="search-input">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search by name or number"
        />
        <button type="submit">Search</button>
      </form>
      {pokemonData ? (
        <div className="pokemon-data">
          <h2>{pokemonData.name}</h2>
          <p>Number: {pokemonData.number}</p>
          <p>Type: {pokemonData.types.join(", ")}</p>
          <p>Weight: {pokemonData.weight / 10} kg</p>
          <p>Hight: {pokemonData.height / 10} m</p>
          <img src={pokemonData.image} alt={pokemonData.name} />
        </div>
      ) : (
        <>
          <p className="error">{error}</p>
          <p>Not found pokemon</p>
        </>
      )}
    </div>
  );
};

export default App;
