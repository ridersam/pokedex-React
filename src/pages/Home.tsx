import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemons";
import {Container} from "@mui/material";

const Home = () => {
    const { pokemons } = usePokemons();

    return (
        <Container>
            <PokemonList pokemons={pokemons}></PokemonList>
        </Container>
    )
}

export default Home;