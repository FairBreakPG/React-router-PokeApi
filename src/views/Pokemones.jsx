import { useContext, useState } from "react";
import { PokemonContexto } from "../context/pokemonContext";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Pokemones = () => {
  // Estados
  const { pokemones, cargando } = useContext(PokemonContexto);
  const [selectedName, setSelectedName] = useState('');

  // Navigate
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedName(event.target.value);
  };

  const handleShowDetails = () => {
    if (selectedName) {
      navigate(`/pokemones/${selectedName}`);
    }
  };

  if (cargando) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Selecciona un pokemón</h1>
      <Form.Group className="mb-3 form-group">
        <Form.Select className="selector" onChange={handleSelectChange}>
          <option>Pokemones</option>
          {pokemones.map((pokemon) => (
            <option key={pokemon.id} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </Form.Select>
        <div className="button-container">
          <Button className="boton" variant="secondary" onClick={handleShowDetails}>
            Ver detalle
          </Button>
        </div>
      </Form.Group>
    </div>
  );
};

export default Pokemones;
