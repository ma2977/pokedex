import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getPokemonById } from "../../../services/getPokemonById";
import "./PokemonDetail.css";
const PokemonDetail = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonData = await getPokemonById(pokemonId);
      setPokemon(pokemonData);
    };

    loadPokemon();
  }, [pokemonId]);

  return (
    <div>
<h1 className="pokemon_detail_title">Pokemon Details</h1>
{pokemon ? (
<div className="detail_pokemon">
<p>Here is the information for Pokémon {pokemon.name}</p>
<img src={pokemon.image} alt={pokemon.name} />
                    
        <p>Name: {pokemon.name}</p>
        {pokemon.types && <p>Types: {pokemon.types.join(", ")}</p>}
        {pokemon.moves && <p>Moves: {pokemon.moves.join(", ")}</p>}
        <p>Abilities: {pokemon.abilities.join(" ") }</p>           

</div>
) : (
<p>Loading...</p>
)}
</div>
);
};
export default PokemonDetail;


