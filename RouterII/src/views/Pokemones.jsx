import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pokemones = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemones-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
      <div className="pokemon-image-container" style={{ marginRight: '40px' }}>
        <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} className="pokemon-image" style={{ width: '400px', height: '400px' }} />
      </div>
      <div className="pokemon-info">
        <h1>{pokemon.name}</h1>
        <ul>
          {pokemon.stats.map(stat => (
            <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
          ))}
        </ul>
        <p className="pokemon-types">{pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default Pokemones;

