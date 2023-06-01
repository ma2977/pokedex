import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getPokemonById } from "../../../services/getPokemonById";

const PokemonDetail = () => {
  const {pokemonId}= useParams();

useEffect(() => {
    const loadPokemon = async () => {
        const pokemon = await getPokemonById(pokemonId);
        console.log(pokemon); 
    };

    loadPokemon();
},[]);

  return (
    <div>
        <h1>Pokemon Details</h1>
        <p>Here should show up all the pokemon's info</p>
    <mark>{pokemonId}</mark>
    </div>
  )
}

export default PokemonDetail