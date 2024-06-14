import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PokemonContexto } from "../context/pokemonContext";


const PokemonDetail = () => {
  const { name } = useParams();
  const { pokemones } = useContext(PokemonContexto);

  const selectedPokemon = pokemones.find(pokemon => pokemon.name === name);

  if (!selectedPokemon) {
    return <div>Pokémon no encontrado</div>;
  }

  return (
    <div className="detallepokemon">
      <h2 className="pokemon-name">{selectedPokemon.name}</h2>
      <div className="pokemon-details">
        <img src={selectedPokemon.image} alt={selectedPokemon.name} className="pokemon-image" />
        <div className="pokemon-stats">

          <ul>
            {selectedPokemon.stats.map(stat => (
              <li key={stat.name}>{stat.name}: {stat.base_stat}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PokemonDetail;
