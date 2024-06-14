import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PokemonDetail from "./views/PokemonDetail ";

import Home from "./views/Home";
import Pokemones from "./views/Pokemones";

import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App
