import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=50&limit=50')
      .then(response => response.json())
      .then(data => setPokemones(data.results));
  }, []);

  const handleChange = (event) => {
    navigate(`/pokemon/${event.target.value}`);
  };

  const handleViewDetail = () => {
    const selectedPokemon = document.getElementById("pokemonSelector").value;
    if (selectedPokemon) {
      navigate(`/pokemon/${selectedPokemon}`);
    } else {      
      alert("Por favor selecciona un Pokémon primero.");
    }
  };
  

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1 style={{ marginTop: '10px', marginBottom: '10px' }}>Selecciona un Pokemon</h1>
      <select id="pokemonSelector" onChange={handleChange} style={{ margin: '10px', paddingLeft: '30px', paddingRight: '30px' }}>
        <option value="">Pokemones</option>
        {pokemones.map(pokemon => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <br />
      <button onClick={handleViewDetail} style={{ backgroundColor: 'black', color: 'white', borderRadius: '3px', padding: '3px 10px', border: 'none' }}>Ver Detalle</button>
    </div>
  );
};

export default Pokemones;
