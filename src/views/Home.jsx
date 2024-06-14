import { useContext } from "react";
import { PokemonContexto } from "../context/pokemonContext";

const Home = () => {
  const { pokemones, cargando } = useContext(PokemonContexto);

  if (cargando) {
    return <div>Cargando...</div>;
  }

  const firstPokemon = pokemones[93];

  return (
    <div>
      <h1>Bienvenido maestro Pokémon</h1>
      {firstPokemon && (
        <div>
          <img className="fotoHome" src={firstPokemon.image} alt={firstPokemon.name} />
        </div>
      )}
    </div>
  );
};

export default Home;
