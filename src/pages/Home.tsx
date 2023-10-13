import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemons";
import {Button, Container} from "@mui/material";

const Home = () => {
    const { pokemons, hasMorePokemon, fetchNextPage } = usePokemons();

    return (
        <Container>
            <PokemonList pokemons={pokemons}></PokemonList>
            {hasMorePokemon ? (
                <Button variant="contained" onClick={fetchNextPage} >Load more Pokemon</Button>
            ) : null}
        </Container>
    )
}

export default Home;