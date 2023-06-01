import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home/Home";
import PokemonDetail from "../pages/Home/PokemonDetail/PokemonDetail";
import Pokedex from "../pages/Pokedex/Pokedex";
import { pokedexLoader } from "./loaders/pokedexLoader";

 export const router = createBrowserRouter([
    {
     path: "/",
     element: <Home />,
    },
    {
        path: "/pokedex",
        element: (
        <ProtectedRoute>
            <Layout />
        </ProtectedRoute>
        ),
        children: [
            // {
            //     index: true,
            //     elemente: <p>Aqui se listan los pokemones</p>
            // },
            {
                path: "",
                element: <Pokedex />,
                loader: pokedexLoader,
            }, 
            {
                path: ":pokemonId",
                element: <PokemonDetail />,
            },
        ],
    },
]);
