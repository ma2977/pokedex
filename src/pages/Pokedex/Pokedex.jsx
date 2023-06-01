import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import FilterForm from "../../components/pokedex/FilterForm/FilterForm";
import PokemonCard from "../../components/pokedex/PokemonCard/PokemonCard";
import PokemonList from "../../components/PokemonList/PokemonList";
import { UserNameContext } from "../../context/UserNameContext";
import { getAllPokemons } from "../../services/getAllPokemons";
import "./Pokedex.css";

const Pokedex = () => {
    const { pokemons, pokemonName, pokemonTypeId }= useLoaderData();
    const { userName } = useContext(UserNameContext);

  return (
    <section>
        <p className="pokedex_message">
            <em className="pokedex_message_username">Welcome {userName}</em>, you will find your favorite pokemon here
            </p>
        <FilterForm nameInitial={pokemonName} typeInitial={pokemonTypeId} />
    {!pokemons.length ? (
    <p>There is no pokemon</p>
  ) : (
   <PokemonList pokemons={pokemons}/>    
)}
    </section>
  );
};

export default Pokedex