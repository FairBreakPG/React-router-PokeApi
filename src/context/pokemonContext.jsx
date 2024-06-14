import { createContext, useEffect, useState } from "react";

export const PokemonContexto = createContext();

export default function PokemonProvider({ children }) {

    const [pokemones, setPokemones] = useState([]);
    const [cargando, setCargando] = useState(true);
    const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=300&offset=0';

    const fetchData = async () => {
        try {
            const pokemonesJson = await fetch(API_URL);
            const { results } = await pokemonesJson.json();
            const data = handleClearData(results);
            setCargando(false);
            setPokemones(data);
            console.log("data", data);
        } catch (error) {
            console.log(error);

        }
    };

    const handleClearData = (pokemones) => {
        return pokemones.map((pokemones) => {
            let pokemones_detalles = {};

            pokemones_detalles['name'] = pokemones.name;

            fetch(pokemones.url)
                .then((response) => response.json())
                .then((pokemones) => {
                    const img = pokemones.sprites.other.home.front_default;
                    const stats = pokemones.stats.map((stat) => ({
                        name: stat.stat.name,
                        base_stat: stat.base_stat,
                    }));

                    pokemones_detalles['id'] = pokemones.id;
                    pokemones_detalles['weight'] = pokemones.weight;
                    pokemones_detalles['image'] = img;
                    pokemones_detalles['stats'] = stats;
                })
                .catch((error) => console.log(error));

            return pokemones_detalles;
        });
    };


    useEffect(() => {
        fetchData();
    }, []);


    return (
        <PokemonContexto.Provider value={{ pokemones, cargando }}>
            {children}
        </PokemonContexto.Provider>
    );
}