import {useState} from "react";
import { Link } from "react-router-dom";
import { usePagination } from "../../hooks/usePagination";
import PagesComponents from "../../pages/Pokedex/PagesComponents/PagesComponents";
import PokemonCard from "../pokedex/PokemonCard/PokemonCard";

const PokemonList = ({ pokemons }) => {
 const [pokemonsPerPage, setPokemonsPerPage] = useState(15)
const [ currentPage, totalPages, pokemonSlice, changePageto ] = usePagination(pokemons, pokemonsPerPage);
  return (
    <section>
        <PagesComponents 
        totalPages={totalPages} 
        onChangePage={changePageto} 
        onNextPage={()=>changePageto(currentPage +1)}
        onBackPage={()=>changePageto(currentPage -1)}
         />

       <ul>
            {pokemonSlice.map ((pokemon) => (
            <li key= {pokemon.url}>
             <Link style={{ color : "unset",textDecoration: "unset" }}to={`/pokedex/${pokemon.url.split("/").at (-2)}`}>
                <PokemonCard pokemonId={pokemon.url.split("/").at (-2)}/>
              </Link>
            </li>
            ))}
        </ul>

        <PagesComponents 
        totalPages={totalPages} 
        onChangePage={changePageto} 
        onNextPage={()=>changePageto(currentPage +1)}
        onBackPage={()=>changePageto(currentPage -1)}
         />

    </section>
  )
}

export default PokemonList