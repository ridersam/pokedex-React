import { IndexedPokemon } from "../interfaces/pokemon.interface";
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface PokemonCardProps {
    pokemon: IndexedPokemon;
}

const PokemonCard = ({pokemon}: PokemonCardProps) => {
    return <Card>
        <CardContent>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Typography>{pokemon.name}</Typography>
            </Box>
        </CardContent>
    </Card>
};

export default PokemonCard;