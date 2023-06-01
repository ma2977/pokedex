import { useEffect,useState } from "react";
import { getPokemonById } from "../../../services/getPokemonById";
import "./PokemonCard.css";

const statsTarget = ["hp", "attack", "defense", "speed"];

const PokemonCard = ({ pokemonId }) => {
    const [pokemon, setPokemon] = useState(null);
    

const statsByJuanito = pokemon?.stats.filter(stat =>statsTarget.includes(stat.name.toLowerCase())
);

useEffect(() => {
    const loadPokemon = async () => {
        const pokemonData = await getPokemonById(pokemonId);
        setPokemon(pokemonData);
    }
    loadPokemon();
}, []);

    return (
    <article className="pokemon-card-grid">
{!pokemon && <p>Loading...</p> }

{pokemon && (
<>
<div className="pokemon-car_img">
    <img src={pokemon.image} alt="" />
</div>
    <h2 className="pokemon-card_title">{pokemon.name}</h2>
   <section>
   <h3>Type</h3>
    <ul className="pokemon-card_list">
        {pokemon.types.map((type) => (
          <li key={type} className="pokemon-card_item">{type} </li>  
        ))}
      </ul>
</section>

<section>
   <h3>Stats</h3>
    <ul className="pokemon-card_list">
        {statsByJuanito.map ((stat) => (
           <li key={stat.name}className="pokemon-card_item"> 
       <em>{stat.name.toUpperCase()}</em>
            <span>{stat.value}</span>
     </li>   
     ))}    
    </ul>
 </section>
</>
)}
</article>
  );
};

export default PokemonCard;